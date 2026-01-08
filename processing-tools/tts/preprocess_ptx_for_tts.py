#!/usr/bin/env python3
"""
preprocess_ptx_for_tts.py

Preprocess *.ptx files (non-recursively) into TTS-friendly PTX/XML-ish text files.

Adds:
- Remove attributes label="..." and xml:id="..." (and optionally more)
- Strip emojis from all text nodes

Keeps pacing/context tags like <p>, <aside>, sectioning, and preserves <m>/<me>.

Usage example:

python preprocess_ptx_for_tts.py /path/to/ptx_folder /path/to/preprocessed_txt
"""

from __future__ import annotations

import argparse
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, Set

from lxml import etree


# --- Defaults ----------------------------------------------------------------

IGNORED_TAGS_MIN: Set[str] = {
    "examples",
    "audio",
    "exercises",
    "exercise",
    "task",
    "figure",
    "image",
    "table",
    "tabular",
}

IGNORED_TAGS_OPTIONAL: Set[str] = {
    "checkpoint",
    "solution",
    "answer",
    "hint",
}

MATH_TAGS: Set[str] = {"m", "me"}

PACING_TAGS: Set[str] = {
    "p",
    "aside",
    "section",
    "subsection",
    "subsubsection",
    "title",
    "paragraphs",
    "introduction",
    "conclusion",
    "statement",
    "proof",
    "explanation",
}

UNWRAP_INLINE_DEFAULT: Set[str] = {
    "em",
    "term",
    "q",
    "c",
    "code",
    "init",
    "abbr",
    "acro",
    "foreign",
    "alert",
}


# Emoji stripping:
# A pragmatic (not perfect) regex covering most emoji blocks + variation selectors.
# This avoids an external dependency. If you want maximum coverage, use the `regex`
# module and Unicode properties; for most PTX, this is sufficient.
_EMOJI_RE = re.compile(
    "["
    "\U0001F1E0-\U0001F1FF"  # flags
    "\U0001F300-\U0001F5FF"  # symbols & pictographs
    "\U0001F600-\U0001F64F"  # emoticons
    "\U0001F680-\U0001F6FF"  # transport & map
    "\U0001F700-\U0001F77F"  # alchemical
    "\U0001F780-\U0001F7FF"  # geometric extended
    "\U0001F800-\U0001F8FF"  # arrows supplement
    "\U0001F900-\U0001F9FF"  # supplemental symbols & pictographs
    "\U0001FA00-\U0001FA6F"  # chess etc.
    "\U0001FA70-\U0001FAFF"  # symbols & pictographs extended-A
    "\u2600-\u26FF"          # misc symbols
    "\u2700-\u27BF"          # dingbats
    "\uFE0E\uFE0F"           # variation selectors
    "\u200D"                 # zero-width joiner
    "]+",
    flags=re.UNICODE,
)

# XML namespace URI for xml:* attributes
_XML_NS = "http://www.w3.org/XML/1998/namespace"
_XML_ID_QNAME = f"{{{_XML_NS}}}id"


@dataclass
class PreprocessOptions:
    include_optional_ignored: bool = False
    replace_xref: bool = True
    unwrap_inline: bool = True
    unwrap_inline_tags: Set[str] = None  # assigned at runtime
    drop_empty_elements: bool = True

    # New options:
    strip_emojis: bool = True
    strip_label_attr: bool = True
    strip_xml_id_attr: bool = True


# --- Helpers -----------------------------------------------------------------

def local_name(tag: str) -> str:
    if tag is None:
        return ""
    return tag.split("}", 1)[1] if "}" in tag else tag


def strip_xml_comments(root: etree._Element) -> None:
    for c in root.xpath("//comment()"):
        parent = c.getparent()
        if parent is not None:
            parent.remove(c)


def remove_ignored_subtrees(root: etree._Element, ignored: Set[str]) -> int:
    removed = 0
    for el in list(root.iter()):
        if not isinstance(el.tag, str):
            continue
        if local_name(el.tag) in ignored:
            parent = el.getparent()
            if parent is not None:
                parent.remove(el)
                removed += 1
    return removed


def replace_xref(root: etree._Element, placeholder: str = "[XREF-CHECK]") -> int:
    replaced = 0
    for el in list(root.iter()):
        if not isinstance(el.tag, str):
            continue
        if local_name(el.tag) == "xref":
            parent = el.getparent()
            if parent is None:
                continue

            prev = el.getprevious()
            tail = el.tail or ""

            if prev is not None:
                prev.tail = (prev.tail or "") + placeholder + tail
            else:
                parent.text = (parent.text or "") + placeholder + tail

            parent.remove(el)
            replaced += 1
    return replaced


def unwrap_element(el: etree._Element) -> None:
    parent = el.getparent()
    if parent is None:
        return

    idx = parent.index(el)

    if el.text:
        if idx == 0:
            parent.text = (parent.text or "") + el.text
        else:
            prev = parent[idx - 1]
            prev.tail = (prev.tail or "") + el.text

    for child in list(el):
        el.remove(child)
        parent.insert(idx, child)
        idx += 1

    if el.tail:
        if idx > 0:
            prev = parent[idx - 1]
            prev.tail = (prev.tail or "") + el.tail
        else:
            parent.text = (parent.text or "") + el.tail

    parent.remove(el)


def unwrap_inline_tags(root: etree._Element, tags_to_unwrap: Set[str]) -> int:
    changed = 0
    for el in list(root.iter()):
        if not isinstance(el.tag, str):
            continue
        if local_name(el.tag) in tags_to_unwrap:
            unwrap_element(el)
            changed += 1
    return changed


def _remove_element_preserve_tail(el: etree._Element) -> None:
    """
    Remove an element from the tree while preserving its .tail text by attaching
    it to the previous sibling's tail, or to the parent's text if no previous sibling.
    """
    parent = el.getparent()
    if parent is None:
        return

    tail = el.tail or ""
    prev = el.getprevious()

    if tail:
        if prev is not None:
            prev.tail = (prev.tail or "") + tail
        else:
            parent.text = (parent.text or "") + tail

    parent.remove(el)


def drop_empty_elements(root: etree._Element) -> int:
    """
    Drop elements that have no meaningful text and no children.
    Avoid dropping math tags (<m>, <me>) even if empty (rare but safer).
    Avoid dropping pacing tags; empties there can be harmless.
    IMPORTANT: preserve .tail when removing, otherwise you delete real text
    (e.g., <e component="emoji">📌</e> tail contains the sentence).
    """
    dropped = 0
    for el in list(root.iter()):
        if not isinstance(el.tag, str):
            continue
        name = local_name(el.tag)
        if name in MATH_TAGS or name in PACING_TAGS:
            continue

        has_children = len(el) > 0
        has_text = bool(el.text and el.text.strip())

        if (not has_children) and (not has_text):
            # This element is "empty" but may carry important tail text.
            _remove_element_preserve_tail(el)
            dropped += 1

    return dropped



# --- New: attribute stripping -------------------------------------------------

def strip_attributes(root: etree._Element, *, strip_label: bool, strip_xml_id: bool) -> int:
    """
    Remove label="..." and xml:id="..." attributes throughout the tree.
    Returns number of attributes removed.
    """
    removed = 0
    for el in root.iter():
        if not isinstance(el.tag, str):
            continue

        if strip_label and "label" in el.attrib:
            del el.attrib["label"]
            removed += 1

        # In lxml, xml:id may appear as '{http://www.w3.org/XML/1998/namespace}id'
        if strip_xml_id and (_XML_ID_QNAME in el.attrib):
            del el.attrib[_XML_ID_QNAME]
            removed += 1

        # Sometimes authors write "xml:id" literally; handle defensively.
        if strip_xml_id and ("xml:id" in el.attrib):
            del el.attrib["xml:id"]
            removed += 1

    return removed


# --- New: emoji stripping -----------------------------------------------------

def strip_emojis_in_text(root: etree._Element) -> int:
    """
    Remove emojis from all .text and .tail nodes.
    Returns the number of nodes modified (not number of emojis).
    """
    if root is None:
        return 0

    changed = 0

    def clean(s: str) -> str:
        return _EMOJI_RE.sub("", s)

    for el in root.iter():
        if not isinstance(el.tag, str):
            continue

        if el.text:
            new = clean(el.text)
            if new != el.text:
                el.text = new
                changed += 1

        if el.tail:
            new = clean(el.tail)
            if new != el.tail:
                el.tail = new
                changed += 1

    return changed


def serialize_xml(root: etree._Element) -> str:
    return etree.tostring(
        root,
        encoding="unicode",
        pretty_print=True,
        xml_declaration=False,
    ).strip() + "\n"


# --- Pipeline ----------------------------------------------------------------

def preprocess_ptx(ptx_source: str, opts: PreprocessOptions) -> tuple[str, dict[str, int]]:
    if opts.unwrap_inline_tags is None:
        opts.unwrap_inline_tags = set(UNWRAP_INLINE_DEFAULT)

    parser = etree.XMLParser(recover=True, remove_blank_text=False, huge_tree=True)
    root = etree.fromstring(ptx_source.encode("utf-8"), parser=parser)

    stats: dict[str, int] = {}

    strip_xml_comments(root)

    ignored = set(IGNORED_TAGS_MIN)
    if opts.include_optional_ignored:
        ignored |= IGNORED_TAGS_OPTIONAL
    stats["ignored_removed"] = remove_ignored_subtrees(root, ignored)

    if opts.replace_xref:
        stats["xref_replaced"] = replace_xref(root)

    if opts.unwrap_inline:
        stats["inline_unwrapped"] = unwrap_inline_tags(root, opts.unwrap_inline_tags)

    # New: strip attributes (do this after structural removal, before serialization)
    stats["attrs_stripped"] = strip_attributes(
        root,
        strip_label=opts.strip_label_attr,
        strip_xml_id=opts.strip_xml_id_attr,
    )

    # New: strip emojis near the end (after unwrapping/moves)
    if opts.strip_emojis:
        stats["text_nodes_emoji_stripped"] = strip_emojis_in_text(root)

    if opts.drop_empty_elements:
        stats["empty_dropped"] = drop_empty_elements(root)

    return serialize_xml(root), stats


def iter_ptx_files_non_recursive(folder: Path) -> Iterable[Path]:
    return sorted(p for p in folder.iterdir() if p.is_file() and p.suffix.lower() == ".ptx")


# --- CLI ---------------------------------------------------------------------

def main() -> int:
    ap = argparse.ArgumentParser(
        description="Preprocess *.ptx files (non-recursively) into TTS-friendly PTX/XML text files."
    )
    ap.add_argument("source_folder", type=Path, help="Folder containing *.ptx files (non-recursive).")
    ap.add_argument("target_folder", type=Path, help="Folder to write preprocessed outputs (as .txt).")

    ap.add_argument("--include-optional-ignored", action="store_true",
                    help="Also remove optional ignored tags like <checkpoint>, <solution>, <hint>.")

    ap.add_argument("--keep-xref", action="store_true",
                    help="Keep <xref/> tags instead of replacing with placeholder [XREF-CHECK].")

    ap.add_argument("--no-unwrap-inline", action="store_true",
                    help="Do not unwrap inline tags; keep them as tags.")

    ap.add_argument("--no-drop-empty", action="store_true",
                    help="Do not drop empty non-pacing elements.")

    # New flags
    ap.add_argument("--no-strip-emojis", action="store_true",
                    help="Do not remove emojis from text nodes.")
    ap.add_argument("--keep-label-attr", action="store_true",
                    help="Keep label=\"...\" attributes (default strips them).")
    ap.add_argument("--keep-xml-id-attr", action="store_true",
                    help="Keep xml:id attributes (default strips them).")

    args = ap.parse_args()

    src = args.source_folder
    dst = args.target_folder

    if not src.exists() or not src.is_dir():
        raise SystemExit(f"Source folder does not exist or is not a directory: {src}")

    dst.mkdir(parents=True, exist_ok=True)

    opts = PreprocessOptions(
        include_optional_ignored=args.include_optional_ignored,
        replace_xref=not args.keep_xref,
        unwrap_inline=not args.no_unwrap_inline,
        drop_empty_elements=not args.no_drop_empty,
        strip_emojis=not args.no_strip_emojis,
        strip_label_attr=not args.keep_label_attr,
        strip_xml_id_attr=not args.keep_xml_id_attr,
    )

    files = list(iter_ptx_files_non_recursive(src))
    if not files:
        print(f"No .ptx files found in {src}")
        return 0

    for ptx_path in files:
        raw = ptx_path.read_text(encoding="utf-8", errors="replace")
        processed, stats = preprocess_ptx(raw, opts)

        out_path = dst / f"{ptx_path.stem}-preprocessed.txt"
        out_path.write_text(processed, encoding="utf-8")

        stat_str = ", ".join(f"{k}={v}" for k, v in stats.items())
        print(f"Wrote {out_path.name} ({stat_str})")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
