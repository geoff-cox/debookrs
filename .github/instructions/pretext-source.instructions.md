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