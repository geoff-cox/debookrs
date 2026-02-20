#!/usr/bin/env python3
"""Sync PreTeXt section source files with a beginner-friendly SQLite database."""

from __future__ import annotations

import argparse
import hashlib
import sqlite3
import time
import xml.etree.ElementTree as ET
from pathlib import Path

XI_NS = "http://www.w3.org/2001/XInclude"
XI_INCLUDE_TAG = f"{{{XI_NS}}}include"


SCHEMA_SQL = """
CREATE TABLE IF NOT EXISTS chapters (
    label TEXT PRIMARY KEY,
    title TEXT,
    chapter_order INTEGER NOT NULL,
    updated_at REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS sections (
    href TEXT PRIMARY KEY,
    chapter_label TEXT NOT NULL,
    section_order INTEGER NOT NULL,
    kind TEXT NOT NULL,
    xml_id TEXT,
    title TEXT,
    content TEXT NOT NULL,
    source_mtime REAL NOT NULL,
    source_sha256 TEXT NOT NULL,
    db_updated_at REAL NOT NULL,
    last_synced_sha256 TEXT,
    FOREIGN KEY(chapter_label) REFERENCES chapters(label)
);
"""


def sha256_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def text_or_none(value: str | None) -> str | None:
    if value is None:
        return None
    stripped = value.strip()
    return stripped if stripped else None


def parse_main(main_path: Path) -> tuple[list[dict], list[dict]]:
    tree = ET.parse(main_path)
    root = tree.getroot()
    book = root.find("book")
    if book is None:
        raise ValueError(f"No <book> element found in {main_path}")

    chapters: list[dict] = []
    sections: list[dict] = []

    for chapter_index, chapter in enumerate(book.findall("chapter"), start=1):
        label = chapter.attrib.get("label")
        if not label:
            raise ValueError("Every <chapter> in main.ptx must have a label")
        chapter_title = text_or_none(chapter.findtext("title"))
        chapters.append(
            {
                "label": label,
                "title": chapter_title,
                "chapter_order": chapter_index,
            }
        )

        section_index = 0
        for child in list(chapter):
            if child.tag != XI_INCLUDE_TAG:
                continue
            href = child.attrib.get("href")
            if not href:
                continue
            section_index += 1
            filename = Path(href).name
            if filename.startswith("sec-"):
                kind = "section"
            elif filename.startswith("exercises-"):
                kind = "exercises"
            elif filename.endswith("-model.ptx"):
                kind = "model"
            else:
                kind = "other"

            sections.append(
                {
                    "href": href,
                    "chapter_label": label,
                    "section_order": section_index,
                    "kind": kind,
                }
            )

    return chapters, sections


def parse_section_metadata(section_content: str) -> tuple[str | None, str | None]:
    try:
        node = ET.fromstring(section_content)
    except ET.ParseError:
        return None, None

    xml_id = node.attrib.get("{http://www.w3.org/XML/1998/namespace}id")
    title_text = text_or_none(node.findtext("title"))
    return xml_id, title_text


def read_source_file(source_root: Path, href: str) -> tuple[str, float, str]:
    section_path = (source_root / href).resolve()
    source_root_resolved = source_root.resolve()
    if not section_path.is_relative_to(source_root_resolved):
        raise ValueError(f"Refusing to access path outside source root: {href}")
    content = section_path.read_text(encoding="utf-8")
    mtime = section_path.stat().st_mtime
    return content, mtime, sha256_text(content)


def write_source_file(source_root: Path, href: str, content: str) -> tuple[float, str]:
    section_path = (source_root / href).resolve()
    source_root_resolved = source_root.resolve()
    if not section_path.is_relative_to(source_root_resolved):
        raise ValueError(f"Refusing to write path outside source root: {href}")
    section_path.parent.mkdir(parents=True, exist_ok=True)
    section_path.write_text(content, encoding="utf-8")
    mtime = section_path.stat().st_mtime
    return mtime, sha256_text(content)


def init_db(conn: sqlite3.Connection) -> None:
    conn.executescript(SCHEMA_SQL)
    conn.commit()


def upsert_chapters(conn: sqlite3.Connection, chapters: list[dict]) -> None:
    now = time.time()
    for chapter in chapters:
        conn.execute(
            """
            INSERT INTO chapters(label, title, chapter_order, updated_at)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(label) DO UPDATE SET
                title=excluded.title,
                chapter_order=excluded.chapter_order,
                updated_at=excluded.updated_at
            """,
            (chapter["label"], chapter["title"], chapter["chapter_order"], now),
        )


def pull_source_to_db(conn: sqlite3.Connection, source_root: Path, sections: list[dict]) -> None:
    now = time.time()
    for section in sections:
        content, mtime, source_hash = read_source_file(source_root, section["href"])
        xml_id, title = parse_section_metadata(content)
        conn.execute(
            """
            INSERT INTO sections(
                href, chapter_label, section_order, kind, xml_id, title, content,
                source_mtime, source_sha256, db_updated_at, last_synced_sha256
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(href) DO UPDATE SET
                chapter_label=excluded.chapter_label,
                section_order=excluded.section_order,
                kind=excluded.kind,
                xml_id=excluded.xml_id,
                title=excluded.title,
                content=excluded.content,
                source_mtime=excluded.source_mtime,
                source_sha256=excluded.source_sha256,
                db_updated_at=excluded.db_updated_at,
                last_synced_sha256=excluded.last_synced_sha256
            """,
            (
                section["href"],
                section["chapter_label"],
                section["section_order"],
                section["kind"],
                xml_id,
                title,
                content,
                mtime,
                source_hash,
                now,
                source_hash,
            ),
        )


def delete_removed_sections(conn: sqlite3.Connection, active_hrefs: set[str]) -> None:
    rows = conn.execute("SELECT href FROM sections").fetchall()
    db_hrefs = {row[0] for row in rows}
    to_delete = db_hrefs - active_hrefs
    if to_delete:
        conn.executemany("DELETE FROM sections WHERE href = ?", [(href,) for href in to_delete])


def push_db_to_source(conn: sqlite3.Connection, source_root: Path, section_hrefs: list[str]) -> int:
    writes = 0
    for href in section_hrefs:
        row = conn.execute(
            "SELECT content, source_sha256 FROM sections WHERE href = ?",
            (href,),
        ).fetchone()
        if row is None:
            continue
        db_content, known_source_hash = row
        db_hash = sha256_text(db_content)
        try:
            _, _, current_hash = read_source_file(source_root, href)
        except FileNotFoundError:
            current_hash = ""
        if current_hash == db_hash:
            conn.execute(
                "UPDATE sections SET source_sha256=?, last_synced_sha256=? WHERE href=?",
                (db_hash, db_hash, href),
            )
            continue

        if known_source_hash and current_hash != known_source_hash:
            raise RuntimeError(
                f"Refusing to overwrite newer source for {href}. Run sync first or use --prefer."
            )

        mtime, source_hash = write_source_file(source_root, href, db_content)
        conn.execute(
            """
            UPDATE sections
            SET source_mtime=?, source_sha256=?, last_synced_sha256=?
            WHERE href=?
            """,
            (mtime, source_hash, source_hash, href),
        )
        writes += 1
    return writes


def sync_bidirectional(
    conn: sqlite3.Connection,
    source_root: Path,
    sections: list[dict],
    prefer: str,
) -> tuple[int, int, int]:
    pulled = 0
    pushed = 0
    conflicts = 0
    now = time.time()

    for section in sections:
        href = section["href"]
        source_content, source_mtime, source_hash = read_source_file(source_root, href)
        xml_id, title = parse_section_metadata(source_content)

        row = conn.execute(
            """
            SELECT content, last_synced_sha256
            FROM sections
            WHERE href = ?
            """,
            (href,),
        ).fetchone()

        if row is None:
            conn.execute(
                """
                INSERT INTO sections(
                    href, chapter_label, section_order, kind, xml_id, title, content,
                    source_mtime, source_sha256, db_updated_at, last_synced_sha256
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    href,
                    section["chapter_label"],
                    section["section_order"],
                    section["kind"],
                    xml_id,
                    title,
                    source_content,
                    source_mtime,
                    source_hash,
                    now,
                    source_hash,
                ),
            )
            pulled += 1
            continue

        db_content, last_synced_hash = row
        db_hash = sha256_text(db_content)

        source_changed = last_synced_hash is None or source_hash != last_synced_hash
        db_changed = last_synced_hash is None or db_hash != last_synced_hash

        if source_changed and db_changed and source_hash != db_hash:
            if prefer == "source":
                conn.execute(
                    """
                    UPDATE sections
                    SET chapter_label=?, section_order=?, kind=?, xml_id=?, title=?,
                        content=?, source_mtime=?, source_sha256=?, db_updated_at=?,
                        last_synced_sha256=?
                    WHERE href=?
                    """,
                    (
                        section["chapter_label"],
                        section["section_order"],
                        section["kind"],
                        xml_id,
                        title,
                        source_content,
                        source_mtime,
                        source_hash,
                        now,
                        source_hash,
                        href,
                    ),
                )
                pulled += 1
            elif prefer == "db":
                written_mtime, written_hash = write_source_file(source_root, href, db_content)
                db_xml_id, db_title = parse_section_metadata(db_content)
                conn.execute(
                    """
                    UPDATE sections
                    SET chapter_label=?, section_order=?, kind=?, xml_id=?, title=?,
                        source_mtime=?, source_sha256=?, last_synced_sha256=?
                    WHERE href=?
                    """,
                    (
                        section["chapter_label"],
                        section["section_order"],
                        section["kind"],
                        db_xml_id,
                        db_title,
                        written_mtime,
                        written_hash,
                        written_hash,
                        href,
                    ),
                )
                pushed += 1
            else:
                conflicts += 1
            continue

        if source_changed and (not db_changed or source_hash == db_hash):
            conn.execute(
                """
                UPDATE sections
                SET chapter_label=?, section_order=?, kind=?, xml_id=?, title=?,
                    content=?, source_mtime=?, source_sha256=?, db_updated_at=?,
                    last_synced_sha256=?
                WHERE href=?
                """,
                (
                    section["chapter_label"],
                    section["section_order"],
                    section["kind"],
                    xml_id,
                    title,
                    source_content,
                    source_mtime,
                    source_hash,
                    now,
                    source_hash,
                    href,
                ),
            )
            pulled += 1
            continue

        if db_changed and not source_changed:
            written_mtime, written_hash = write_source_file(source_root, href, db_content)
            db_xml_id, db_title = parse_section_metadata(db_content)
            conn.execute(
                """
                UPDATE sections
                SET chapter_label=?, section_order=?, kind=?, xml_id=?, title=?,
                    source_mtime=?, source_sha256=?, last_synced_sha256=?
                WHERE href=?
                """,
                (
                    section["chapter_label"],
                    section["section_order"],
                    section["kind"],
                    db_xml_id,
                    db_title,
                    written_mtime,
                    written_hash,
                    written_hash,
                    href,
                ),
            )
            pushed += 1
            continue

        conn.execute(
            """
            UPDATE sections
            SET chapter_label=?, section_order=?, kind=?, xml_id=?, title=?,
                source_mtime=?, source_sha256=?, last_synced_sha256=?
            WHERE href=?
            """,
            (
                section["chapter_label"],
                section["section_order"],
                section["kind"],
                xml_id,
                title,
                source_mtime,
                source_hash,
                source_hash,
                href,
            ),
        )

    return pulled, pushed, conflicts


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Sync PreTeXt source sections with a local SQLite database.",
    )
    parser.add_argument(
        "command",
        choices=("init", "pull", "push", "sync"),
        help="init creates the schema; pull imports source; push exports DB; sync is two-way.",
    )
    parser.add_argument(
        "--db",
        default="processing-tools/book-db-sync/book-content.db",
        help="Path to SQLite database file.",
    )
    parser.add_argument(
        "--source-root",
        default="source",
        help="Path to source folder containing main.ptx and included section files.",
    )
    parser.add_argument(
        "--main",
        default="main.ptx",
        help="Main PreTeXt file inside source-root.",
    )
    parser.add_argument(
        "--prefer",
        choices=("none", "source", "db"),
        default="none",
        help="Conflict strategy for sync when both DB and source changed.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    source_root = Path(args.source_root).resolve()
    main_path = source_root / args.main
    db_path = Path(args.db).resolve()
    db_path.parent.mkdir(parents=True, exist_ok=True)

    conn = sqlite3.connect(db_path)
    try:
        init_db(conn)

        if args.command == "init":
            print(f"Initialized database schema at {db_path}")
            return

        try:
            chapters, sections = parse_main(main_path)
        except FileNotFoundError:
            print(f"Error: main PreTeXt file not found at '{main_path}'. "
                  "Check the --source-root and --main arguments.")
            raise SystemExit(1)
        except ET.ParseError as exc:
            print(f"Error: Failed to parse XML in main PreTeXt file '{main_path}': {exc}")
            raise SystemExit(1)
        active_hrefs = {section["href"] for section in sections}

        upsert_chapters(conn, chapters)
        delete_removed_sections(conn, active_hrefs)

        if args.command == "pull":
            pull_source_to_db(conn, source_root, sections)
            conn.commit()
            print(f"Pulled {len(sections)} section files from source into {db_path}")
            return

        if args.command == "push":
            writes = push_db_to_source(conn, source_root, [s["href"] for s in sections])
            conn.commit()
            print(f"Pushed {writes} section file(s) from database to source")
            return

        pulled, pushed, conflicts = sync_bidirectional(conn, source_root, sections, args.prefer)
        conn.commit()
        print(
            f"Sync complete. pulled={pulled}, pushed={pushed}, conflicts={conflicts}, prefer={args.prefer}"
        )
    finally:
        conn.close()


if __name__ == "__main__":
    main()
