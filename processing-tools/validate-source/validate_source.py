#!/usr/bin/env python3
"""Fast validation gate for the PreTeXt source.

Three checks, all static and dependency-free (Python stdlib only):

1. Well-formedness — every ``source/**/*.ptx`` file must parse as XML.
2. Unique ids — no ``xml:id`` or ``label`` value may be defined twice
   within the ``main.ptx`` build set (PreTeXt treats the two attributes
   as one id namespace). Ids inside XML comments are ignored, as the
   builder ignores them.
3. Placeholder lint — draft markers must not increase. Counts of known
   markers (``provisional`` xrefs, ``NEEDS-A-LABEL``, "Need to Add", …)
   are compared per file against ``placeholder-baseline.json``. New
   markers fail the check; removing markers prints a reminder to shrink
   the baseline so the ratchet only ever tightens.

Scope: checks 2 and 3 run on the files reachable from ``source/main.ptx``
via ``xi:include`` (the shipping build set), so the stranded dev/parts
variants cannot cause false duplicates. Check 1 runs on every ``.ptx``
file under ``source/``.

Usage:
    python3 processing-tools/validate-source/validate_source.py

Exits nonzero on any failure. Designed for the per-PR validate workflow
(a fast stand-in while the full PreTeXt build is paused), and equally
runnable locally before a commit.
"""

import json
import re
import sys
import xml.etree.ElementTree as ET
from collections import defaultdict
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
SOURCE = REPO / "source"
MAIN = SOURCE / "main.ptx"
BASELINE_FILE = Path(__file__).resolve().parent / "placeholder-baseline.json"

XI_INCLUDE = re.compile(r"<xi:include\s+[^>]*href=\"([^\"]+)\"([^>]*)>")
XML_DECL = re.compile(r"^\s*<\?xml[^?]*\?>")
XML_ID = "{http://www.w3.org/XML/1998/namespace}id"

PLACEHOLDER_TOKENS = [
    "provisional=",
    "NEEDS-A-LABEL",
    "Need to Add",
    "-COMMENTED-",
    "WORK-IN-PROGRESS",
    "FUTURE-WORK",
    "PIECEWISE AND UNIT STEP STUFF",
    "WebWorK Here For Mathquill",
]


def parse_ptx(path: Path):
    """Parse a .ptx file, tolerating an undeclared xi: prefix.

    Individual section files may use <xi:include> without declaring the
    namespace (the declaration lives on the including document), so wrap
    the content in a root that declares it before parsing.
    """
    text = path.read_text(encoding="utf-8")
    body = XML_DECL.sub("", text, count=1)
    wrapped = (
        '<ptx-validate-wrapper xmlns:xi="http://www.w3.org/2001/XInclude">'
        + body
        + "</ptx-validate-wrapper>"
    )
    return ET.fromstring(wrapped)


def build_set(main: Path):
    """Files reachable from main.ptx via xi:include (XML includes only).

    Returns (files, missing): missing holds include targets that do not
    exist on disk, which the caller must treat as failures.
    """
    seen = []
    missing = []
    queue = [main]
    visited = set()
    while queue:
        f = queue.pop()
        if f in visited:
            continue
        visited.add(f)
        if not f.exists():
            missing.append(f)
            continue
        seen.append(f)
        if f.suffix != ".ptx":
            continue
        text = f.read_text(encoding="utf-8")
        # strip XML comments so commented-out includes are not followed
        text = re.sub(r"<!--.*?-->", "", text, flags=re.S)
        for href, rest in XI_INCLUDE.findall(text):
            if 'parse="text"' in rest:
                continue
            queue.append((f.parent / href).resolve())
    return seen, missing


def main() -> int:
    failures = []

    # 1. well-formedness, all .ptx under source/
    all_ptx = sorted(SOURCE.rglob("*.ptx"))
    trees = {}
    for f in all_ptx:
        try:
            trees[f] = parse_ptx(f)
        except (ET.ParseError, UnicodeDecodeError, ValueError) as exc:
            failures.append(f"not well-formed: {f.relative_to(REPO)}: {exc}")
    print(f"well-formedness: {len(all_ptx) - sum(1 for m in failures)}"
          f"/{len(all_ptx)} files parse")

    reachable, missing = build_set(MAIN)
    included = [f for f in reachable if f.suffix == ".ptx"]
    for f in missing:
        failures.append(f"missing xi:include target: {f.relative_to(REPO)}")
    print(f"build set: {len(included)} files reachable from main.ptx, "
          f"{len(missing)} missing include target(s)")

    # 2. duplicate xml:id / label within the build set
    where = defaultdict(list)
    for f in included:
        tree = trees.get(f)
        if tree is None:
            continue
        for el in tree.iter():
            # xml:id and label on the same element with the same value is
            # one definition, not a collision (label mirrors xml:id)
            vals = {el.get(attr) for attr in (XML_ID, "label")} - {None}
            for val in vals:
                where[val].append(f)
    dups = {k: v for k, v in where.items() if len(v) > 1}
    for ident, files in sorted(dups.items()):
        locs = ", ".join(sorted({str(f.relative_to(REPO)) for f in files}))
        failures.append(f"duplicate id '{ident}' defined {len(files)}x in: {locs}")
    print(f"unique ids: {len(where) - len(dups)} unique, {len(dups)} duplicated")

    # 3. placeholder ratchet
    baseline = {}
    if BASELINE_FILE.exists():
        try:
            baseline = json.loads(BASELINE_FILE.read_text())
        except json.JSONDecodeError as exc:
            failures.append(f"malformed baseline {BASELINE_FILE.name}: {exc}")
            baseline = {}
    current = {}
    for f in included:
        text = f.read_text(encoding="utf-8")
        count = sum(text.count(tok) for tok in PLACEHOLDER_TOKENS)
        if count:
            current[str(f.relative_to(REPO))] = count
    for path, count in sorted(current.items()):
        allowed = baseline.get(path, 0)
        if count > allowed:
            failures.append(
                f"placeholder markers increased in {path}: {count} > baseline {allowed}"
            )
    shrunk = {p: c for p, c in baseline.items() if current.get(p, 0) < c}
    if shrunk:
        print("note: placeholder counts dropped below baseline in "
              f"{len(shrunk)} file(s) - tighten placeholder-baseline.json:")
        for p in sorted(shrunk):
            print(f"  {p}: baseline {baseline[p]} -> now {current.get(p, 0)}")
    print(f"placeholders: {sum(current.values())} markers in {len(current)} files "
          f"(baseline total {sum(baseline.values())})")

    print()
    if failures:
        for msg in failures:
            print(f"FAIL {msg}")
        print(f"\n{len(failures)} failure(s)")
        return 1
    print("all checks passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
