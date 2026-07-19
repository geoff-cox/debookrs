---
applyTo: "source/**/*.ptx"
---

# PreTeXt Source Instructions

Apply these instructions when editing textbook source files under `source/`.

- Preserve `xml:id`, `label`, `ref`, `component`, and other identifiers unless the task explicitly requests a rename.
- Do not wholesale reformat XML. Make local, reviewable edits that preserve surrounding indentation style.
- Do not edit figures, images, audio, video, or generated interactive blocks unless the task specifically targets them.
- Use `<m>` for inline math and `<me>` or `<md>` for displayed math.
- For `<md>` derivations, put each line in its own `<mrow>` and use `\amp =` rather than `&=`.
- Keep prose student-facing, conversational, and suitable for an introductory differential equations audience.
- Avoid adding advanced terminology unless it is defined in context.
- When revising explanations, improve motivation, transitions, conceptual clarity, and mathematical precision.
- When editing assessments, use concise titles, plausible distractors, and feedback that teaches the concept.
- When editing narration-related text, keep the visible source aligned with any generated TTS narration.

## Notation conventions

Use these conventions in all new or revised content; align outliers when a task touches them.

- **Integration constants**: uppercase `C` (and `C_1, C_2, …` for multiple constants). Within a single exercise, the statement, solution(s), and answer must all use the same letter and case.
- **Standard linear form (ch. 5)**: `y' + P(x)y = Q(x)` with uppercase `P` and `Q` (matching function-of-`t` forms use `P(t)`, `Q(t)`).
- **Particular/homogeneous solutions (chs. 8–9)**: `y_p` is the particular solution, `y_h` the homogeneous solution; the general solution is `y = y_h + y_p`.
- **State vectors and matrices (ch. 13)**: write systems as `\vec{X}' = A\vec{X}` (or `\frac{d\vec{X}}{dt} = A\vec{X}`) with `\vec{X} = \begin{bmatrix} x \\ y \end{bmatrix}`; use `bmatrix` (square brackets) for all matrices and vectors, never `pmatrix`. Reserve capital `Y(s)`, `X(s)` for Laplace transforms.
- **Equilibrium classification (ch. 6)**: `stable (sink)`, `unstable (source)`, and `semi-stable` — do not call a semi-stable equilibrium a "node"; that word is reserved for two-dimensional phase portraits (ch. 13) and the saddle-node bifurcation.
- **Phase lines**: equilibria are solid (filled) dots; regions get up/down arrows.
- **Slope fields**: the marks are "segments" (they have no arrowheads); direction fields for systems (ch. 13) have arrows.
- **Variable names**: variable letters deliberately vary by application (`P` for population, `T` for temperature, etc.); see the "Different Letters, Same Roles" box in ch. 0. Within any one example or exercise, keep dependent/independent variable names internally consistent.

## Markup conventions

- **Section skeleton**: a typical section is 🎧 Listen aside (`component="web"`) → motivating prose → definitions/derivations → worked examples → at least one reading checkpoint. New sections should follow this shape.
- **Checkpoint emoji cues**: a reading-question bundle `<exercise>` title carries `<e component="emoji">🤔💭</e>`; each individual checkpoint `<exercise>`/`<task>` title carries `<e component="emoji">📖❓</e>`; "Recall:" flashback items use `<e component="emoji">↩️☝</e>`; 👀 marks quick-review asides. Every student-facing checkpoint must have a title with one of these cues.
- **True/False items**: encode the claim in `<statement>` with a two-choice True/False `<choices>` block (exactly one `correct="yes"`), and do NOT set `randomize="yes"` on a True/False pair — the choices must render in True, False order. "Select all the TRUE statements" items are instead multi-select items (see next rule).
- **Multi-select items**: any `<choices>` block with two or more `correct="yes"` choices MUST set `multiple-correct="yes"` (the attribute is `multiple-correct` — not `multiple` or `select`), otherwise it renders as single-select radio buttons.
- **Repurposed block elements** (renamed in `book-info.ptx` — do not "fix" these or use them for their conventional meaning): `<corollary>` = 🎮 Interactive wrapper, `<theorem>` = 🧠 Derivation, `<lemma>` = 👀 Quick Review, `<identity>` = 🗺️ Summary, `<exploration>` = ✍🏻 Method, `<assemblage>` = ✳️ callout box.
- **`label` vs `xml:id`**: use `label` on exercises/tasks/choices (interactive runestone-style components) and on chapter/section divisions; use `xml:id` on elements that are `<xref>` targets (figures, examples, assemblages, glossary items). Both share ONE id namespace checked by `processing-tools/validate-source/validate_source.py` — never reuse a string across either attribute.
- **Exercises divisions**: a chapter-level exercises file is a `<section>` (e.g. `<section label="sov-exercises">`), not a `<subsection>`.
- **No layout hacks**: do not add `\phantom{...}` spacer hacks with placeholder prose; if vertical space is unavoidable use a `\vphantom{...}` strut, and prefer structural spacing (separate `<p>`, `<sidebyside>` margins) over math-mode spacers.
