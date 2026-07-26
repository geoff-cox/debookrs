# processing-tools

Helper scripts for the *Exploring Differential Equations* PreTeXt source. Nothing
here is part of the book itself — these tools check the source, transform it, or
support workflows around it.

Three of them run automatically on every pull request. The rest are run by hand,
when you need them.

## Quick reference

| Tool | What it does | Run it with | Needs |
|---|---|---|---|
| [`validate-source/`](#validate-source) | Fast source gate: XML well-formedness, duplicate ids, placeholder ratchet | `python3 processing-tools/validate-source/validate_source.py` | — |
| [`verify-worked-math/`](#verify-worked-math) | Re-derives every printed answer with SymPy | `python3 processing-tools/verify-worked-math/verify_worked_math.py` | `sympy` |
| [`check-descriptions/`](#check-descriptions) | Accessibility: every image and interactive must be described | `python3 processing-tools/check-descriptions/check_descriptions.py` | `lxml` |
| [`audit-status/`](#audit-status) | Reports which audit tasks are done, and refreshes the report's status table | `python3 processing-tools/audit-status/audit_status.py` | — |
| [`tts/`](#tts) | Strips PreTeXt down to narration-ready text, plus the audit/render prompt pack | `python3 processing-tools/tts/preprocess_ptx_for_tts.py SRC DST` | `lxml` |
| [`post-process-html/`](#post-process-html) | Applies find/replace rules to built HTML | `python3 processing-tools/post-process-html/postprocess_html.py replacements.json DIR` | — |
| [`book-db-sync/`](#book-db-sync) | Two-way sync between section files and a SQLite database | `python3 processing-tools/book-db-sync/book_db_sync.py {init,pull,push,sync}` | — |
| [`merge-sections-to-single-ptx.py`](#merge-sections-to-single-ptx) | Flattens `xi:include`s into one file | `python3 processing-tools/merge-sections-to-single-ptx.py` (interactive) | — |
| [`latex2pretext-tools/`](#latex2pretext-tools) | The LaTeX → PreTeXt conversion toolchain | notebooks, run by hand | Jupyter, `tkinter` |

"Needs" lists third-party packages only; everything else is Python standard
library. Install the two that matter with `pip install sympy lxml`.

---

## The CI gates

These three run on every pull request via
[`.github/workflows/validate.yml`](../.github/workflows/validate.yml). They take
seconds, need no PreTeXt build, and each exits nonzero on failure. Run them
locally before pushing and CI will rarely surprise you.

### validate-source

`validate-source/validate_source.py` — three static checks over the source tree:

1. **Well-formedness** — every `source/**/*.ptx` must parse as XML.
2. **Unique ids** — no `xml:id` or `label` value may be defined twice within the
   `main.ptx` build set. PreTeXt treats the two attributes as one namespace, so
   reusing a string across them is a duplicate. Ids inside XML comments are
   ignored, as the builder ignores them too.
3. **Placeholder ratchet** — counts of draft markers (`provisional` xrefs,
   `NEEDS-A-LABEL`, `Need to Add`, `FUTURE-WORK`, …) are compared per file
   against `placeholder-baseline.json`. New markers fail. Removing markers only
   prints a reminder to tighten the baseline, so the ratchet can never loosen.

Checks 2 and 3 run on the files reachable from `source/main.ptx`, so the stranded
dev and parts variants cannot cause false duplicates. Check 1 runs on every
`.ptx` file.

Takes no arguments. Standard library only.

### verify-worked-math

`verify-worked-math/verify_worked_math.py` — re-derives printed mathematics with
SymPy and compares against what the book actually says. Each check names the
source file it guards, so a failure points at the exact spot where the book
disagrees with the mathematics.

The registry is curated by hand and currently holds over 140 checks covering worked
examples, answer keys, interactive widgets' "correct" options, Laplace
transforms, Euler and Heun steps, equilibria, Jacobians, and eigenvalues. It was
seeded from the July 2026 audit's errata table so that fixed errors stay fixed.

Adding a check: append a `Check` to `REGISTRY`. Prefer verifying the *printed*
final answer — the thing a student reads — rather than an intermediate step.

Takes no arguments. Needs `sympy`. See
[`verify-worked-math/README.md`](verify-worked-math/README.md) for details.

### check-descriptions

`check-descriptions/check_descriptions.py` — every `<image>` and `<interactive>`
in the build set must carry a `<shortdescription>` or `<description>`, or be
marked `decorative="yes"`. This is the accessibility (WCAG/508) gate; the book
went from zero coverage to complete, and this keeps it there.

Pass `--list` to print the described elements rather than just the summary.
Needs `lxml`.

---

## Author tools

Not wired into CI. Run these when the task calls for them.

### audit-status

`audit-status/audit_status.py` — reports the completion status of every task in
`reports/2026-07-textbook-audit.md` by cross-referencing git history. A task
counts as done when a commit merged into the target branch tags that task's id
in its subject line, in either shape seen in this repo's history:

```
H2: Rebuild partial-fractions appendix ... (#189)     # id at the start
Fix confirmed mathematical errata ... (H1) (#187)     # id in parentheses
```

Running it with no arguments prints the table *and* rewrites the `AUDIT-STATUS`
block near the top of the report, so the report always shows current status. It
is idempotent.

```sh
python3 processing-tools/audit-status/audit_status.py           # print + refresh the report
python3 processing-tools/audit-status/audit_status.py --print   # print only, don't touch the report
python3 processing-tools/audit-status/audit_status.py --ref main
```

A short `UNTAGGED_COMPLETIONS` map covers the handful of tasks whose merge commit
omitted the task id. Entries there are verified, not asserted — a task is only
credited when the named pull request actually appears in the ref being matched
against. Keep it small: new work should tag its id in the subject.

### tts

`tts/preprocess_ptx_for_tts.py` — turns `.ptx` files into narration-ready text.
It drops tags that make no sense read aloud (exercises, figures, tables, images),
strips `label` / `xml:id` attributes and emoji, and keeps the pacing structure
(`<p>`, `<aside>`, sectioning) along with `<m>` / `<md>` math.

```sh
python3 processing-tools/tts/preprocess_ptx_for_tts.py SRC_FOLDER DST_FOLDER
```

Processes a folder non-recursively. Several flags adjust what survives
(`--keep-xref`, `--no-strip-emojis`, `--keep-label-attr`, and others — see
`--help`). Needs `lxml`.

The rest of `tts/` is not code. The `UPL_*` and `PST_*` markdown files are a
prompt pack: a documented, repeatable process for auditing PreTeXt source and
rendering narration scripts, built around one authoritative ruleset plus
per-mode deltas. [`tts/README.md`](tts/README.md) is the guide to that workflow
and is the place to start.

Generated narration output is deliberately not committed — `.gitignore` covers
`processing-tools/tts/processed-ptx-to-txt/*.txt`.

### post-process-html

`post-process-html/postprocess_html.py` — applies a JSON list of find/replace
rules to every HTML file in a directory, for fixes easier to make after the
PreTeXt build than inside the source.

```sh
python3 processing-tools/post-process-html/postprocess_html.py \
    processing-tools/replacements.json path/to/html-output
```

Rules live in [`replacements.json`](replacements.json) at the folder root. Each
is `{"find": ..., "replace": ..., "regex": true|false}`; regex patterns are
compiled up front so a bad pattern fails before any file is touched. The two
current rules strip a redundant "Checkpoint N." span and tidy the 🎧 Listen
aside title.

`post-process-html/post-pretext-html-script.ipynb` is a notebook doing the same
job interactively.

### book-db-sync

`book-db-sync/book_db_sync.py` — mirrors the book's section files into a SQLite
database and back, for authors who would rather edit in a database than in a
tree of XML files.

```sh
python3 processing-tools/book-db-sync/book_db_sync.py init
python3 processing-tools/book-db-sync/book_db_sync.py pull    # source -> db
python3 processing-tools/book-db-sync/book_db_sync.py push    # db -> source
python3 processing-tools/book-db-sync/book_db_sync.py sync    # both, with conflict detection
```

`main.ptx` is treated as the canonical table of contents. Each side stores a
SHA-256 fingerprint, so `sync` can tell a one-sided edit from a genuine
conflict; resolve those explicitly with `--prefer source` or `--prefer db`.
Other flags: `--db`, `--source-root`, `--main`.

Standard library only. `.db` files are gitignored, so the database never lands in
the repository. See [`book-db-sync/README.md`](book-db-sync/README.md) for the
schema.

### merge-sections-to-single-ptx

`merge-sections-to-single-ptx.py` — the inverse of the book's modular layout.
It resolves `xi:include` tags recursively and writes one flat `.ptx` file, which
is useful when a tool wants the whole book as a single document. A missing
include becomes an XML comment rather than a hard failure, so the output still
parses.

Run it with no arguments; it scans for candidate main files and prompts for the
one to flatten and the output name:

```sh
python3 processing-tools/merge-sections-to-single-ptx.py
```

> **Note.** This is the one script here that is interactive rather than
> `argparse`-driven, which puts it at odds with the convention in
> [`.github/instructions/processing-tools.instructions.md`](../.github/instructions/processing-tools.instructions.md).
> It cannot be scripted or run in CI as written. Worth converting to flags if it
> ever needs to be automated.

### latex2pretext-tools

The toolchain used to convert this book's earlier LaTeX source into PreTeXt.

- `latex_to_pretext_parsing_tools.py` — a library of ~30 parsing helpers
  (sections, examples, lists, tables, display math, `verbatim`, indentation and
  `<p>`-tag repair). It has no `__main__`; the notebooks import it.
- `latex_to_pretext_parser.ipynb` — the main conversion run.
- `Create-Specific-Sections.ipynb` — converts selected sections rather than a
  whole book.
- `Debugging_Script.ipynb` — a scratch notebook for inspecting conversion output.

The notebooks use `tkinter` file dialogs to pick input, so they need a desktop
session. This is migration tooling rather than part of the routine authoring
workflow: the book is already PreTeXt, and these are kept for reference and for
any future LaTeX material.

---

## Conventions

When adding or editing a tool, follow
[`.github/instructions/processing-tools.instructions.md`](../.github/instructions/processing-tools.instructions.md).
In short: prefer small testable changes; use `argparse`, `pathlib`, and explicit
UTF-8; validate inputs before writing anything; print a summary of what changed;
fail safely on duplicate output paths, missing files, and invalid XML; preserve
source formatting in PreTeXt transformations; and include a verification command
when behavior changes.

Two habits are worth keeping specifically for the checkers:

- **Fail loudly rather than plausibly.** A validation tool that silently returns
  a wrong number is worse than one that crashes, because the wrong number looks
  like a pass. Raise on impossible input and let the caller report it.
- **Name what a check actually guards.** A check's label should describe the
  claim it verifies, so a failure sends the reader to the right place instead of
  hunting for something the book never printed.
