# PreTeXt Schema Validation Sweep — Build Checklist

**Repo:** `debookrs` (*Exploring Differential Equations*)
**Source log:** `logs/main-validation.txt` (PreTeXt 2.48.1, `pretext-dev.rng`) — note `logs/` is gitignored, so regenerate it locally; it is never committed
**Scope at baseline:** 3,142 messages / 1,012 distinct edit sites across 124 source files (schema + validation-plus)
**Current:** **465 schema messages**, measured on this branch at `faa192c`, down from **527** at `2c89a89`, from **923** at the merge of #225 and **1,044** at the merge of #224, and from **1,685** at the peak of the R8 conversion — see the R8 section for why the number had to rise first. **Always state which commit a book-wide number was measured on** — `main` moves during a sweep, and comparing against a stale baseline reads as a regression that never happened. This figure and the one in the Progress section are the same number; if they ever disagree, the Progress section is the one regenerated per sweep.

⚠️ **527, not 540, is the number `2c89a89` reads — and no fix caused the drop.** The 540 in this document's previous revision was measured at `8b155e1`, a commit that no longer exists (PR #226 was squash-merged as `838a2a0`). Rebuilding the harness from scratch and measuring at `838a2a0` *and* at `2c89a89` gives **527 at both**, so `2c89a89` ("formatted main") changed nothing the schema can see, and the 13-message gap is harness drift, not content. Rebuild instructions are in the Rebuilding the harness section below; the drift is the same hazard the box above describes, one level down. **Re-measure a baseline with your own harness before quoting a delta.**

⚠️ **Say which engine produced a number.** These figures are the *schema* half only, from `salve` against `pretext-dev.rng` over an assembly built by resolving `<xi:include>` textually — not from `pretext validate`, which was not installable here (`pdfcropmargins` fails to build). That harness reads 945 where `pretext validate --engine salve` read 917 at the same commit, a ~3% gap from assembly details, and it reports no validation-plus advisories at all. **Comparisons within one harness are sound; comparisons across harnesses are not.** Re-baseline with `pretext validate --dev --engine salve` before quoting a book-wide number in a report.
**Companion data:** `validation-inventory.csv` — per-file × per-rule counts, sorted by `edit_sites`. Baseline figures; the Progress and Queue tables below are current.

---

## Read this first: this checklist was written against a stale, truncated log

Two things were wrong with the run that produced the original numbers. Both are now fixed.

**Which counts in this document are current:** Phase 0, the "Where to actually start" table, the Work order summary, and the Top 10 files table are all regenerated from the complete run. The counts embedded in the **Phase 1–8 body sections** were left alone and are historical — treat their headline figures (e.g. "769 violations · 53% of everything") as stale, but their rules, examples, and edit patterns as current.

**1. The log was truncated, but not for the reason stated.** `jing` does abort partway through the assembled source:

```
fatal: ... MalformedByteSequenceException ... Invalid byte 2 of 4-byte UTF-8 sequence.
    file: c7-em/exercises-em.ptx     line: 24884
    text: <title>Alternative Derivation Approach</title>
```

The abort is real and reproducible. **The stated cause is not.** There is no malformed byte:

- All 141 `.ptx` files are valid UTF-8 with no BOM, and so is every other text file in the repo. Same at every recent commit.
- The *assembled* `logs/main-assembled.xml` also decodes as clean UTF-8 end to end.
- Line 24884 is **pure ASCII** — not one byte above `0x7F`. The nearest 4-byte character is 1,575 bytes away. There is no mangled emoji to retype.
- `jing -e UTF-8` fails identically, and no astral character straddles an 8 KiB read-buffer boundary.

This is a `jing`/Xerces reader fault, not a content defect. **Do not go hunting for corrupted characters — you will not find any, and you risk editing correct content.** Use the other engine instead:

```bash
pretext validate --dev --engine salve      # no Java needed; reaches the back matter
```

`salve` completes the whole book: **2,906 schema messages** vs the 1,214 `jing` managed before dying at chapter 8.

**2. The work order targets work that is already done.** The original log predates commits `817a537` / `44e1303` ("validation-fixing-pass-1", 120 files, +6,447/−3,910), but this checklist was committed after them. Every file at the top of the old queue has since been fixed:

| File | This checklist said | Actually remaining |
|---|---:|---:|
| `c4-sov/exercises-sov.ptx` | 208 | **6** |
| `c5-if/exercises-if.ptx` | 161 | **4** |
| `c1-classification/exercises-class.ptx` | 99 | **6** |
| `c5-if/review-first-order-methods.ptx` | 94 | **5** |
| `c2-solns/exercises-solns.ptx` | 88 | **4** |
| `c6-qm/exercises-qm.ptx` | 67 | **3** |

Step 1.1 ("start with `c5-if/exercises-if.ptx` (153)") now sends you to a file with four errors left.

**Where the work actually is.** 77% of schema errors sit in chapters the truncated log never reached — the Laplace chapters and the appendices, neither of which appears in the work order below:

| Area | Schema messages | In the old log? |
|---|---:|---|
| `aa-bookends` (appendices) | 874 | no |
| `c10-lt` | 415 | no |
| `c9-uc` | 256 | no |
| `c11-ltm` | 241 | no |
| `c12-ltp` | 194 | no |
| chapters 1–8 combined | 674 | yes |

**Count messages, not edits.** 2,906 schema messages collapse to **904 distinct containers** (~3.2 messages per real edit) — one bad `<solution>` placement re-reports at every following sibling position. Rank by the `edit_sites` column in the CSV, not `total`: `aa-bookends/a1-algebra/CSQ-completing-sq.ptx` throws 188 messages from a 169-line file and is nowhere near the top by actual work.

Two edit-site figures appear in this document and they are not in conflict: **904** counts containers touched by the *schema* half only, while the **1,012** in the header is the CSV's `edit_sites` column summed, which also counts the 108 containers whose only messages come from `validation-plus` (ragged tabulars, long shortdescriptions, unicode, sidebyside advisories).

**What survives from this document:** the rule taxonomy, the guardrails, the canonical shapes, and the per-phase edit patterns are all still correct and still the right way to do the edits — `R1-p-wrapper` remains ~71% of the schema half. Only the counts, the file ordering, and Phase 0 were wrong.

---

## Rebuilding the harness

**The harness is not in the repo and `logs/` is gitignored, so every sweep rebuilds it — and the rebuild is where the numbers drift.** `pretext validate` is still not installable here: `pip install pretext==2.48.1` fails on `pdfcropmargins`, which cannot build its wheel (`AttributeError: install_layout` from a setuptools/distutils mismatch). That has been re-confirmed, not assumed. `salve` over a textual assembly remains the only engine, so keep quoting the engine *and* the commit.

Four steps, no PreTeXt install required:

1. **Get the schema.** The stable `pretextbook` wheel ships only `pretext.rng`; the dev schema this book needs (Runestone `<evaluation>`, `<cardsort>`, `<fillin>`, …) is in the `pretext` distribution instead:
   ```bash
   pip download pretext==2.48.1 --no-deps -d ptx    # 17 MB wheel, no deps built
   # then unzip pretext/resources/core.zip out of it; the schema is at
   #   pretext-<sha>/schema/pretext-dev.rng
   ```
   `pretext-dev.rng` `<include>`s `pretext.rng` and overrides ~77 patterns with `combine="choice"`. **A dev `define` therefore *adds a branch to* the base definition, it does not replace it.** A lookup that lets dev shadow base will tell you `Exercise` has no `<statement>` branch, which is how a reader concludes `<answer>` is illegal in a `<task>`. Read both files and union them.
2. **Get the validator.** The CLI ships a jing-compatible salve shim; lift it out of the same wheel and install it standalone:
   ```bash
   cp pretext/resources/salve/{ptx-jing-shim.mjs,package.json} salve/ && (cd salve && npm install)
   node salve/ptx-jing-shim.mjs <schema.rng> <assembled.xml>   # stdout: path:line:col: error: msg
   ```
3. **Assemble.** Resolve `<xi:include href="…"/>` textually from `source/main.ptx`, dropping every XML declaration but the first, and **keep a line map** from assembled line → (source file, source line) or per-file counts are impossible. Confirm `grep -c '<!-- *<xi:include' source/main.ptx` is 0 first — a commented-out include is not built and not validated.
4. **Re-baseline before quoting a delta.** Measure the commit you started from with *your* harness, not the number written down here.

⚠️ **Expect your absolute number to differ from the one in this document, and do not read the difference as a fix or a regression.** The rebuild above reads **527** at `838a2a0` and **527** at `2c89a89`, where the previous revision recorded **540** at `8b155e1` — a commit that no longer exists, since #226 was squash-merged. The tree is identical in every way the schema can see; the gap is assembly detail. This is the same hazard as the cross-engine warning in the header (that harness read 945 where `pretext validate --engine salve` read 917), one level further down: **comparisons within one harness run are sound; comparisons across rebuilds are not.**

---

## Guardrails for every phase

Carry these into each phase; they come from `.github/copilot-instructions.md` and `.github/instructions/pretext-source.instructions.md`.

- **Never** change `xml:id`, `label`, `ref`, or `component` values. `label` and `xml:id` share one namespace checked by `processing-tools/validate-source/validate_source.py`.
- **No wholesale reformatting.** Local, reviewable edits that preserve surrounding indentation. A diff that touches 400 lines to fix 3 violations is a failed edit.
- **Nested content is indented one level deeper than its parent.** This is the author's stated preference and it governs every element the sweep adds, removes, or moves — a new `<p>` wrapper indents its contents one deeper, and unwrapping one pulls them one shallower. Where an edit lands next to pre-existing markup that breaks the rule (prose sitting level with its `<p>`, `<mrow>` level with its `<md>`), bring the surrounding block into line so the element being edited is not left internally inconsistent. That is the one sanctioned exception to "no wholesale reformatting", and it stays scoped to the block being touched.
- **Never assume the indent character.** 44 of the 45 files in the `<statement>` pass are tab-indented and one, `c0-whats-a-de/sec-terms-coeffs.ptx`, uses spaces. A transform that hardcodes `\t` puts inserted elements at column 0 there and prepends stray tabs to space-indented content. **Derive the unit from the file** (count `^\t+\S` against `^ +\S` lines, and take the step from the distinct space widths), take each block's lead indent verbatim from its own first content line, and fall back to the enclosing tag's indent when the content starts on the open-tag line. Assert before writing: no `^<p>$` at column 0, and no `^\t+ +\S` line that was not already there. Both remaining edge cases in that pass were caught by those two assertions rather than by review.
- **Watch the line endings.** **18 of the 139 files in `source/` use CRLF**, the other 121 use LF. A script that reads and writes in Python's default text mode silently converts CRLF to LF and rewrites *every line in the file* — `CSQ-completing-sq.ptx` produced a 169-line diff for a 12-line change that way, failing the guardrail above. Read and write with `newline=''`, and **check `git diff --stat` after every scripted edit**: if the changed-line count is near the file's total line count, you converted the endings rather than fixing the errors. Find the CRLF files with:
      ```bash
      for f in $(git ls-files 'source/**/*.ptx'); do git show HEAD:"$f" | head -5 | grep -q $'\r' && echo "$f"; done
      ```
- **Do not "fix" the renamed elements.** `<corollary>` = 🎮 Interactive, `<theorem>` = 🧠 Derivation, `<lemma>` = 👀 Quick Review, `<identity>` = 🗺️ Summary, `<exploration>` = ✍🏻 Method, `<assemblage>` = ✳️ callout. These are deliberate (`book-info.ptx`).
- **Preserve emoji cues in titles** (🤔💭, 📖❓, ↩️☝, 👀, 🎧). They are 4-byte UTF-8 — handle with care given Phase 0.
- **Never invent content.** If a `<statement>` is empty or a `<feedback>` has no text, flag it in the report; do not write pedagogy to satisfy a schema.
- **`<feedback>` with bare inline text is valid — do not sweep it.** The schema is an explicit `<choice>`: `<oneOrMore><ref name="BlockSolution"/></oneOrMore>` **or** `<ref name="TextLong"/>`. So `<feedback>Correct!</feedback>` is as legal as `<feedback><p>Correct!</p></feedback>`, and wrapping one changes no validation count. **471 such elements across 36 files** currently use the inline form. Adding `<p>` to them is a house-style choice the author can make deliberately; it is not sweep work, and a tool that reports it as a schema error is wrong. Verify against `/root/.ptx/<version>/core/schema/pretext-dev.rng` before treating any "X requires block content" claim as real — several elements take either form.
- **Math conventions hold:** `\amp =` not `&=`, one `<mrow>` per line, `bmatrix` not `pmatrix`.
- **Commit per phase per chapter**, not per file and not one giant commit. Message format: `fix(validate): R1 p-wrappers in c4-sov`.

---

## Counts move in both directions — always re-validate

**A file's error list is not a to-do list. It is a snapshot of where the parser gave up.** Fixing one error routinely *reveals* others that were never reported, because a failing element makes its parent's content model fail before the siblings are ever checked. Both files below got worse before they got better:

| File | What was masked | How it surfaced |
|---|---|---|
| `c9-uc/sec-selecting-the-particular-soln.ptx` | **24** `<feedback>` elements needing `<p>` | A failing sibling `<statement>` collapsed the whole `<choice>` model, so `<feedback>` was never reached. None of the 24 were in the baseline log. |
| `c10-lt/sec-lt-properties.ptx` | 1 `<proof>` `<statement>` in a non-standard shape | Hidden behind the enclosing `<p>` error until that was fixed. |
| `c10-lt/exercises-lt.ptx` | **25** inline `<statement>`s needing `<p>` | The validator reported 20. The other 25 sit inside `<exercises label="lt-drills">` and `<exercises label="lt-problems">`, both rejected outright by the R8 error below, so the parser never descended into them. All 45 were wrapped in one pass; the 25 would otherwise surface as a regression the day R8 is resolved. **2 of the 25 were themselves nearly missed** — a single-line match pattern skipped two `<statement>`s whose open tag and content sat on different lines. Re-running the validator could not have caught it, because masked errors are invisible by definition. Enumerate the *source* for every instance of a rule; do not trust the message list as the work list. |

Practical consequences:

- **Fix every instance of a rule in a container, not just the flagged ones.** In `c9-uc`, wrapping the 33 flagged `<statement>`s while ignoring the 24 unflagged `<feedback>`s would have "fixed" 103 errors and introduced 24 new ones. Both went in one pass, so the count only fell.
- **Never report a file's result from the baseline log.** Re-run the validator and count again. The expected drop is *not* the file's message count.
- **A rising count after an edit is not automatically a mistake** — it is often the reverse cascade. Read the new messages before reverting.

---

## Phase 0 — Unblock the validator ✅ DONE

Superseded — see "Read this first" above. The blocker was never an encoding fault; it was `jing`. Recorded here so nobody re-opens the emoji hunt.

- [x] **0.1** Whole-tree UTF-8 scan — **all 141 `.ptx` files clean, no BOM**, and clean at every recent commit. Nothing to repair.
- [x] **0.2** No mangled emoji exists. Line 24884 is pure ASCII; nearest 4-byte character is 1,575 bytes away.
- [x] **0.3** ~~Repair by retyping~~ — nothing to retype. `jing -e UTF-8` fails identically; no astral char straddles a read-buffer boundary. It is a `jing`/Xerces reader fault.
- [x] **0.4** `logs/main-assembled.xml` also decodes as clean UTF-8 end to end, so assembly is not corrupting anything either.
- [x] **0.5** **Switch engines** — this is the actual fix:
      ```bash
      pretext validate --dev --engine salve      # needs no Java; installs via npm on first use
      ```
      Reaches the back matter. 2,906 schema messages vs `jing`'s 1,214.
- [x] **0.6** **Re-triaged.** `validation-inventory.csv` regenerated against the complete log: 3,142 messages / 1,012 edit sites / 124 files, with an `edit_sites` column added.

> If you must use `jing` (e.g. to diff against an old log), remember it stops at chapter 8 and silently tells you chapters 9–15 are clean. They are not — they hold 77% of the errors.

### Where to actually start

Rank by `edit_sites` in the CSV. The real head of the queue:

### Progress

**Book-wide: 3,142 → 1,144** (917 schema + 227 validation-plus), measured at `5e8259e`, as of the last full `--engine salve` run — with every `<xi:include>` active. Note that a commented-out include is not built and therefore not validated: `efc1267` had five chapter-9 sections commented out, which depresses the count for reasons unrelated to any fix. Always confirm `grep -c '<!-- *<xi:include' source/main.ptx` is 0 before quoting a book-wide number.

**Since then: the R8 conversion, at `40d8fc9`.** All 16 exercises files moved to the `<exercises>`/`<exercisegroup>` shape; **R8 is 40 → 0**, and the schema half went 945 → 1,685 → **1,045** on the harness described in the header (the rise is the reverse cascade, not a regression — the conversion made 743 previously-masked errors visible and 596 of them were swept). Five of the sixteen files are now clean. Full accounting in the R8 section below.

**Then: the quick-reference appendix, at `006177d`.** All twelve `aa-bookends/a3-quickref/*.ptx` files went **121 → 0**, taking the book-wide schema half to **923** on the same harness. Details in the quick-reference section below.

**Then: Phase 6, at `b362b64`.** `c5-if/sec-product-rule.ptx` went **72 → 0** and no `<var>` remains outside a `<webwork>` in the book.

**Then: the book-wide mechanical classes, at `f9c2ad9`.** **923 → 546**, and 21 files went to zero — including *every* `*-model.ptx`.

| Pass | Sites | Book-wide |
|---|---:|---|
| Phase 6 fill-in-the-blanks (`sec-product-rule`) | 1 file | 923 → 851 |
| `L-pfd` child order + two example shapes | 27 | 851 → 800 |
| **Phase 3** — `<ol>`/`<ul>`/`<dl>` need a `<p>` | 146 in 24 files | 800 → 634 |
| `<md>` directly in a `<cell>` | 33 in 6 files | 634 → 609 |
| `<md>` needing a `<p>` in block-content elements | 76 in 23 files | 609 → 566 |
| `<p>` wrapping nothing but a `<tabular>` | 20 in 9 files | 566 → 546 |

⚠️ **Three over-reaches in this batch, none of which the message count would have caught.** All three are the same failure: assuming a content model instead of reading it.

- A `<p>` was wrapped around `front-matter`'s `<support><ul>`, taking it 3 → 4. **`<support>` is paragraph-like and admits no `<p>` at all.** The skip list now comes from the grammar — every element whose model refs `List` directly: `<outcomes>`, `<objectives>`, `<headnote>`, `<list>`, `<stack>`, `<sidebyside>`, `<subslide>`, `<support>`.
- Three `<cell><p><md>…</md></p></cell>` in `sec-order.ptx` were converted to inline `<m>`. **`TableCell` has a paragraph branch**, so that is legal display math — the file was clean before *and* after, and only reading the schema revealed that the math had silently shrunk. Only an `<md>` whose *direct parent* is `<cell>` is an error.
- Widening the general "wrap runs of inline siblings" pass to more parents **broke well-formedness in nine files**: that pass assumes an element whose open and close tags sit on their own lines, which does not hold for `<example>` and friends. Reverted rather than patched.

**Every transform now re-parses its own output and refuses to write a file that no longer parses.** Do the same with anything new — `git diff` will not tell you, and neither will the message count.

**Latest: review of #226, at `8b155e1`. 546 → 540.**

| Pass | Sites | Book-wide |
|---|---:|---|
| reversed `<p>` wrappers around `<answer>`/`<feedback>` — a regression of the previous batch | 9 in 3 files | 546 → 544 |
| lead-in and the block it introduces merged into one `<p>` (rendering shape, not an error) | 144 in 37 files | 544 → 544 |
| `EXL-exp-logs` practice list → `<example>`s; `<statement>` added to all nine examples | 16 | 544 → 541 |
| the two other examples book-wide owning a `<solution>` with no `<statement>` | 2 | 541 → 540 |

**Latest: `aa-bookends/a2-calculus/A-limits.ptx` — 32 → 0, the whole file. 527 → 495** on a freshly rebuilt harness (see the re-baselining warning at the top: the same tree reads 527 where the previous revision recorded 540). This was the head of the Queue and the last of the nested-list blockers; the section is now one `<exercises>` division. Full write-up in the `<exercises>` section below.

| Pass | Sites | Book-wide |
|---|---:|---|
| outer `<ol>` → `<exercises>`, inner `<ol>` → `<task>`s, `<answer>` before `<solution>` | 13 problems in 1 file | 527 → 495 |

The drop was exactly the file's message count — no reverse cascade, and nothing surfaced elsewhere. That is the *unusual* outcome in this sweep, and it is worth knowing why: every error in the file was a misplaced `<solution>`/`<answer>`/`<p>` reported directly, with no failing ancestor above them to hide siblings. Do not expect it twice.

**Then: `c2-solns/exercises-solns.ptx` — 30 → 0, at `faa192c`. 495 → 465.** The second Queue head, and unlike `A-limits` almost none of it was mechanical: three separate classes, each an authoring decision, all three now **decided by the author**. Two of the three settle classes that recur in other files — see the ✅ DECIDED boxes in the R8 section below.

| Pass | Sites | Book-wide |
|---|---:|---|
| `<solution>`s parked in a `<conclusion>` moved into the `<task>` each answers | 3 | 495 → 492 |
| answer keys built from `<line>` → `<p><ol marker="a." cols="3">` | 18 in 2 exercises | 492 → 468 |
| orphan solution (d) + its now-childless `<conclusion>` deleted | 1 | — |
| WeBWorK `<solution>` moved inside `<webwork>`, `<answer>` dropped | 2 exercises | 468 → 465 |

⚠️ **A "fix" can be worse than what it replaced, and the count will not always say so.** The previous batch's single-line branch took the whole source *line* as the `<md>` body, so where an `<md>` shared its line with its parent's tags the parent was swept into the new `<p>`:

```xml
<answer><md>x = z^3</md></answer>        <!-- before -->
<p><answer><md>x = z^3</md></answer></p> <!-- after: worse -->
```

That is invalid nesting *and* leaves the bare `<md>` exactly where it started. **The file's count did not move** (21 → 21), because the enclosing `<li>` was already failing and masked it. Copilot caught it on the PR; nothing in the harness would have. When a transform emits a wrapper, assert the wrapper's *child* is what you meant to wrap.

Two content models worth recording, both found the hard way:

- **`Feedback` has an inline branch, but it is `TextLong`** — whose `TextLongContent` refs `MathInline` and **not** `MathDisplay`. So inline feedback is fine until it contains an `<md>`, at which point the block branch is forced and the `<p>` goes *inside* the `<feedback>`.
- **`ExampleLike` takes `BlockStatement+` **or** `Statement, Hint*, Answer*, Solution*`.** Loose `<p>` plus `<solution>` is neither: **the moment an `<example>` owns a solution, its prompt needs an explicit `<statement>`.** Converting the `EXL-exp-logs` list to examples took the file 21 → 27 before this was found, and it was firing on two *pre-existing* examples the pass never touched. A book-wide sweep found only 11 sites total, all now fixed.

**`<p>` takes `TextParagraph`, and `TextParagraphItem` refs both `MathDisplay` and `List`** — so a `<md>`, `<ol>`, `<ul>` or `<dl>` may live inside the paragraph that introduces it. Per the author, when a lead-in runs on into its block, that is where it belongs; splitting them across two `<p>` renders the equation as an orphaned paragraph. Scoped to a clear continuation: lead-in ends in a colon, next `<p>` holds that one block and nothing else, lead-in is pure prose, only whitespace between them.

⛔ **Two continuation buckets still need the author.** 12 colon-cued sites whose lead-in already carries its own display math, and ~150 whose lead-in ends in something other than a colon — often mid-LaTeX, so whether they are continuations is a judgement per site rather than a pattern.

| File | Msgs before | after | Sites | Notes |
|---|---:|---:|---:|---|
| the 16 `exercises-*.ptx` / `review-*.ptx` files | 89 | **189** | 16 files | R8×40 → 0; the rise is unmasked Phase 2/4 work — see the R8 section |
| the 12 `aa-bookends/a3-quickref/*.ptx` files | 121 | **0** ✅ | 12 files | one shared structural defect; `c9-qref-lt` alone was 90, 88 of them `<md>` in a `<cell>` |
| `c10-lt/sec-lt-properties.ptx` | 121 | **5** ✅ | 46 | R1×58; remainder is the blocked class below |
| `c9-uc/sec-selecting-the-particular-soln.ptx` | 124 | **17** ✅ | 40 | R1×57 (24 of them masked), R7×4 |
| `aa-bookends/a1-algebra/CSQ-completing-sq.ptx` | 190 | **8** ✅ | 11 | R1×12, **2C×6**, R13×2 |
| `aa-bookends/a1-algebra/SBN-subscript-notation.ptx` | 115 | **0** ✅ | 13 | R1×9 + 4 bare `<md>`, **2C×3**, R13×2 — first file fully cleared |
| `c9-uc/sec-uc-method.ptx` | 109 | **3** ✅ | 37 | R1×18 statements + 7 `<md>`, **R7×12**; remainder is the blocked class below |
| `c10-lt/exercises-lt.ptx` | 102 | **2** ✅ | 45 | R1×45 (**25 of them masked**); remainder is the R8 blocked class below |
| `c8-lhcc/sec-second-order-lhcc-eqns.ptx` | 6 | **0** ✅ | 3 | model pattern ×3 examples |
| `c8-lhcc/sec-solving-higher-order-lhcc-eqns.ptx` | 6 | **2** ✅ | 5 | model ×1 (6 problems); +4 R1 unmasked by it; remainder `<proof>`/`<interactive>` in a `<p>` |
| `c11-ltm/sec-leaving-the-laplace-domain.ptx` | 91 | **41** | 28 | model ×1 (`<sbsgroup>`); +27 R1 unmasked; remainder is other classes |
| `c1-classification/sec-linear-terms.ptx` | 4 | **3** | 1 | model ×1; remainder is `<sidebyside>` inside `<areas>` (Phase 4A) |
| `aa-bookends/a2-calculus/A-limits.ptx` | 32 | **0** ✅ | 13 | outer `<ol>`→`<exercises>`, inner `<ol>`→`<task>`s, 2C×13; the nested-list case |
| `c2-solns/exercises-solns.ptx` | 30 | **0** ✅ | 8 | three author decisions: `<line>` answer keys ×18, orphan solution, WeBWorK `<answer>` |
| `aa-bookends/a1-algebra/P-units-mass-balance.ptx` | 21 | **7** | 15 | `<li>`→`<exercise>` ×15; remainder is `<sidebyside>` placement |
| `aa-bookends/a2-calculus/F-ibp.ptx` | 13 | **5** | 2 | inline `<exercise>` ×2; remainder incl. a pre-existing `<section>`→`<subsubsection>` level skip |
| `aa-bookends/a2-calculus/B-lhospital.ptx` | 5 | **6** | 4 | `<li>`→`<exercise>` ×4; R1 unmasked by it |
| `aa-bookends/a2-calculus/E-usub.ptx` | 4 | **3** | 3 | `<li>`→`<exercise>` ×3 |
| `aa-bookends/a1-algebra/O-interrelated-functions.ptx` | 3 | **1** | 3 | `<li>`→`<exercise>` ×3 |
| `aa-bookends/a1-algebra/N-recursive-functions.ptx` | 3 | **3** | 9 | inline `<exercise>` ×6 + division ×3; R8 avoided by keeping only the final block a division |
| `aa-bookends/a2-calculus/G-improper-integrals.ptx` | 2 | **0** ✅ | 2 | `<li>`→`<exercise>` ×2 |

Applying the model is **not** a net-negative-only operation: it unmasks R1 errors that were hidden inside the illegal containers. `sec-solving-higher-order-lhcc-eqns` went 6 → 10 after the conversion before dropping to 2, and `sec-leaving-the-laplace-domain` surfaced 27. Sweep the file's R1 in the same pass.

### Queue

Regenerated at `faa192c`, schema half only, same harness as the header. The WeBWorK and `<line>` rows are **no longer blocked** — both classes were decided when `exercises-solns` was cleared; see the two ✅ DECIDED boxes in the R8 section.

| File | Msgs | Dominant class |
|---|---:|---|
| `c3-di/exercises-di.ptx` | 25 | WeBWorK trailing children (**decided**); text after `</mrow>` (8D) |
| `c4-sov/exercises-sov.ptx` | 24 | `<area>` inside `<ol>/<li>`; WeBWorK trailing children (**decided**) |
| `c1-classification/exercises-class.ptx` | 21 | Phase 2A `<feedback>` at task level, 2B `<solution>` after tasks |
| `c7-em/exercises-em.ptx` | 21 | `<stack>`; a bare `<p>` where a `<statement>` belongs |
| `c12-ltp/exercises-ltp.ptx` | 21 | `<paragraphs>` inside a `<solution>` — author call |
| `c11-ltm/exercises-ltm.ptx` | 19 | `<line>` as **equation steps** — the one `<line>` sub-case still open, see below |
| `aa-bookends/a1-algebra/EXL-exp-logs.ptx` | 18 | `<md><mrow xml:id="…">` in cells — **blocked**, see below |
| `c11-ltm/sec-leaving-the-laplace-domain.ptx` | 16 | assorted |
| `c8-lhcc/exercises-lhcc.ptx` | 15 | `<line>` as **running text**; WeBWorK trailing children (**decided**) |
| `c0-whats-a-de/exercises-wad.ptx` | 14 | assorted |
| `c12-ltp/sec-laplace-piecewise-method.ptx` | 14 | assorted |
| **`main.ptx`** | **13** | 7× `<audio>` in a `<p>` inside a chapter-intro `<aside>`; one `<tabular>`/`<interactive>` block — see below |

⚠️ **`main.ptx` carries 13 of its own and has never appeared in this queue.** It is not an artifact of textual assembly — the messages land on real `main.ptx` lines. Seven are the same shape repeated in seven chapter introductions: `<aside component="web"><title>🎧 Listen</title><p><audio …/></p></aside>`, where `<audio>` is a block element and the `<p>` around it is the defect. That is the mechanical "block element inside a `<p>`" class this document already covers, so it should be cheap — but **check `Aside`'s model before dropping the wrapper**, per the `<support>` over-reach recorded above. The remaining 6 are one `<tabular>`/`<interactive>` region around lines 1169–1200, including a `width` attribute that is not allowed where it sits.

⛔ **`EXL-exp-logs.ptx` needs the author.** Its 18 table cells hold `<md><mrow xml:id="…">…</mrow></md>`, and **`<m>` accepts no `xml:id`** — its content model is bare mixed content. Two of those ids, `exp_rule_02e` and `exp_rule_04e`, are live `<xref>` targets, so the usual `<md>` → `<m>` conversion would break them. Keeping referenceable display math inside a cell means restructuring the table.

**`aa-bookends/a3-quickref/` is finished: 121 → 0, all twelve files.** See the section below for what that took, since the same shapes recur elsewhere.

**Phases 3 and 6 are finished, and every `*-model.ptx` is clean.** Regenerated at `faa192c`, the largest remaining classes are `<solution>`/`<answer>` placement (**85**, spread thin across 25 files — the biggest single file holds 5), `<md>` placement (39), `<line>` used for line breaks (**32 across 8 files**, and its shape is decided — see the R8 section), loose text where a block belongs (30), `<paragraphs>` inside a `<solution>` (28), and `<feedback>` at task level (24).

⚠️ **`<solution>`/`<answer>` placement is no longer a per-file job.** It was concentrated in the exercises files when this line was first written; it is now 85 messages over 25 files with a modal count of 1–4 each. Working it file-by-file down the Queue will be slow. It is worth one book-wide enumeration of the *shapes* first — `<solution>` in a `<conclusion>`, `<answer>` trailing a `<solution>`, `<solution>` under an `<li>` — since each shape has an established fix in this document.

Rank by `edit_sites`, not `total`, when picking from the full CSV. `CSQ-completing-sq.ptx` was 190 messages from **11 real edit sites** in a 169-line file — three quarters of an hour's work looked like a week's.

---

## ✅ DECIDED: worked solutions inside layout containers

**The author resolved this in `efc1267`** ("fixed the sidebyside-solution schema violation"), working on `c9-uc/sec-selecting-the-particular-soln.ptx`. That commit is the specification — read it before touching any file in this class:

```bash
git show efc1267 -- source/c9-uc/sec-selecting-the-particular-soln.ptx
```

### The chosen pattern: paired `<ol marker="(a)">` lists

None of the three options previously drafted below was taken. The author's fix converts the side-by-side layout into **two parallel enumerated lists** — problems in the `<statement>`, worked solutions in a sibling `<solution>` — so that item (a) in one is item (a) in the other:

```xml
<example>
  <title>…unchanged…</title>

  <statement>
    <p>
      …lead-in sentence…
      <ol marker="(a)" cols="2">
        <li><m>…problem 1…</m></li>
        <li><m>…problem 2…</m></li>
      </ol>
    </p>
  </statement>

  <solution>
    <p>
      <ol marker="(a)">
        <li><p>…problem 1's worked solution…</p></li>
        <li><p>…problem 2's worked solution…</p></li>
      </ol>
    </p>
  </solution>
</example>
```

Why this beats the three options drafted below: `<solution>` becomes a sibling of `<statement>`, so **solutions stay click-to-reveal knowls** (option 1 lost that), the example is **not split** (option 2), the problem/solution pairing survives via the list marker (option 3 lost it), and **no labels need inventing**. The `<sidebyside>` and its `widths`/`margins`/`valign` disappear.

Notes for applying it:

- `cols="2"` goes on the statement's `<ol>` only where the problems are short one-liners; the solution's `<ol>` takes none.
- A `\ds` that existed only to enlarge a side-by-side panel can be dropped when the problem moves into a list item.
- **Move text verbatim.** `efc1267` also made a few content corrections in passing (renaming `y_p` to `u_p` and `\omega_p` to match each example's dependent variable, and rewording a redundant-constants explanation). Those are authoring changes, not part of the structural fix — do not imitate them elsewhere.
- Panels are not always problem-left/solution-right. In `c8-lhcc/sec-second-order-lhcc-eqns.ptx` each panel holds a problem *and* its own solution. The target shape is the same either way.

### Scope

The class is **168 messages across 37 files** in the current log, in 40 distinct structural signatures — larger and more varied than the 111/24 first recorded. Only part of it is the exact shape `efc1267` fixed:

| Shape | Messages | Status |
|---|---:|---|
| `<solution>` inside `<sidebyside>` — the model's shape | ~~17, in 4 files~~ | **✅ 0 — all 4 files converted** |
| `<solution>` inside `<ol>/<li>` inside a `<p>` | 50 | **✅ 8 files done, `A-limits` included** — see the `<exercises>` pattern below; the nested-list sub-case is now closed |
| `<sidebyside>` inside a `<p>` (no `<solution>` involved) | ~77 | a *placement* problem, not a solutions problem — the `<p>` wrapper is the defect |
| `<solution>` inside `<dl>/<li>`, `<statement>` misplacement, others | remainder | assorted; judge per site |

**Do not assume one script clears the class.** Work shape by shape, and re-validate between them.

### R1 `<statement>` — the payoff for enumerating the source

**706 sites across 45 files, clearing 939 schema messages.** The validator reported only **122** of the 706. The rest were masked: a failing ancestor stops the parser before it reaches the statements inside, so most of the class was invisible until the containers above it were fixed.

That ratio — 122 visible, 706 real, 939 messages cleared — is the strongest argument in this document for **enumerating the source rather than working the message list**. Had the pass followed the log, it would have fixed 122 sites and left 584 to surface later as an apparent regression.

Two shapes, both already dominant in the book:

```xml
<statement><m>(6, -1)</m> and <m>(2, -9)</m></statement>
<statement><p><m>(6, -1)</m> and <m>(2, -9)</m></p></statement>   <!-- single-line -->
```

and the multi-line form, where the `<p>` takes its own lines and the content indents one level deeper.

⚠️ **A statement can also hold loose prose *alongside* block content.** An enumeration that skips any `<statement>` containing a block child misses these — 5 sites, four of them prose heads before an `<ol>` or `<md>`, one a trailing period after a display `<md>`. Test for text at depth 0 inside the element, not merely for the absence of block children.

⚠️ **An empty `<statement/>` is not this class.** `c1-classification/exercises-class.ptx` has 12 `<task>` elements whose statement is genuinely empty — the prompt is in the `<title>`, the content in `<areas>`. They produce **432 messages, 36 apiece**, and are every statement message left in the book. Wrapping an empty element in an empty `<p>` games the schema without fixing anything; per the guardrails these need a real statement or a restructure, and that is the author's call.

### Block elements inside a `<p>` — `<sidebyside>`, `<image>`

`<p>` holds inline content. A block element inside one is an error, and the fix is always to make it a **sibling** of the `<p>`, never to delete it. Two shapes occur:

- the `<p>` wraps nothing else, so the wrapper is simply dropped;
- the `<p>` mixes prose or `<md>` with the block, so it is split — the other content keeps its `<p>`, and the block is lifted out between them.

Moved blocks dedent one level. **Expect the diff to be large relative to the number of edits** — the moved content *is* the diff. That is not the CRLF trap; check `git diff --numstat` against the file's line count if unsure.

⚠️ **Count every element when deciding whether a block is a direct child.** A transform that tracked only `<p>` and `<sidebyside>` nesting read a `<sidebyside>` buried in `<ol>/<li>/<answer>` as a direct child of the outer `<p>`, and hoisting it tore the list apart. Mask comment bodies first so tags inside them are never counted, and refuse to write a file that no longer parses.

Cleared 77 → 2. The 2 survivors are nested `<sidebyside>` inside `<sidebyside>`, which is a layout decision, not a mechanical fix.

### A `<cell>` takes inline content — `<md>` in a table cell is an error

Converting any grid into a `<tabular>` is a **two-step** change. Moving the panels into `<cell>` elements is the obvious half; the half that is easy to miss is that a cell takes inline content, so display `<md>` has to become inline `<m>`. Converting three `<sbsgroup>` grids and stopping at step one traded 3 errors for about 50 and pushed the book-wide count **up** by 22. With the math converted, the same three files went 94 → 31.

This is also why **`<md> is not allowed here` is the largest class left (229)** — a good share of it is display math sitting in table cells that were built this way already.

### `<caption>` comes first in a `<figure>`

The schema orders `MetaDataCaption` before the interactive slot, so a `<figure>` whose `<caption>` trails its `<image>` is invalid. **5 figures across 4 files in `c6-qm`**, pre-existing and unrelated to any sweep work — but easy to miss, because a figure that is already failing for another reason hides it. Reordering is the whole fix.

A separate shape reports under the same `<image> is not allowed here` message: an `<image>` wrapped in a `<p>`, usually a `<sidebyside>` panel written as `<p><image/></p>` where the panel should just be the `<image>`. **12 sites across 6 files.** The two together took that message from 18 to 1 — 18 is the count of the *message*, not of either shape.

⚠️ **Carry the panel width when you unwrap a single-panel `<sidebyside>` around an image.** `<sidebyside widths="50%"><image width="100%"/></sidebyside>` renders at half the text width, because the image fills the *panel*. Drop the panel and `width="100%"` now means the full text width — the figure silently doubles. Move the panel's width onto the image.


### `<solution>`/`<answer>` inside an `<ol>/<li>` → `<exercises>`

The `efc1267` model does **not** apply here. These lists are bare section content with no `<example>` to rearrange inside, so a container has to be introduced. Every problem in this shape carries an `<answer>` as well as a `<solution>` — 15/15 in `P-units-mass-balance`, 13/13 in `A-limits` — which is exercise-shaped, not example-shaped, and matches `SBN-subscript-notation` in the same appendix. So each `<li>` becomes an `<exercise>`:

```xml
<exercises>
  <introduction><p>…the lead-in text that preceded the list…</p></introduction>
  <exercise>
    <statement><p>…the li's problem text…</p></statement>
    <answer>…</answer>          <!-- phase 2C order: answer before solution -->
    <solution>…</solution>
  </exercise>
  …
</exercises>
```

Four traps, all of which cost a re-run when first hit:

1. **The moved content usually needs a `<p>`.** An `<li>`'s text is inline, so dropping it straight into a `<statement>` produces a fresh R1 error per item. `O-interrelated-functions` went 3 → 103 that way. Wrap inline content as you move it — and remember **`<md>` does not count as a block child**; a `<statement>` holding text plus `<md>` still needs the `<p>`.
2. **An `<exercises>` division must be the section's last content.** It cannot precede a `<subsubsection>`. Check what follows the list before converting.
3. **Two `<exercises>` in one section is the R8 error.** A file with two separate practice lists gets one R8 message for the second. `N-recursive-functions` is in this state deliberately — the alternative was leaving 53 errors — but it is a judgment call: its *first* list is explanatory ("as in the example below"), not practice, so an author may prefer that one become an `<example>` and the division count drop back to one.
4. ~~**Nested lists do not convert.**~~ ✅ **Resolved — the nested list becomes `<task>`s.** Where the solution-bearing `<ol>` sits inside an `<li>` of an outer `<ol>`, an `<exercises>` indeed cannot go at the inner level, but it goes at the *outer* one: the outer `<ol>` becomes the `<exercises>` division, each outer `<li>` becomes an `<exercise>`, and each inner `<li>` becomes a `<task>` of that exercise. `A-limits` was the whole of this sub-case and went 32 → 0. The shape is worth reading in full:

```xml
<exercises>
  <exercise>                                   <!-- was an outer <li> with a nested <ol> -->
    <introduction>
      <p>Evaluate each of the following limits.</p>   <!-- the outer li's lead-in, verbatim -->
    </introduction>
    <task>                                     <!-- was an inner <li> -->
      <statement><p><m>…</m></p></statement>
      <answer><p><m>…</m></p></answer>         <!-- answer BEFORE solution -->
      <solution><p>…</p></solution>
    </task>
    …
  </exercise>
  <exercise>                                   <!-- was an outer <li> with no nested list -->
    <statement><p>…</p></statement>
    <answer>…</answer>
    <solution>…</solution>
  </exercise>
</exercises>
```

   Four things this case settled, none of them guessable from the message list:

   - **`<answer>` is legal inside a `<task>`.** `Task` offers `Statement, Hint*, Answer*, Solution*` — the same branch `Exercise` has. Step 2.6 below said otherwise and has been corrected. What *does* bite is the order: every one of the 13 problems ran `solution` then `answer`, so all 13 needed the Phase 2C swap as part of the move.
   - **Reader-visible numbering survives.** Outer items were `1. 2. 3.` with inner `(a) (b) …`; exercises number `1. 2. 3.` and tasks `(a) (b) …`. An `<exercisegroup>` would have flattened the sub-parts into top-level exercises and lost the grouping — that is the wrong container here, even though it is the right one in the R8 conversion.
   - **A `<section>` may hold blocks *and* an `<exercises>`.** `Section`'s first branch is `(BlockDivision|Paragraphs)+` followed by an interleave that includes one `Exercises`, so the section's `<aside>` and lead-in `<p>` stay exactly where they are and the division follows them. This is the same branch the quick-reference `<aside>` landed on — there it blocked *subdivisions*, but `<exercises>` is reachable from it. Trap 2 above ("must be the section's last content") is about what may follow, not about what may precede.
   - **`<p/>` used as a line break.** Six statements read `<p><m>…</m> <p/> where <m>s</m> is a constant…</p>` — a nested empty paragraph faking a break. Each became two real `<p>` children of the `<statement>`, which is what the break was imitating and what `Statement = BlockStatement+` wants anyway.

Done: `P-units-mass-balance` (21→7), `F-ibp` (13→7), `O-interrelated-functions` (3→1), `G-improper-integrals` (2→**0**), `E-usub` (4→3), `B-lhospital` (5→6, R1 unmasked), `N-recursive-functions` (→4), `A-limits` (32→**0**, the nested case). Remaining messages in these files are other classes — mostly `<sidebyside>` placement.

⚠️ **Two content defects surfaced in `A-limits` and were deliberately left alone — they need the author.** Both are pre-existing and neither is a schema error, so fixing them would be an authoring change smuggled into a structural pass, which `efc1267`'s note above warns against:

- **Missing `=` after `\amp`.** In the last two solutions (`\frac{1}{s+7}e^{(-7-s)b}` and `\frac{1}{s-a}e^{(a-s)b}`), the first three `<mrow>`s read `\amp \lim…`, `\amp \frac{1}{s+7}…`, `\amp \frac{1}{s+7}\cdot 0…` where every parallel problem reads `\amp = …`. Only the final row of each carries the `=`. The alignment column therefore has no relation symbol in it.
- **`<m>s>3</m>`** — a bare `>` where the other twelve problems use `\gt`. Well-formed XML and valid schema; just inconsistent with the rest of the book.

---

### Superseded — the options considered before `efc1267`

Kept for the reasoning only. Three variants of the underlying pattern were seen:

| Variant | Example | Why it fails |
|---|---|---|
| `<solution>` inside `<sidebyside>` | `c9-uc/sec-selecting-the-particular-soln.ptx` (17) | `<sidebyside>` is legal under `<statement>`, but each panel is `<p><solution>…</solution></p>`, and `<solution>` may be in neither a `<statement>` nor a `<p>` |
| `<sidebyside>` inside `<p>` | `c10-lt/sec-lt-properties.ptx` (5) | the `<sidebyside>` itself is inside a `<p>` within the `<example>` |
| `<solution>` inside `<li>` | `aa-bookends/a1-algebra/CSQ-completing-sq.ptx` (8) | an `<example>` uses a `<dl>` whose `<li>`s hold `<solution>`; the `<dl>`-not-allowed error is the cascade from it |

Heaviest files: `c9-uc/sec-selecting-the-particular-soln` (17), `c11-ltm/sec-laplace-transform-method` (12), `c11-ltm/sec-solving-the-laplace-domain-eqn` (10), `c5-if/sec-if-method` (8), `aa-bookends/a1-algebra/M-piecewise-functions` (7).

**Every available fix trades something away**, which is why this needs the author rather than a rule:

1. **Match `E-usub.ptx`** — `<sidebyside>` becomes a direct child of `<example>` with plain `<p>` panels, dropping the `<statement>`/`<solution>` tags. This is the repo's one existing working example+sidebyside pattern and it validates clean today (`E-usub`'s own errors are elsewhere — an `<aside>` sidebyside and `<solution>` inside `<ol>/<li>`). Preserves column widths, needs no new labels. **Cost: solutions render always-visible instead of click-to-reveal.**
2. **Split into separate examples** — matches the dominant convention (92 of 96 examples) and restores solution knowls. **Cost: loses the side-by-side layout, needs invented labels.**
3. **One `<statement>` + one `<solution>` per example** — conventional, no new labels. **Cost: separates each problem from its worked solution, which is what the layout exists to prevent.**

⚠️ Note for anyone reaching for `<task>` as the tidy PreTeXt answer: **there is no `<example>` containing a `<task>` anywhere in this book.** That shape would be introducing a new pattern here, not following one.

~~Until this is decided, treat these messages as out of scope and report them separately from the per-file count.~~ **Resolved by `efc1267` — see the decided pattern above.** Files still carrying this class are ordinary work now, not blocked work, so a file reported at "3 remaining" because of it is unfinished, not done.

---

## ✅ DECIDED: multiple `<exercises>` divisions per section (R8)

**The author resolved this. R8 is 40 → 0 across all 16 exercises files.** The shape is the one `c1-classification/exercises-class.ptx` already used, stated by the author as two swaps:

- `<section>` → `<exercises>`
- `<subsection>` → `<exercisegroup>`

and one requirement: **every `<exercisegroup>`, and every `<exercise>` that holds `<task>`s, gets an appropriate `<introduction>`.** For an exercisegroup the schema *requires* one — `ExerciseGroup` refs `IntroductionStatementNoNumber` outside any `<optional>` — so this is not a style preference.

### The rules the conversion followed

`<exercisegroup>` cannot nest, and 13 of the 14 remaining files had divisions holding groups of their own. The author chose **promote the inner groups**:

| Case | What happens |
|---|---|
| Division's own `<exercisegroup>` **with** a title | promoted to a top-level group; the division's emoji cue (💡 / 🏋️‍♂️ / ✍🏻) is prefixed to its title, so the quiz/drills/problems band is still visible |
| Division's own `<exercisegroup>` **without** a title | promoted, still untitled — it shows no heading today either |
| Run of loose `<exercise>`s **at the head** of a division | becomes a group carrying the division's `label` and title; that heading is what sits above them today |
| Run of loose `<exercise>`s **after** a group | left loose. An `<exercise>` is a legal child of `<exercises>`, so it keeps rendering with no heading of its own — and needs no invented introduction |
| `<aside>` or prose at the head of a division | folded into that group's `<introduction>` (an exercisegroup takes no `<aside>` of its own) |
| Section-level prose | becomes the `<exercises>` division's own `<introduction>` |
| `<title>Exercises</title>` on the section | dropped — an `<exercises>` division titles itself |

Nothing gains a heading it does not already have, and nothing loses one except the division heading itself, which the emoji cue carries forward.

Labels: the division labels (`lt-drills`, `uc-problems`, …) are dropped except where they land on the lead group. Only **`fo-review-other-methods`** is referenced by an `<xref>` (twice, `text="title"`), and it is kept, on a titled group. `validate_source.py` confirms 1,727 unique ids with no duplicates after the change.

Two things worth knowing for any future division work:

- **`@cols` on an `<exercisegroup>` takes 2–6.** Five groups carried `cols="1"`, which is invalid and made the entire group fail. One column is the default; drop the attribute.
- A `<section>` *can* legally hold several `<exercises>` divisions — but only on the branch that starts with a `<subsection>`. That is why the mixed shapes flagged inconsistently.

### ⚠️ It unmasked 743 errors, and that was the point

The schema does not descend into a rejected element, so every error inside the 2nd and 3rd divisions was invisible. Clearing R8 took the book from 942 to 1,685 messages before any of it was swept. **This is the reverse cascade, not a regression.** Sweeping the mechanical part of it brought the book to **1,045**:

| Class swept in the same pass | Sites |
|---|---:|
| `<answer>` moved before `<solution>` (schema order `statement → hint → answer → solution`) — this is what the 396 `<evaluation>` messages were reporting | 235 |
| bare `<m>`, `<md>`, `<ol>` inside `<answer>`/`<solution>`/`<hint>` wrapped in `<p>` (R1) | 34 |
| `<premise>`/`<response>` line and `<p>` wrappers flattened to inline text (Phase 4B) | 10 |
| `<p>`-wrapped `<line>` inside `<areas>` → `<cline>` children of `<areas>` | 6 |
| `cols="1"` dropped | 5 |
| empty `<introduction/>` removed (30 messages from 3 sites) | 3 |
| `\mbox{…}` prose trailing a `<md>` moved out into the enclosing `<p>` | 3 |
| `<mrow>` continuation lines re-closed inside their own row | 3 |
| `</p>` closing mid-sentence in a `<statement>` | 2 |

⚠️ **`<intertext>` is not the fix for prose after the last `<mrow>`.** The schema requires every intertext to be *sandwiched* between mrows — it cannot lead, cannot trail, and two cannot be adjacent. A trailing one trades one error for eight. Trailing prose belongs after `</md>`, in the enclosing `<p>`.

### What is left in those files — 189 messages, and it is not R8

Five files are clean: `c6-qm`, `c9-uc/review-constant-coefficient`, `c12-ltp/review-choosing-a-method`, `c14-nlinsys`, and `c5-if/review-first-order-methods` is at 1.

| File | Left | Dominant class |
|---|---:|---|
| `c4-sov/exercises-sov.ptx` | 32 | `<area>` inside an `<ol>/<li>` in `<areas>`; WeBWorK exercises with trailing `<hint>`/`<answer>`/`<solution>` |
| ~~`c2-solns/exercises-solns.ptx`~~ | **0** ✅ | cleared at `faa192c` — `<line>` answer keys ×18, orphan solution, WeBWorK `<answer>` |
| `c3-di/exercises-di.ptx` | 26 | WeBWorK trailing children; text after `</mrow>` |
| `c7-em/exercises-em.ptx` | 23 | `<stack>` and a bare `<p>` where a `<statement>` belongs |
| `c12-ltp/exercises-ltp.ptx` | 21 | `<paragraphs>` inside a `<solution>` (12) |
| `c11-ltm/exercises-ltm.ptx` | 19 | `<line>` inside a `<sidebyside>` panel (12) |
| `c8-lhcc/exercises-lhcc.ptx` | 18 | `<line>` (6); WeBWorK trailing children |
| `c13-linsys`, `c10-lt`, `c5-if`, `c9-uc` | 19 | assorted `<md>` placement, `<proof>`, `<response>` |

**Of the three that needed the author, two are now decided:**

1. ✅ **DECIDED — WeBWorK `<hint>`/`<answer>`/`<solution>` after `</webwork>`: move the hint and solution inside, drop the `<answer>`.** `WebWorkAuthored` reads `… pg-code?, statement, hint?, solution?`, so hint and solution have a legal home one level in; there is no `AnswerWW`, so the `<answer>` does not, anywhere. The author chose to drop it — WeBWorK grades and reveals the answer itself, and in practice the answer text is not lost: in both `c2-solns` exercises the value was already restated in the closing line of the solution *and* in the `pg-code` `$rhs`. **Check that before deleting** — where an answer is not recoverable from the solution, fold it in as the solution's first `<p>` instead of dropping it. Note the schema allows **at most one** hint and one solution per `<webwork>`. Done in `c2-solns` (2 exercises); roughly 5 remain, in `c3-di`, `c4-sov` and `c8-lhcc`.
2. ✅ **PARTLY DECIDED — `<line>` used for line breaks.** `<line>` belongs to `<poem>` and `<program>`. **The class is 50 messages across 9 files, not the 36 across 3 recorded here before** — `c4-sov/sec-sov-implicit-solns` (4), `c8-lhcc/sec-exponential-solns` (4), `c7-em/sec-what-is-a-numerical-solution` (2), `a2-calculus/E-usub` (2), `c12-ltp/sec-unit-step-variants` (1) and `a2-calculus/D-product-rule` (1) were never listed, and none of them is in a `<sidebyside>`. 18 are now cleared; **32 remain across 8 files.** The sites are **not one class**, and reading them is what settled it — each wants a different replacement:
   - **Answer key** (`c2-solns`, 18) — ✅ **done.** Nine yes/no verdicts in a 3×3 grid of `<sidebyside>` panels became `<p><ol marker="a." cols="3">`, one `<li>` per verdict. Letters are now generated, so they cannot drift from the `<areas>` list; the fill order changes from down-the-column to across-the-row, which the author accepted. `BlockText` has no `List` branch, so the `<ol>` still needs its `<p>`. **Verify the key against the `<area correct=…>` flags as you convert** — a scripted assert caught nothing here, but the two lists are independent transcriptions of the same truth and nothing else checks them.
   - **Equation steps** (`c11-ltm/exercises-ltm.ptx`, 12) — still open. These are `<line><m>54 = A(-1)^2 - 4(-1) + 13</m></line>` stacked inside `<sidebyside widths="15% 65% 20%">`, with `<line><m>\vphantom{A}</m></line>` used as a vertical spacer. An `<md>`/`<mrow>` is the obvious replacement, but the three-column layout (`s=-1:` in the narrow left panel, the algebra in the middle) is doing real work and `\vphantom` spacers do not survive the move.
   - **Running text** (`c8-lhcc/exercises-lhcc.ptx`, 6) — still open, and *not* in a `<sidebyside>` at all: three stacked clauses inside a `<solution>`'s `<p>` ("the DE is linear, / the DE is homogeneous, and / the DE has constant coefficients."). A `<ul>` is the natural shape; running them into one sentence is the alternative.
   - **The other 14**, in the six files listed above, are unexamined. Read each before assuming it belongs to one of the three shapes above — that assumption is exactly what made this look like a 36-message single-decision class in the first place.
3. **`<paragraphs>` inside a `<solution>`** — 12 in `c12-ltp/exercises-ltp.ptx`, used as titled steps ("Step 1: Apply the Laplace Transform"). `<paragraphs>` is a division-level element; PreTeXt has no titled block for this inside a solution, so the heading has to become something else. **Still needs the author.**

⚠️ **A `<solution>` parked in a `<conclusion>` is a third shape, and it is mechanical.** `ConclusionStatement` is `BlockStatement+` and admits no `<solution>`; a `<task>`'s FreeResponse branch is `statement, response?, hint*, answer*, solution*`, which is where such solutions belong. In `c2-solns` the conclusion held four solutions titled (a)–(d) for a three-task exercise, and moving them needed no re-indentation at all — a `<conclusion>`'s child and a `<task>`'s child sit at the same depth. **Count the solutions against the tasks before moving any**: the orphan (d) had never had a matching question at any commit back through #200, and the author chose to delete it rather than have a question written for it.

And one that is mechanical but was left for a later pass so it can be verified on its own: **`<area>` nested inside `<ol>/<li>`** in `c4-sov` — `<areas>` accepts `<p>`, `<cline>` and `<tabular>`, and an `<area>` inside a list item's paragraph is out of reach of that model, so the numbered steps need restructuring the way Phase 4A restructured the `<sidebyside>` wrappers.

---

## ✅ DONE: the quick-reference appendix — 121 → 0

All twelve `aa-bookends/a3-quickref/*.ptx` files were rejected outright, for one shared reason rather than twelve. Worth reading before touching any other division, because three of the shapes recur across the book.

**The structural defect.** `<section label="quick-references">` in `back-matter.ptx` opened with an `<aside>`. That puts a section on the *blocks* branch of the `Section` model, which admits **no subdivisions at all** — so every included file's root was rejected, and everything inside it was invisible. Eleven roots were `<subsubsection>`, which is not a legal child of a `<section>` under any branch; the twelfth was a `<subsection>`. And each root's only content was a `<worksheet>`, while every division branch requires block content *before* a worksheet.

**The fix: `Printout = Worksheet | Handout` is itself a subdivision.** A section can therefore hold twelve sibling `<worksheet>`s and require no block content. Each file is now a bare `<worksheet>` carrying the division's `xml:id` and title; its own title was the same generic "Key Terms &amp; Concepts" in all twelve, so that heading went and the reader still sees the chapter topic. The `<aside>` moved into an `<introduction>`, in `back-matter.ptx` and `back-matter-dev.ptx` alike.

None of the twelve `quick-ref-*` ids is referenced by any `<xref>`, so nothing broke.

**What it unmasked, and the reusable lessons:**

| Shape | Sites | Fix |
|---|---:|---|
| `<md>` in a `<cell>` | 110 | A cell takes inline content. Inline `<m>`, with `\ds` **only** where the expression carries a `\frac`, so fractions keep their display size — the convention two tables in `c9-qref-lt` already used |
| `<p>` wrapping nothing but an `<assemblage>` | 23 | Drop the wrapper; a block in a `<p>` is an error |
| `@halign` on a `<table>` | 3 | Not allowed there. In all three the enclosing `<tabular>` already carried `halign="center"`, so it drops with no rendering change |
| bare `<term>` in an `<assemblage>` | 1 | An assemblage takes `BlockText+`; the term is inline, so it gets a `<p>` |
| `<dl>` in an `<exploration>` | 1 | Like `<ol>` and `<ul>`, a `<dl>` is not block content — wrap in `<p>` |
| `<dl>` item with no `<title>` | 1 | `DefinitionListItem` is `MetaDataTitle + BlockStatement+`; in a description list the title **is** the term. `c2-qref-solns` had lost one and it was restored as "Solution" from its `@xml:id` and body — the one place in the pass where visible text was added rather than moved |
| `<subsection>` inside a `<worksheet>` | 1 | A worksheet takes `PrintoutBlock+` = `(BlockDivision \| Paragraphs)`. `<paragraphs>` is the titled block for exactly this and converts a title-plus-blocks subsection verbatim |

⚠️ **`\ds` is not optional cosmetics here.** Converting display `<md>` to inline `<m>` in a table cell shrinks a fraction to inline size. The `\ds` keeps it. Converting without it is the silent half of the "two-step change" the `<cell>` note above warns about.

⚠️ **`c9-qref-lt` was the book's largest file for three sweeps at 90 messages, 88 of them this one `<md>` class.** Message count tracked one repeated mistake, not difficulty — the whole file took one substitution pass. Rank by `edit_sites`, as this document keeps saying.

---

## Phase 1 — `<p>` wrappers in block-content elements

**769 violations · 53% of everything · the single highest-leverage fix**

### The rule

These elements hold **block** content and must not contain bare text or inline elements:

`<statement>` · `<introduction>` · `<conclusion>` · `<solution>` · `<answer>` · `<hint>` · `<feedback>` · `<task>` · `<choice>`

Everything inside them goes in a `<p>` (or another block: `<ol>` wrapped per Phase 3, `<tabular>`, `<figure>`, `<sidebyside>`, `<image>`, `<list>`).

```xml
<!-- WRONG -->
<statement>
  <m>y' = 2xy</m> is separable.
</statement>

<!-- RIGHT -->
<statement>
  <p>
    <m>y' = 2xy</m> is separable.
  </p>
</statement>
```

`<md>` counts as inline for this purpose — it must live **inside** a `<p>`, never as a direct child of `<statement>`/`<solution>`/`<feedback>`.

### Why the count is inflated (mostly good news)

The first three signatures below collapse into this one fix. The fourth does not — see the correction under the table.

| Signature | Count | Relationship |
|---|---:|---|
| `element "statement" incomplete` | 278 | direct |
| `text not allowed here` (block expected) | 184 | direct |
| `element "m" not allowed here` | 190 | direct |
| `element "exercise" incomplete; missing required element "evaluation"` | 66 | **separate defect — see below** |

> ⚠️ **Corrected 2026-08 — the `<evaluation>` row does not clear for free.** This document previously said "add the `<p>` and the 'missing evaluation' error disappears." That is wrong, and following it will leave the errors in place and make you think the file is done.
>
> The mechanism described is right as far as it goes: when the `<exercise>` content model fails, the validator falls through to the Runestone *fill-in-the-blank* branch, which wants `<evaluation>`, and reports against that branch. Under `salve` the message reads `<evaluation> is not allowed here.` with a path pointing at `</exercise>` — which is why it looks unrelated to anything you can see.
>
> But the `<statement>` is usually not what broke the content model. In `CSQ-completing-sq.ptx` **all 12 survived the `<p>` wrappers**; their real cause was **child order** (see Phase 2C). The schema fixes `statement → hint → answer → solution`, and those exercises ran `statement → solution → answer`. Reordering cleared all 12.
>
> **What to do:** when an exercise reports a missing or misplaced `<evaluation>`, check its child order first, then its `<statement>`. **Do not add `<evaluation>` elements** — that part of the original advice still holds. Re-validate before believing the count.

### Checklist

- [ ] ~~**1.1** Start with `c5-if/exercises-if.ptx` (153)~~ — ⚠️ **stale, do not follow.** That file has ~4 errors left; these counts predate `validation-fixing-pass-1`. **Use the Queue table near the top of this document instead.**
- [ ] ~~**1.2** Then `c4-sov/exercises-sov.ptx` (157), `c5-if/review-first-order-methods.ptx` (81), …~~ — stale for the same reason.
- [ ] **1.3** Work the remaining files from `validation-inventory.csv`, column `R1-p-wrapper`, descending — cross-checked against a *fresh* log, since the CSV is a baseline snapshot.
- [ ] **1.4** Highest concentration is inside `<choice>/<statement>` (~340 hits). A `<choice>` needs `<statement><p>…</p></statement>` — inline content directly under `<choice>` is also invalid. **Fix the `<choice>`'s `<feedback>` in the same pass**, flagged or not: it takes block content too, and it is routinely masked by the failing `<statement>` (24 such in `c9-uc/sec-selecting-the-particular-soln.ptx`).
- [ ] **1.5** Re-validate after each file. **The drop will not equal the file's `R1` count in either direction** — cascades clear extra errors for free, while masked siblings surface new ones. See "Counts move in both directions" above.
- [ ] **1.6** The canonical one-line shape `<statement><p>…</p></statement>` keeps the diff at 1:1 for single-line inline content, which makes review trivial and satisfies the no-reformatting guardrail. Use it where the original was a single line.

### Automation note

Do **not** regex this. A regex that inserts `<p>` around "everything between `<statement>` and `</statement>`" will corrupt nested `<sidebyside>`, `<tabular>`, and multi-block statements, and will fight the repo's no-reformatting rule. Either edit by hand from the log's `file` + `path` coordinates, or write an `lxml` pass that (a) walks only the named parents, (b) wraps *runs of inline siblings*, (c) leaves existing block children untouched, and (d) writes back with original indentation. Diff-review every file either way.

---

## Phase 2 — Exercise skeleton: `<feedback>`, `<answer>`, `<solution>`, `<hint>`

**88 violations across R2/R3/R4**

### 2A. `<feedback>` belongs to a `<choice>` (33)

```
element "feedback" not allowed here;
expected the element end-tag or element "answer", "hint" or "solution"
```

`<feedback>` is a sibling of the `<choice>`'s `<statement>`, **inside** the `<choice>`. It is never a child of `<task>` or `<exercise>`.

```xml
<!-- WRONG -->
<task label="…">
  <statement><p>…</p></statement>
  <choices>
    <choice correct="yes"><statement><p>True</p></statement></choice>
    <choice><statement><p>False</p></statement></choice>
  </choices>
  <feedback><p>…</p></feedback>
</task>

<!-- RIGHT -->
<task label="…">
  <statement><p>…</p></statement>
  <choices>
    <choice correct="yes">
      <statement><p>True</p></statement>
      <feedback><p>…</p></feedback>
    </choice>
    <choice>
      <statement><p>False</p></statement>
      <feedback><p>…</p></feedback>
    </choice>
  </choices>
</task>
```

- [ ] **2.1** Where one `<feedback>` was serving a whole `<task>`, decide per item: attach it to the correct choice, duplicate it across choices, or promote it to `<solution>`. Prefer `<solution>` when the text explains the method rather than diagnosing a specific wrong answer.
- [ ] **2.2** Honor the repo's feedback rule: no correctness-signaling words ("Exactly", "Nope", "Not quite") on True/False items, since the same text can surface either way.
- [ ] **2.3** Files: `c1-classification/exercises-class.ptx` (15), `c4-sov/exercises-sov.ptx` (5), then the rest.

### 2B. No block-level `<answer>` / `<solution>` / `<hint>` after `<task>`s (36)

```
element "solution" not allowed here;
expected the element end-tag or element "conclusion" or "task"
```

Once an `<exercise>` contains `<task>`s, the only things that may follow are more `<task>`s or a `<conclusion>`. Per-part answers live inside their own `<task>`.

- [ ] **2.4** Push each trailing `<solution>` / `<answer>` / `<hint>` down into the `<task>` it actually belongs to.
- [ ] **2.5** When it genuinely summarizes the whole exercise, convert to `<conclusion>` (which takes `<p>`, per Phase 1).
- [ ] **2.6** ⚠️ **Corrected — `<answer>` *is* legal inside a `<task>`.** This step previously read "inside a `<task>`, use `<hint>` / `<solution>` — **not** `<answer>`", and that is wrong: `Task`'s second branch is `Statement, Hint*, Answer*, Solution*`, identical to `Exercise`'s. Verify in `pretext-dev.rng` before believing any "not allowed in a task" claim. What the schema *does* fix is the order — `statement → hint → answer → solution` — so an `<answer>` that trails its `<solution>` is the Phase 2C defect, not an illegal element. All 13 problems in `A-limits` were in exactly that state.
- [ ] **2.7** Two exercises are flagged `element "exercise" not allowed yet; missing required element "introduction"` — a task-bearing `<exercise>` needs an `<introduction>` before its first `<task>`. Files: `c0-whats-a-de/exercises-wad.ptx`, `c4-sov/exercises-sov.ptx`.

### 2C. Sibling ordering (19)

```
element "answer" not allowed here; expected the element end-tag or element "solution"
```

Order is fixed: **`<statement>` → `<hint>` → `<answer>` → `<solution>`**. An `<answer>` after a `<solution>` is a schema error even though both are legal children.

**This is also the real fix for most `<evaluation>` errors** (see the corrected note in Phase 1). Wrong child order breaks the `<exercise>` content model, and the validator reports the failure against the Runestone fill-in-the-blank branch instead of naming the ordering. So wherever `R1-cascade-evaluation` is non-zero in the inventory, check child order here — do not assume Phase 1 covered it.

- [ ] **2.8** Reorder in place. Do not merge or rewrite the content.
- [ ] **2.9** Files: `c2-solns/exercises-solns.ptx` (4), `c6-qm/exercises-qm.ptx` (4), `c3-di/exercises-di.ptx` (3), `aa-bookends/a1-algebra/CSQ-completing-sq.ptx` (6 ✅ done).
- [ ] **2.10** ⚠️ **Scope any scripted swap to a single `<exercise>`.** A naive `(<solution>.*?</solution>)(\s*)(<answer>.*?</answer>)` with `re.S` will expand the non-greedy `.*?` across *other* elements to find a match — in `CSQ-completing-sq.ptx` it reached past three `<solution>`s in an unrelated `<example>` and moved an exercise's `<answer>` into a list item ~50 lines away. **The result was still well-formed XML, so parsing did not catch it.** Match `<exercise>.*?</exercise>` first, swap inside that block, and assert the file's `<answer>`/`<solution>` counts are unchanged afterwards.

### Canonical shape

```xml
<exercise label="wad-ex-01-tf">
  <title>📖❓ True or False</title>

  <introduction>
    <p>…</p>
  </introduction>

  <task label="wad-ex-01-tf-task-01">
    <statement>
      <p>…</p>
    </statement>

    <choices>
      <choice>
        <statement><p>…</p></statement>
        <feedback><p>…</p></feedback>
      </choice>
      <choice correct="yes">
        <statement><p>…</p></statement>
        <feedback><p>…</p></feedback>
      </choice>
    </choices>

    <solution>
      <p>…</p>
    </solution>
  </task>

  <task label="wad-ex-01-tf-task-02">…</task>

  <!-- optional <conclusion> only; no <solution>/<answer>/<feedback> here -->
</exercise>
```

Remember the repo rules that the schema will *not* catch: True/False pairs must **not** carry `randomize="yes"`, and any `<choices>` with two or more `correct="yes"` must set `multiple-correct="yes"`.

---

## Phase 3 — Lists are not division-level blocks

**93 violations**

`<ol>`, `<ul>`, and `<dl>` may **not** be direct children of `<section>` / `<subsection>`. Wrap in `<p>`, or promote to a `<list>` block when the list deserves a title.

```xml
<!-- WRONG -->
<subsection>
  <title>…</title>
  <ul><li>…</li></ul>
</subsection>

<!-- RIGHT -->
<subsection>
  <title>…</title>
  <p>
    <ul><li>…</li></ul>
  </p>
</subsection>
```

The 11 `element "subsection" incomplete` errors are the same defect seen from the closing tag — same fix, no separate pass.

- [ ] **3.1** Concentrated in the modeling sections: `class-model.ptx`, `solns-model.ptx`, `di-model.ptx`, `sov-model.ptx`, `if-model.ptx`, `em-model.ptx`, plus `c6-qm/sec-logistical-models.ptx`.
- [ ] **3.2** Where the list has an introductory sentence immediately above, fold it into the *same* `<p>` — that is what the surrounding prose usually intends.
- [ ] **3.3** Use `<list>` where a `<title>` and `<caption>` would help the reader; the modeling sections are the likeliest candidates.

---

## Phase 4 — Runestone interactive content models

**171 violations · the fiddliest phase · expect to read the PreTeXt guide alongside**

### 4A. `<areas>` accepts only `<cline>`, `<p>`, `<tabular>` (90)

```
element "sidebyside" not allowed here; expected element "cline", "p" or "tabular"
```

A `<sidebyside>` inside `<areas>` is the root cause; the 46 `<area>` errors and 18 `<line>`/`<tabular>` errors beneath it are cascades from the failed parse.

- [x] **4.1** Remove the `<sidebyside>` wrapper from inside `<areas>`. For side-by-side *layout* of clickable terms, use `<tabular>` or a single `<p>` with the terms inline. ✅ done — 25 wrappers across 8 files. The layout attributes they carried (`width`, `widths`, `margins`) are gone with them; where the columns mattered, `<tabular>` is the replacement and that is a per-exercise judgment.
- [ ] **4.2** `<cline>` is the element for a line of clickable content — use it rather than `<line>`, which belongs to `<poem>`/`<program>`.
- [ ] **4.3** Files: `c2-solns/exercises-solns.ptx` (38), `c1-classification/exercises-class.ptx` (26), `c4-sov/exercises-sov.ptx` (11), `c1-classification/sec-linear-terms.ptx`.
- [ ] **4.4** Re-validate these files individually — the cascade means one structural fix should clear a dozen errors, and if it doesn't, the fix was wrong.

### 4B. `<premise>` / `<response>` take inline content only (81)

Card-sort and matching leaves hold **text and inline elements**. No `<p>`, no `<line>`, no `<md>`.

```xml
<!-- WRONG -->
<premise><p>dependent</p></premise>
<response><line>The solution is represented by the</line><line><fillin characters="8"/> variable.</line></response>

<!-- RIGHT -->
<premise>dependent</premise>
<response>The solution is represented by the <fillin characters="8"/> variable.</response>
```

- [ ] **4.5** Strip `<p>` / `<line>` wrappers; join line fragments into running inline text.
- [ ] **4.6** `<md>` inside a `<response>` needs to become `<m>` inline, or the item needs restructuring — flag for author review rather than silently downgrading display math.
- [ ] **4.7** Files: `c2-solns/exercises-solns.ptx` (33), `c5-if/sec-product-rule.ptx` (17), `c5-if/review-first-order-methods.ptx` (7), `c9-uc/sec-uc-method.ptx` (12) ✅ done.
- [ ] **4.8** One `element "blocks" not allowed here; expected element "cardsort" or "matching"` in `c4-sov/sec-sov-method.ptx` — a `<blocks>` element outside its required parent. Determine the intended interaction type before editing.
- [ ] **4.9** ⚠️ **This phase runs opposite to Phase 1.** Phase 1 *adds* `<p>` wrappers; here you *remove* them. A file can need both — `c9-uc/sec-uc-method.ptx` took 25 added `<p>` (18 `<statement>`, 7 `<md>`) and 12 removed in one pass. Read the failing element before reaching for the Phase 1 script, or it will "fix" a card-sort by wrapping it deeper into the error.

---

## Phase 5 — Division nesting

**21 violations**

### 5A. ~~`<exercises>` cannot nest inside `<subsection>`~~ ✅ DONE — superseded by the R8 decision

~~Promote each nested `<exercises>` to a sibling `<section>`.~~ **Do not do this.** The author chose the `<exercises>`/`<exercisegroup>` shape instead — see "✅ DECIDED: multiple `<exercises>` divisions per section (R8)" above. The `<subsection>` wrappers in `c2-solns`, `c3-di` and `c4-sov` are gone, converted to `<exercisegroup>`s, and no exercises file uses `<section>` any more.

- [x] **5.1** ~~Promote to a sibling `<section>`~~ — replaced by the R8 conversion, which drops the division labels rather than preserving them.
- [x] **5.2** Xrefs verified: of the 41 division labels, only `fo-review-other-methods` is referenced (twice, `text="title"`), and it survives on a titled `<exercisegroup>`. `validate_source.py` reports 1,727 unique ids, no duplicates.
- [x] **5.3** `<aside>` as a direct child of a division — moved into the group's `<introduction>` by the conversion, in `c4-sov`, `c5-if`, `c6-qm`, `c8-lhcc`, `c9-uc`, `c10-lt`, `c11-ltm`, `c12-ltp`, `c13-linsys`. An `<exercisegroup>` takes no `<aside>` either, and its `<introduction>` does.

### 5B. `<paragraphs>` after `<subsection>` (2)

`c6-qm/sec-parameter-analysis.ptx` — once a `<section>` contains `<subsection>`s, every subsequent block must also be a subdivision.

- [ ] **5.5** Convert `parameter-analysis-bifurcation` and `parameter-analysis-why-it-matters` to `<subsection>`, keeping their `label`s.

---

## Phase 6 — `<var>` is WeBWorK-only ✅ DONE

**`c5-if/sec-product-rule.ptx` 72 → 0. No `<var>` remains outside a `<webwork>` anywhere in the book.**

```
The <var> element is exclusive to a WeBWorK problem, and so must only appear
within a <webwork> element, not here. It will be ignored.
```

The blank slots really did render as nothing — the exercise asked students to fill in gaps that were not on the page. Under `salve` this file reported it as **54 bare `Invalid content (ChoiceError)`**, which is the "worth re-checking under `jing` for a clearer message" note in the Work order summary: the clearer message was this one.

- [x] **6.1** ~~Replace each `<var width="3px"/>` with `<fillin characters="3"/>`~~ — done, but **size the blank to its answer**, not to a fixed 3. `characters="3"` fits `t` and `P`; it does not fit `-sin(x)`. Now `characters="8"` for the three blanks taking an expression, `characters="3"` for the digit and the two single symbols, with `mode="number"` on the numeric one. (`width="3px"` was never meaningful — three pixels.)
- [x] **6.2** `<fillin>` cannot sit inside `<m>` — it did not have to here: the source already alternated `<m>x^2 \cdot</m> <var/> <m>+</m>`, so the swap was direct.
- [x] **6.3** The grading moved too, which 6.1 alone would not have achieved. **The whole `<setup>` of `<var>`/`<condition>` pairs was also WeBWorK vocabulary**, and the schema's `<setup>` is for JS imports and `<de-object>`s — nothing to do with grading. The real home is `<evaluation>`:

```xml
<statement>
  <p><m>x^2 \cdot</m> <fillin characters="8"/> <m>+</m> <fillin characters="8"/> <m>\cdot \cos x</m></p>
</statement>
<evaluation>
  <evaluate>                                  <!-- one per blank, in statement order -->
    <test correct="yes">
      <strcmp>\s*-\s*sin\s*\(?x\)?\s*</strcmp>   <!-- or <numcmp value="3"/> -->
      <feedback><p>Correct!</p></feedback>
    </test>
    <test><strcmp>.*</strcmp><feedback><p>Incorrect, try again.</p></feedback></test>
  </evaluate>
</evaluation>
```

`c1-classification/sec-order.ptx` was already doing this and validating clean — **read it before writing a fill-in-the-blank by hand.** The conversion is name-for-name: `<var>` → `<evaluate>`, `<condition string=…>` → `<test>` + `<strcmp>`, `<condition number=…>` → `<test>` + `<numcmp value=…>`, `correct="yes"` on the branch whose feedback says "Correct!". Every regex and every word of feedback moves verbatim.

⚠️ The 17 `<line>` wrappers inside that feedback went with it. `<line>` belongs to `<poem>` and `<program>`; a feedback body is a paragraph. This is the same misuse catalogued in the `<line>` item under the R8 section — it turns up wherever someone wanted a line break.

⚠️ **Still worth rendering.** This is the one fix in the sweep so far that changes what a student can actually do on the page, and nothing here has been checked in a built target.

---

## Phase 7 — Figures and side-by-sides

**81 violations**

### 7A. `<figure>` caption ordering (12)

```
element "image" not allowed yet; missing required element "caption"
element "caption" not allowed here; expected the element end-tag
```

The paired errors say the schema wants `<caption>` **before** the panel content in these figures.

- [ ] **7.1** ⚠️ **Verify on one instance first.** Fix a single figure in `c6-qm/sec-slope-fields.ptx`, re-run `pretext validate --dev`, and confirm both errors clear before applying to the other five. If reordering does not clear it, the real cause is the figure/`sidebyside` nesting in 7B and these are cascades.
- [ ] **7.2** Files: `sec-slope-fields.ptx`, `sec-autonomous-equations.ptx` (2 figures), `sec-equilibrium-solutions.ptx`, `sec-classifying-equilibrium-solutions.ptx` (2 figures) — all in `c6-qm/`.

### 7B. `<sidebyside>` structural errors (69)

| Issue | Count | Fix |
|---|---:|---|
| `sidebyside-single-panel` | 43 | Drop the wrapper; move `width`/`margins` onto the panel element, or keep it only if intentional layout control |
| `sidebyside-media` (**ERROR**) | 7 | `<interactive>` / `<video>` / `<audio>` cannot appear in a `<sidebyside>` at any depth — **content goes missing in static builds** |
| `sidebyside-nested` (**ERROR**) | 5 | No conversion can realize nested panels — relocate inner content |
| `attribute "margin"` | 1 | `margin="25%"` → `margins="25% 25%"` in `c6-qm/sec-equilibrium-solutions.ptx` |

- [ ] **7.3** Prioritize the 12 `PTX:ERROR`s — these cause silent content loss in PDF/print. Affected: `c2-solns/sec-visualizing-solns.ptx`, `c5-if/review-first-order-methods.ptx`, `c7-em/sec-euler-method.ptx`, `c9-uc/sec-uc-method.ptx`, `c12-ltp/sec-unit-step-variants.ptx` (3+3), `c13-linsys/sec-qualitative-methods-systems.ptx`.
- [ ] **7.4** For each JSXGraph interactive currently inside a `<sidebyside>`, pull it out to its own block and put any accompanying caption in a `<p>` above or below.
- [ ] **7.5** Confirm each fix in **both** the `web` and `pdf` targets — this is the one class where HTML looks fine and print silently drops content.
- [ ] **7.6** Treat `sidebyside-single-panel` as advisory. Where a single panel is doing real width control, leave it and note the exception; don't chase the warning at the cost of layout.
- [ ] **7.7** ⚠️ **Do not confuse this phase with the blocked class.** Everything in 7B is a *validation-plus advisory* about how a `<sidebyside>` is configured. Separately there are **111 schema errors** where a `<sidebyside>` is in an illegal *position* (inside a `<p>`) or holds an illegal *child* (`<solution>`). Those are an authoring decision, not a layout fix — see "⛔ Blocked on the author" near the top. Fixing 7B will not clear them, and vice versa.

---

## Phase 8 — Text and accessibility polish

**169 violations · mechanical, safe to batch, no structural risk**

### 8A. Unicode → PreTeXt elements (65)

| Character | Count | Replacement |
|---|---:|---|
| `°` U+00B0 | 17 | `<degree/>` |
| `–` U+2013 | 16 | `<ndash/>` |
| `'` `'` U+2018/2019 | 14 | `<lsq/>` / `<rsq/>`, or `<q>`/`<sq>` for quoted text |
| `—` U+2014 | 9 | `<mdash/>` (no surrounding spaces) |
| `×` U+00D7 | 6 | `<times/>`, or `\times` inside `<m>` |
| `"` `"` U+201C/201D | 3 | `<q>…</q>` |

- [ ] **8.1** Batch by character with a scripted pass, but **exclude** `<m>`, `<md>`, `<latex-image>`, `<macros>`, `<program>`, and `<pre>` — replacing a `×` inside LaTeX will break the math.
- [ ] **8.2** Read each em-dash in context: an em-dash marking a sentence pause becomes `<mdash/>`; a range (`3–5`) is `<ndash/>`. Don't swap them.
- [ ] **8.3** Heaviest file by far: `c12-ltp/ltp-model.ptx` (14). Then `c9-uc/exercises-uc.ptx` (5), `aa-bookends/a1-algebra/FNN-function-notation.ptx` (4).

### 8B. Ragged `<tabular>` rows (55)

Rows disagree on total column count once `@colspan` is summed. Rendering is explicitly *unpredictable*.

- [ ] **8.4** For each table, count columns per row against the first row / `<col>` set, and add the missing `<cell/>`s. Empty trailing cells are the usual culprit.
- [ ] **8.5** Add explicit `<col>` elements where the table has a fixed shape — it makes the next regression obvious.
- [ ] **8.6** Files: `c4-sov/exercises-sov.ptx` (15), `c1-classification/exercises-class.ptx` (14), then the remainder.

### 8C. `<shortdescription>` over 125 characters (49)

Screen readers truncate at 125.

- [ ] **8.7** Rewrite each to ≤125 characters; move the detail into a structured `<description>` rather than deleting it.
- [ ] **8.8** Files: `aa-bookends/a1-algebra/M-piecewise-functions.ptx` (9), `P-units-mass-balance.ptx` (6), `c6-qm/sec-classifying-equilibrium-solutions.ptx` (5), `c12-ltp/sec-unit-step-variants.ptx` (5), `c12-ltp/sec-piecewise-functions.ptx` (4).
- [ ] **8.9** These are `PTX:ADVICE` and touch alt text — a good place to pause and ask the author rather than paraphrase mathematical descriptions unsupervised.

### 8D. Stray punctuation after `</mrow>` (8)

```
text not allowed here; expected the element end-tag or element "intertext" or "mrow"
```

A sentence-ending period sits between `</mrow>` and `</md>`.

- [ ] **8.10** Move the period **inside** the final `<mrow>` (`\amp = 7.`) or wrap trailing prose in `<intertext>`.
- [ ] **8.11** Files: `c3-di/exercises-di.ptx` (5), `c1-classification/exercises-class.ptx` (2), `c3-di/sec-di-method.ptx`.

---

## Phase 9 — Close the loop

- [ ] **9.1** Full clean re-run: `pretext validate --dev > logs/main-validation-final.txt 2>&1`
- [ ] **9.2** Confirm `jing` reaches the back matter — no `fatal:` line.
- [ ] **9.3** Triage the **chapters 9–15 backlog** that Phase 0 exposed. Expect the same rule mix; reuse Phases 1–8 in the same order. Files already known to have issues there: `c9-uc/`, `c10-lt/`, `c11-ltm/`, `c12-ltp/`, `c13-linsys/`, `aa-bookends/`.
- [ ] **9.4** Run the repo's own checker: `python processing-tools/validate-source/validate_source.py` — confirms no `label`/`xml:id` collisions were introduced by Phase 5 promotions.
- [ ] **9.5** Build all three targets:
      ```bash
      python -m pretext build -t web
      python -m pretext build -t dev
      python -m pretext build -t pdf
      ```
      WeBWorK/network failures in a restricted environment are expected — diagnose config, don't rewrite source.
- [ ] **9.6** **Spot-check rendering** on one exercise per phase, especially: a multi-task exercise with per-choice feedback (Phase 2), a card-sort (Phase 4), the product-rule fill-ins (Phase 6), and a JSXGraph interactive relocated out of a `sidebyside` (Phase 7) — in PDF as well as web.
- [ ] **9.7** Write `reports/2026-08-validation-sweep.md`: violations closed per rule, files touched, and an explicit **flagged-for-author** list (empty statements, ambiguous feedback placement, `<md>` in card-sort responses, shortdescription rewrites).

---

## Work order summary

Counts below are from the **complete** `--engine salve` run (schema half unless noted).

| Phase | Rule | Msgs | Risk | Notes |
|---|---|---:|---|---|
| 0 | Validator blocked | — | ✅ done | Engine switch, not an encoding fix |
| 1 | `<p>` wrappers | 2,065 | Low | `<evaluation>` errors do **not** clear free — they are Phase 2C child order |
| 2 | Exercise skeleton | 178 | Medium | R2×9, R3R4×169; judgment on feedback placement |
| 3 | Lists need `<p>` | 155 | ✅ done | 146 sites, 24 files. Skip every parent whose model refs `List` directly, and skip lists whose items carry a `<solution>` — those are the `<exercises>` class |
| 4 | Runestone models | 59 | **High** | R6×6, R7×53 — smaller than the old 171 |
| 5 | Division nesting | 59 | ✅ 5A done | **R8×40 → 0**, all 16 exercises files; R12×16 remains. 5A's "promote to a sibling `<section>`" is superseded — see the R8 decision |
| 6 | `<var>` → `<fillin>` | 12 | ✅ done | Was a live render bug. The `<setup>` grading had to move to `<evaluation>` too — 6.1 alone would not have fixed it |
| 7 | Figures / sidebyside | 128 | Medium | **Grew** from 81; 12 still cause silent content loss |
| 8 | Text & a11y | 169 | Low | Unchanged; the validation-plus half was always accurate |
| 9 | Re-validate | — | — | — |

Phase 1 still dominates at **71%** of the schema half, so the ordering logic holds: it changes what Phases 2 and 4 see. Phase 4 shrank (the old 171 was largely `jing` cascade noise); Phase 7 grew once the back matter became visible. `R99-misc` is 239 and unbudgeted — 54 of those are bare `Invalid content (ChoiceError)` from `salve`, which are worth re-checking under `jing` on a per-file basis for a clearer message.

### Top 10 files — ranked by `edit_sites`, not message count

Baseline figures, kept for the rule mix. **For what to pick up next, use the Queue table near the top of this document** — the first three rows here are done.

| File | Sites | Msgs | Dominant rules |
|---|---:|---:|---|
| `c10-lt/sec-lt-properties.ptx` ✅ | 46 | 121 | R1×114, R11×5 |
| `c9-uc/sec-selecting-the-particular-soln.ptx` ✅ | 40 | 124 | R1×103, R3R4×17, R7×4 |
| `c11-ltm/sec-leaving-the-laplace-domain.ptx` | 33 | 91 | R1×69, R99×17 |
| `aa-bookends/a1-algebra/L-pfd.ptx` | 28 | 57 | R1×48, R5×2 |
| `c9-uc/sec-uc-method.ptx` ✅ | 23 | 109 | R1×93, R7×12 |
| `c11-ltm/sec-laplace-transform-method.ptx` | 22 | 56 | R1×35, R7×2 |
| `c1-classification/exercises-class.ptx` | 22 | 22 | mixed; no cascade inflation |
| `c10-lt/exercises-lt.ptx` | 21 | 102 | R1×100, R8×2 |
| `aa-bookends/a1-algebra/P-units-mass-balance.ptx` | 21 | 48 | R1, R15×6 |
| `c12-ltp/ltp-model.ptx` | 21 | 29 | R13×14, R5 |
| `aa-bookends/a1-algebra/CSQ-completing-sq.ptx` ✅ | 11 | 190 | R1×172, 2C×6 — the cascade-inflation case |

Full matrix in `validation-inventory.csv`. Sort by `edit_sites`; `total` overstates files whose errors are one structural defect echoing down a sibling list.
