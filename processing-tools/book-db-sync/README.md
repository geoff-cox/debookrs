# Book Database Sync (SQLite)

This tool provides a beginner-friendly database workflow for the PreTeXt book.

## Why SQLite?

- Zero setup (single `.db` file)
- Easy to inspect (`sqlite3` CLI or DB Browser for SQLite)
- Great for solo authors and small teams

## Author-focused strategy

1. Treat `source/main.ptx` as the canonical table-of-contents structure.
2. Track each section include (`<xi:include href="..." />`) in a `sections` table.
3. Store the full text of each included `.ptx` file in the database.
4. Keep sync fingerprints (`source_sha256`, `last_synced_sha256`) so two-way sync can detect conflicts.
5. Resolve conflicts explicitly (`--prefer source` or `--prefer db`) when both sides changed.

## Tables

### `chapters`
- `label` (PK): chapter label from `main.ptx`
- `title`: chapter title
- `chapter_order`: chapter position in the book
- `updated_at`: last chapter metadata refresh

### `sections`
- `href` (PK): include path (for example `c2-solns/sec-visualizing-solns.ptx`)
- `chapter_label`: owning chapter
- `section_order`: include order within chapter
- `kind`: `section`, `exercises`, `model`, or `other`
- `xml_id`: section file's top-level `xml:id` (when present)
- `title`: first section title in the included file (when present)
- `content`: full `.ptx` source for the included file
- `source_mtime`: source file modified time
- `source_sha256`: current source file hash
- `db_updated_at`: timestamp of latest DB-side content update
- `last_synced_sha256`: hash at last clean sync point

## Usage

Run from repository root:

```bash
python processing-tools/book-db-sync/book_db_sync.py init
python processing-tools/book-db-sync/book_db_sync.py pull
python processing-tools/book-db-sync/book_db_sync.py sync
python processing-tools/book-db-sync/book_db_sync.py sync --prefer source
python processing-tools/book-db-sync/book_db_sync.py sync --prefer db
python processing-tools/book-db-sync/book_db_sync.py push
```

Optional paths:

```bash
python processing-tools/book-db-sync/book_db_sync.py sync \
  --db /absolute/path/to/book-content.db \
  --source-root /absolute/path/to/source \
  --main main.ptx
```

## Practical workflow

- Edit PreTeXt files normally, then run `sync` (or `pull`) to update DB.
- Edit records in SQLite, then run `sync --prefer db` (or `push`) to write updates back to `.ptx` files.
- Start with `--prefer none` to detect conflicts safely.
