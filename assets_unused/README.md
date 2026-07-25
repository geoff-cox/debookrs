# assets_unused

Assets that are **not currently referenced** by the book, but that look
genuinely useful — most map onto pending tasks in
`reports/2026-07-textbook-audit.md`. Parked here rather than deleted.

**Intended action:** draw from this folder as the pending tasks land.

To put something back into the build, move it to the matching path under
`assets/` and add the reference (paths in `.ptx` are relative to `assets/`,
per `publication.ptx`: `<directories external="../assets" …/>`):

```
git mv assets_unused/figures/approx-fig-01.png assets/figures/
# then reference it as  <image source="./figures/approx-fig-01.png"/>
```

Original locations are preserved by the subfolder layout (`figures/…` came from
`assets/figures/…`, and so on).

## Contents (87 files)

### figures/ (58)

| Family | Count | What it is | Likely home |
|---|---|---|---|
| `approx-fig-01/02*` | 4 | Polished Euler approximation-points-vs-true-solution plots, labelled `y₀…y₁₀` | **M5** (Euler error analysis), ch. 7 |
| `reminder.jpg` | 1 | Handwritten derivation of **Improved Euler / Heun's method** (`½(slope1+slope2)`), ending "missing: get it from euler's method" — reads as a note-to-self | **M5** (Improved Euler/Heun preview) |
| `gem-fig-01…12` | 12 | Whiteboard-style worked derivations (e.g. integrating factor: `(e^{x²}y)' = xe^{x²}` → `y = ½ + Ce^{-x²}`) | ch. 5 (integrating factor); **L2** mentions salvaging a "Grouping Terms in a Derivative" example |
| `soln_fig1…6`, `soln_fig_h/j/k/m/n/q/r` | 13 | Unit-step / Heaviside and solution plots | ch. 12 (piecewise + unit step); **H15** solutions divisions |
| `unit-step-*.svg` | 6 | Clean **vector** unit-step plots | ch. 12; **L5** print/PDF fallbacks for `component="web"` interactives |
| `tank_fig1/2/6/8/9` | 5 | Mixing-tank diagrams with flow rates (siblings of `tank_fig3/4/5/7/10`, which are live in the mass-balance appendix) | **M9** (mixing-tank applied problems) |
| `lt-roadmap-step-*`, `lt-4-step-map-step-*`, `lt-roadmap-goal`, `lt-slideshow-thumbnail` | 16 | Laplace-transform roadmap diagrams — progressive-reveal and compact-banner variants of the live `lt-roadmap-slide-*` slideshow images | ch. 10–12 Laplace unit |
| `MnM_soln_plot.png` | 1 | "Continuous approach for M&M Death with Immigration" — the M&M population-decay lab | **M4** (modeling strand), **M9** |
| `VMI-spider.png/.pdf` | 2 | Virginia Military Institute seal | cover/title page; **L5** print strategy |

### tikz/ (14)

Standalone TikZ/LaTeX figure sources. The book's own diagrams are inline
`<latex-image>`, so these were never wired in — but they are **editable vector
source** for exactly the applied topics the audit wants to add:

- `firstlook01-spring-mass`, `secondorder01-hanging-mass`,
  `secondorder05-spring-rubber-band` → **M7** (spring-mass applications)
- `firstlook03-rc-circuit`, `secondorder01-rlc-circuit` → **M4** (RC circuits)
- `linear02-mixing-example`, `linear07-mixing-example`,
  `systems04-mixing-example` → **M9** (mixing tanks)
- `firstlook03-phase-line`, `firstlook03-phase-line-1` → ch. 6 (phase lines)
- `linear08-double-spring-mass-system`, `linear08-saddle-r3` → ch. 13 (systems)
- `nonlinear05-tmd` → **M3** (nonlinear systems)
- `secondorder05-trig-triangle` → trig reference

### data/ (2)

`euler-data-01.csv`, `euler-data-02.csv` — Euler-method output (`x,y` from
`(0, 2)`, step ≈ 1/7). **M5** asks for error analysis built on already-computed
`y' = t + y` data; these may be exactly that, and the generator lives in
`assets/code/data-generator/`.

### doenet/ (2), geogebra/ (1), js-slates/ (1)

Three implementations of the same **polynomial factoring tool**
(`poly-factoring-tool1/2.doenetml`, `polynomial-factoring-tool.ggb`,
`poly-factor-tool.js`). The algebra appendix has
`a1-algebra/PEQ-polynomial-equations.ptx` with no interactive; **M8** asks for
more dynamic exercises.

### audio/readings/ (9)

Recorded narration for sections that currently have **no audio** — directly
usable for **M10** (only 1 of ch. 2's 6 sections is narrated today).

| File | Target section |
|---|---|
| `c2/initial-conditions.mp3`, `c2/initial-conditions-wrap-up.mp3` | `sec-initial-valued-problems.ptx` |
| `c2/satisfying-a-de.mp3`, `c2/satisfying-an-ae.mp3` | `sec-verifying-solns.ptx` (also an **H17** gap) |
| `c2/solution-basics-intro.mp3`, `c2/what-is-a-solution-intro.mp3`, `c2/what-is-a-solution-wrap-up.mp3` | `sec-solns-to-eqns.ptx` / `sec-general-particular-solns.ptx` |
| `c2/solution-types-wrap-up.mp3` | `sec-visualizing-solns.ptx` — the companion to `c2/solution-types.mp3`, which **is live** |
| `c1/reading-an-analogy-1.mp3` | No live counterpart; kept rather than binned with the other c1 takes |
