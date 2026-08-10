# PreTeXt Schema Validation Sweep — Build Checklist

**Repo:** `debookrs` (*Exploring Differential Equations*)
**Source log:** `logs/main-validation.txt` (PreTeXt 2.48.1, `pretext-dev.rng`)
**Scope:** 1,449 parsed messages across 82 source files
**Companion data:** `validation-inventory.csv` — per-file × per-rule counts, sorted by severity

---

## Read this first: the log is incomplete

`jing` **aborted** partway through the assembled source:

```
fatal: exception "org.apache.xerces.impl.io.MalformedByteSequenceException" thrown:
       Invalid byte 2 of 4-byte UTF-8 sequence.
    file: c7-em/exercises-em.ptx
    path: /pretext/book/chapter[8]/section[6]/exercises/exercise[2]/solution/note/title
    line: 24884
    text: <title>Alternative Derivation Approach</title>
```

Consequences, and they matter for how you plan this work:

- **Schema coverage stops at chapter 8.** All 1,213 `jing` errors fall in chapters 1–8. Chapters 9–15, the appendices, glossary, and back matter were **never schema-checked**.
- The `validation-plus` stylesheet *did* reach chapters 9–15 and found 236 issues there and elsewhere, so those chapters are not clean — they are simply un-inspected by the schema half.
- **1,450 is a floor, not a ceiling.** Chapters 1–8 average ~152 schema errors each. If chapters 9–15 are comparable, expect the true total to land somewhere near 2,000–2,300 once the sweep can run to completion.

So: fix the encoding fault first, re-run, and re-plan against the full log. Don't burn effort estimating from the current numbers.

---

## Guardrails for every phase

Carry these into each phase; they come from `.github/copilot-instructions.md` and `.github/instructions/pretext-source.instructions.md`.

- **Never** change `xml:id`, `label`, `ref`, or `component` values. `label` and `xml:id` share one namespace checked by `processing-tools/validate-source/validate_source.py`.
- **No wholesale reformatting.** Local, reviewable edits that preserve surrounding indentation. A diff that touches 400 lines to fix 3 violations is a failed edit.
- **Do not "fix" the renamed elements.** `<corollary>` = 🎮 Interactive, `<theorem>` = 🧠 Derivation, `<lemma>` = 👀 Quick Review, `<identity>` = 🗺️ Summary, `<exploration>` = ✍🏻 Method, `<assemblage>` = ✳️ callout. These are deliberate (`book-info.ptx`).
- **Preserve emoji cues in titles** (🤔💭, 📖❓, ↩️☝, 👀, 🎧). They are 4-byte UTF-8 — handle with care given Phase 0.
- **Never invent content.** If a `<statement>` is empty or a `<feedback>` has no text, flag it in the report; do not write pedagogy to satisfy a schema.
- **Math conventions hold:** `\amp =` not `&=`, one `<mrow>` per line, `bmatrix` not `pmatrix`.
- **Commit per phase per chapter**, not per file and not one giant commit. Message format: `fix(validate): R1 p-wrappers in c4-sov`.

---

## Phase 0 — Unblock the validator ⛔ BLOCKER

- [ ] **0.1** Locate the malformed bytes:
      ```bash
      # Whole-tree scan for invalid UTF-8
      for f in $(find source -name '*.ptx'); do
        iconv -f UTF-8 -t UTF-8 "$f" >/dev/null 2>&1 || echo "BAD: $f"
      done
      # Byte-level look at the known offender
      grep -n "Alternative Derivation Approach" source/c7-em/exercises-em.ptx
      sed -n '<line>p' source/c7-em/exercises-em.ptx | hexdump -C | head -40
      ```
- [ ] **0.2** Identify the corrupted sequence. A truncated 4-byte sequence almost always means a **mangled emoji** — likely a title cue that lost a byte in an editor round-trip. Compare against an intact instance of the same emoji elsewhere in the repo.
- [ ] **0.3** Repair by retyping the character, not by deleting it, unless the surrounding text shows the emoji was never intended.
- [ ] **0.4** Confirm every `.ptx` file is clean UTF-8 and has no BOM:
      ```bash
      find source -name '*.ptx' -exec file {} \; | grep -v 'UTF-8 Unicode text$' | grep -v 'ASCII text$'
      ```
- [ ] **0.5** Re-run `pretext validate --dev`, save as `logs/main-validation-02.txt`, and confirm `jing` now reaches chapter 15 / the back matter.
- [ ] **0.6** **Re-triage.** Regenerate the per-file inventory against the new log. Chapters 9–15 will add a new work queue that this checklist has no counts for.

> **Do not start Phase 1 until 0.5 passes.** Every later phase is verified by re-running the validator; if it still aborts at chapter 8 you have no feedback loop past that point.

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

### Why the count is inflated (and that's good news)

Three separate error signatures collapse into this one fix:

| Signature | Count | Relationship |
|---|---:|---|
| `element "statement" incomplete` | 278 | direct |
| `text not allowed here` (block expected) | 184 | direct |
| `element "m" not allowed here` | 190 | direct |
| `element "exercise" incomplete; missing required element "evaluation"` | 66 | **cascade** |

That last row is not a separate defect. When a `<statement>` contains bare inline content, `jing` falls through to the Runestone *fill-in-the-blank* branch of the `<exercise>` content model, which requires `<evaluation>`. 46 of the 66 sit on exercises that already have a flagged `<statement>`. **Add the `<p>` and the "missing evaluation" error disappears.** Do not add `<evaluation>` elements.

### Checklist

- [ ] **1.1** Start with `c5-if/exercises-if.ptx` (153) — highest density, most uniform pattern. Use it to calibrate the edit shape.
- [ ] **1.2** Then `c4-sov/exercises-sov.ptx` (157), `c5-if/review-first-order-methods.ptx` (81), `c6-qm/exercises-qm.ptx` (52), `c7-em/sec-what-is-a-numerical-solution.ptx` (40), `c7-em/sec-euler-intro-thinking-in-steps.ptx` (36), `c5-if/sec-if-method.ptx` (32), `c2-solns/sec-visualizing-solns.ptx` (32).
- [ ] **1.3** Work the remaining files from `validation-inventory.csv`, column `R1-p-wrapper`, descending.
- [ ] **1.4** Highest concentration is inside `<choice>/<statement>` (~340 hits). A `<choice>` needs `<statement><p>…</p></statement>` — inline content directly under `<choice>` is also invalid.
- [ ] **1.5** Re-validate after each file. Expect the file's error count to drop by more than its `R1` count because of the cascade.

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
- [ ] **2.6** Inside a `<task>`, use `<hint>` / `<solution>` — **not** `<answer>`.
- [ ] **2.7** Two exercises are flagged `element "exercise" not allowed yet; missing required element "introduction"` — a task-bearing `<exercise>` needs an `<introduction>` before its first `<task>`. Files: `c0-whats-a-de/exercises-wad.ptx`, `c4-sov/exercises-sov.ptx`.

### 2C. Sibling ordering (19)

```
element "answer" not allowed here; expected the element end-tag or element "solution"
```

Order is fixed: **`<statement>` → `<hint>` → `<answer>` → `<solution>`**. An `<answer>` after a `<solution>` is a schema error even though both are legal children.

- [ ] **2.8** Reorder in place. Do not merge or rewrite the content.
- [ ] **2.9** Files: `c2-solns/exercises-solns.ptx` (4), `c6-qm/exercises-qm.ptx` (4), `c3-di/exercises-di.ptx` (3).

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

- [ ] **4.1** Remove the `<sidebyside>` wrapper from inside `<areas>`. For side-by-side *layout* of clickable terms, use `<tabular>` or a single `<p>` with the terms inline.
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
- [ ] **4.7** Files: `c2-solns/exercises-solns.ptx` (33), `c5-if/sec-product-rule.ptx` (17), `c5-if/review-first-order-methods.ptx` (7).
- [ ] **4.8** One `element "blocks" not allowed here; expected element "cardsort" or "matching"` in `c4-sov/sec-sov-method.ptx` — a `<blocks>` element outside its required parent. Determine the intended interaction type before editing.

---

## Phase 5 — Division nesting

**21 violations**

### 5A. `<exercises>` cannot nest inside `<subsection>` (19)

Matches the existing repo convention: *a chapter-level exercises file is a `<section>`, not a `<subsection>`.*

- [ ] **5.1** Promote each nested `<exercises>` to a sibling `<section>`, **preserving its `label`** (`class-cq`, `class-drills`, …).
- [ ] **5.2** Verify no `<xref>` breaks: `grep -rn 'ref="class-cq"' source/` for each label before and after.
- [ ] **5.3** Also flagged: `<aside>` as a direct child of `<exercises>` (`c4-sov/exercises-sov.ptx`). An `<exercises>` division takes only `title`, `idx`, `introduction`, `exercise`, `exercisegroup`, `subexercises`, `interactive`, `conclusion`. Move the aside into the `<introduction>`.
- [ ] **5.4** Files: `c5-if/review-first-order-methods.ptx` (3), `c3-di/exercises-di.ptx` (3), `c1-classification/exercises-class.ptx`, `c5-if/exercises-if.ptx`, `c6-qm/exercises-qm.ptx`.

### 5B. `<paragraphs>` after `<subsection>` (2)

`c6-qm/sec-parameter-analysis.ptx` — once a `<section>` contains `<subsection>`s, every subsequent block must also be a subdivision.

- [ ] **5.5** Convert `parameter-analysis-bifurcation` and `parameter-analysis-why-it-matters` to `<subsection>`, keeping their `label`s.

---

## Phase 6 — `<var>` is WeBWorK-only

**18 violations · all in `c5-if/sec-product-rule.ptx`**

```
The <var> element is exclusive to a WeBWorK problem, and so must only appear
within a <webwork> element, not here. It will be ignored.
```

These are blank-slot prompts (`<var width="3px"/>`) inside math, and **they currently render as nothing** — a live student-facing bug, not just a schema complaint.

- [ ] **6.1** Replace each `<var width="3px"/>` with `<fillin characters="3"/>`.
- [ ] **6.2** `<fillin>` cannot sit inside `<m>`. Restructure `<m>x^2 \cdot</m> <fillin characters="3"/> <m>+ \cdots</m>` as alternating inline math and fill-ins, or move the whole prompt into a proper Runestone fill-in exercise with `<evaluation>`.
- [ ] **6.3** Check the rendered output for these two exercises specifically — this file is one where the schema fix and the pedagogy fix are the same edit.

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

| Phase | Rule | Count | Risk | Notes |
|---|---|---:|---|---|
| 0 | UTF-8 fatal | 1 | ⛔ blocker | Unblocks ch. 9–15 |
| 1 | `<p>` wrappers | 769 | Low | Clears 66 cascade errors free |
| 2 | Exercise skeleton | 88 | Medium | Judgment on feedback placement |
| 3 | Lists need `<p>` | 93 | Low | Mostly `*-model.ptx` |
| 4 | Runestone models | 171 | **High** | Restructuring, verify per file |
| 5 | Division nesting | 21 | Medium | Watch xrefs |
| 6 | `<var>` → `<fillin>` | 18 | Medium | Fixes a live render bug |
| 7 | Figures / sidebyside | 81 | Medium | 12 cause silent content loss |
| 8 | Text & a11y | 169 | Low | Batchable, exclude math |
| 9 | Re-validate | — | — | New backlog expected |

Do not reorder. Phase 1 changes what Phases 2 and 4 see, and Phase 0 changes what all of them see.

### Top 10 files by total violations

| File | Total | Dominant rules |
|---|---:|---|
| `c4-sov/exercises-sov.ptx` | 208 | R1×157, R14×15, R3×11, R6×11 |
| `c5-if/exercises-if.ptx` | 161 | R1×153 |
| `c1-classification/exercises-class.ptx` | 99 | R6×26, R1×20, R2×15, R14×14 |
| `c5-if/review-first-order-methods.ptx` | 94 | R1×81, R7×7 |
| `c2-solns/exercises-solns.ptx` | 88 | R6×38, R7×33 |
| `c6-qm/exercises-qm.ptx` | 67 | R1×52, R5×5 |
| `c7-em/sec-what-is-a-numerical-solution.ptx` | 49 | R1×40 |
| `c6-qm/sec-classifying-equilibrium-solutions.ptx` | 46 | R1×28, R15×5 |
| `c5-if/sec-if-method.ptx` | 42 | R1×32, R11×8 |
| `c7-em/sec-euler-intro-thinking-in-steps.ptx` | 42 | R1×36 |

Full matrix in `validation-inventory.csv`.
