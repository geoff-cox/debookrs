#!/usr/bin/env python3
"""Accessibility lint: every image and interactive must carry a description.

Walks the build set reachable from ``source/main.ptx`` and flags any
``<image>`` or ``<interactive>`` that lacks alt text. An element counts as
described when it has a child ``<shortdescription>`` or ``<description>``, or
is explicitly marked ``decorative="yes"`` (images only). This keeps the book's
figures accessible (WCAG/508) and prevents regressions once coverage is met.

Usage
-----
    python3 processing-tools/check-descriptions/check_descriptions.py
    python3 processing-tools/check-descriptions/check_descriptions.py --list   # print every offender

Exit status is non-zero when any reachable image/interactive is undescribed.
"""

import argparse
import sys
from pathlib import Path

from lxml import etree

REPO_ROOT = Path(__file__).resolve().parents[2]
MAIN = REPO_ROOT / "source" / "main.ptx"
XI = "{http://www.w3.org/2001/XInclude}include"
DESC_TAGS = {"shortdescription", "description"}


def reachable_files(start):
    """Return the ordered set of .ptx files reachable via xi:include from start."""
    seen, order, stack = set(), [], [start.resolve()]
    while stack:
        f = stack.pop()
        if f in seen or not f.exists():
            continue
        seen.add(f)
        order.append(f)
        try:
            tree = etree.parse(str(f))
        except etree.XMLSyntaxError:
            continue
        for inc in tree.iter(XI):
            href = inc.get("href")
            if href:
                stack.append((f.parent / href).resolve())
    return order


def has_description(el):
    return any(child.tag in DESC_TAGS for child in el)


def check_file(path):
    """Yield (lineno, kind, detail) for each undescribed image/interactive."""
    try:
        tree = etree.parse(str(path))
    except etree.XMLSyntaxError:
        return
    for el in tree.iter("image"):
        if el.get("decorative") == "yes" or has_description(el):
            continue
        src = el.get("source") or "(latex-image)"
        yield el.sourceline, "image", src
    for el in tree.iter("interactive"):
        if has_description(el):
            continue
        yield el.sourceline, "interactive", el.get("xml:id") or el.get("source") or ""


def main():
    ap = argparse.ArgumentParser(description="Lint images/interactives for alt text.")
    ap.add_argument("--list", action="store_true", help="print every offender (file:line)")
    args = ap.parse_args()

    files = reachable_files(MAIN)
    n_img = n_int = off_img = off_int = 0
    offenders = []
    for f in files:
        try:
            tree = etree.parse(str(f))
        except etree.XMLSyntaxError:
            continue
        n_img += sum(1 for _ in tree.iter("image"))
        n_int += sum(1 for _ in tree.iter("interactive"))
        for lineno, kind, detail in check_file(f):
            offenders.append((f.relative_to(REPO_ROOT), lineno, kind, detail))
            if kind == "image":
                off_img += 1
            else:
                off_int += 1

    print(f"build set: {len(files)} files reachable from source/main.ptx")
    print(f"images:       {n_img - off_img}/{n_img} described")
    print(f"interactives: {n_int - off_int}/{n_int} described")

    if offenders:
        if args.list:
            print("\nundescribed:")
            for rel, line, kind, detail in offenders:
                print(f"  {rel}:{line}  {kind}  {detail}")
        print(f"\nFAIL: {len(offenders)} image/interactive element(s) lack a description.")
        print("Add a <shortdescription> (and optionally <description>), or decorative=\"yes\" for purely decorative images.")
        return 1

    print("\nall images and interactives are described.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
