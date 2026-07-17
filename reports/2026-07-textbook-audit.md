# Textbook Audit — Triaged Improvement Plan (July 2026)

**Book:** *Exploring Differential Equations* (PreTeXt source in `source/`)
**Scope:** Full audit of all 15 chapters (c0–c14), appendices/bookends, glossary, the complete assessment layer, and repo/build infrastructure.
**Method:** Nine parallel deep reviews (chapter groups, exercises, bookends, technical health), each verifying worked mathematics, pedagogy, consistency, writing, markup, and assessment coverage. Every recommendation below was triaged by the author and is grouped by the assigned priority. A detailed errata table of confirmed mathematical errors appears in Appendix A.

**Overall health:** The prose is clean and student-friendly, glossary/index initiatives are near-complete, and cross-reference integrity is excellent (zero broken xrefs). The dominant problems are (1) a cluster of confirmed math errors in student-facing answer keys and interactive widgets, (2) large amounts of finished content disabled in the build (all 15 modeling sections; Chapter 14 is an empty stub), (3) uneven assessment support across chapters, and (4) zero accessibility text on all images and interactives.

---

## High priority

### H1. Fix the confirmed math errors in worked examples, answer keys, and interactive widgets
Roughly 25 verified errors exist where the *printed answer or the widget's "correct" option is wrong* — the errors most likely to erode student trust because the feedback itself contradicts correct work. Highlights: the chapter 13 complex-eigenvalue worked example whose displayed solution does not satisfy its own system (`c13-linsys/sec-solving-linear-systems.ptx:269`); the Euler's-method answer `y(1) ≈ 0.125` whose own solution correctly derives `−0.625` (`c7-em/exercises-em.ptx`); Laplace piecewise inversions missing a `1/4` factor and using `1/27` where `1/9` is correct (`c12-ltp/exercises-ltp.ptx`); a slope-field quiz asserting slope `−2` at an equilibrium point where the slope is `0` (`c6-qm/exercises-qm.ptx:44`); and clickable/drag-to-order widgets in chapter 4 whose "correct" paths teach wrong algebra. Complete list with file/line references: **Appendix A**.

### H2. Rebuild the partial-fractions appendix section (`aa-bookends/a1-algebra/L-pfd.ptx`)
This section is systematically broken, not typo-level: decompositions over irreducible quadratics use constant numerators instead of `(As + B)`, producing visible contradictions ("24 = 5", "5 = 3") that are waved past; final answers contain unsolved symbols (`C` left in an answer); eight `<answer>` blocks are placeholder "all-ones" values that are simply wrong; improper rational functions skip the required polynomial division. Partial fractions is load-bearing for the Laplace unit, so this appendix teaches students the wrong method at exactly the moment they depend on it. Recommended approach: regenerate every decomposition with a CAS (SymPy `apart`) and rewrite the worked solutions around verified values.

### H3. Create an automated CAS verification pass for all worked mathematics
Nearly every confirmed error in Appendix A is mechanically detectable: re-derive each worked answer with SymPy and diff against the printed `<answer>`/`<solution>`. Build it as a script in `processing-tools/` (extract `<me>`/`<md>` math from solution blocks, verify DE solutions by substitution, verify PFD/transform tables symbolically) and keep it as a repeatable regression gate for future edits. This also covers residual risk in chapters 8–12, whose audit passes were the lightest (see Caveats).

### H4. Fix repo/book metadata
Add a root-level `LICENSE` (GitHub currently cannot auto-detect the license; only `source/LICENSE.md` — a badge link — and `source/LICENSE.txt` exist); fix `README.md`'s placeholder attribution URL `github.com/yourusername/book-repo` and the mismatched repository link text; reconcile the README tagline with the actual subtitle and the author name with `front-matter.ptx` ("Geoffrey W. Cox, Ph.D."); normalize the CC BY-SA license headers (present in `a1`/`a2` files, absent from every `a3-quickref` file, `glossary.ptx`, `front-matter.ptx`, `book-info.ptx`); supply the `<biography>` that `author-biographies length="short"` expects, or drop the setting.

### H5. Finish the chapter 13 eigenvalue story
The chapter teaches the eigenvalue method but never has students practice it: all three end-of-chapter Problems solve systems by Laplace transforms, and zero exercises compute eigenvalues/eigenvectors, build general solutions, or classify equilibria. Add a graded eigenvalue problem set; deliver the promised eigenvalue↔geometry connection ("Later, we'll connect these patterns to the algebra" — never fulfilled) with a trace-determinant interactive; merge the two near-duplicate phase-plane subsections in `sec-qualitative-methods-systems.ptx`; reconcile section ordering with the prose (the solving section claims visualization was already covered when it comes later); and add a short bridge explaining eigenvalues vs. Laplace as two roads to the same solution.

### H6. Add existence & uniqueness treatment
Absent from the entire book. Natural homes: the IVP section in chapter 2 (why does an order-n equation need n conditions? does a solution exist/is it unique?) and the slope-fields section in chapter 6, which currently asserts "From any starting point, a unique curve threads through" — false without hypotheses (e.g., `y' = y^{1/3}`). Even an informal statement of Picard's theorem plus one non-uniqueness example closes the gap.

### H7. Add a "lost solutions" callout to Separation of Variables
Dividing by `g(y)` silently discards equilibrium solutions (e.g., `y' = y²` loses `y = 0`) — the single most common SOV pitfall, and the chapter's own drills use exactly such equations without ever raising it. One boxed aside with a worked example, dovetailing with the existing ±/absolute-value discussion, closes the biggest conceptual gap in the first-order unit.

### H8. Backfill missing/empty answers and solutions; fix statement/solution mismatches
Quantified gaps: chapter 3's "Rewrite and Solve" trio has no answers; chapter 4's Level-1 set (~8 exercises) has none — including `dy/dx = (y−x)/(y+x)`, which is not actually separable; chapter 12 has ~33% solution coverage; chapter 13 has empty `<solution>`/`<answer>` blocks (brine), absent ones (sugar-tank, arms-race, membrane, Euler), one exercise whose solution solves a completely different problem (`exercises-linsys.ptx:1114`), one whose solution invents initial conditions the statement never gives (`:1037`), and an impossible forward-step IVP (IC at `t = 2`, target `y(0.2)`; `:909`). Bring every static Problem up to chapter 5's standard (full solution for every problem).

### H9. Add cumulative mixed-method reviews + a "which method?" selector
No cumulative or mixed review exists anywhere. Add short mixed sets at the natural seams — after ch. 5 (direct integration vs. SOV vs. integrating factor), after ch. 9 (constant-coefficient equations), after ch. 12 (Laplace) — centered on method *selection*, the skill exams actually test. Pair with an interactive flowchart (first-order? → linear? → separable? → which tool), reusing the existing `if-drill-which-method` exercise as its companion.

### H10. De-duplicate exercise pools and re-tier difficulty
Byte-identical exercises (including identical WeBWorK `pg-code`) are duplicated between chapters 2 and 3 — and the ch. 3 copies are second-order equations students cannot yet solve, out of scope for direct integration. Several reading checkpoints reappear verbatim as end-of-chapter exercises (chs. 0–1), a chapter 2 IVP verification is duplicated within one exercise set, ~11 consecutive items share the title "Select the Inverse" (c11), and one c11 solution contains its entire derivation printed twice. Deduplicate, restore chapter-appropriate scope, and reserve the Problems tier for genuinely new difficulty.

### H11. Book-wide notation standardization
Pick and enforce conventions for: integration constants (`c` vs `C` vs `C₁/c₁` — currently mixed within single chapters); `P(x)/Q(x)` vs `p/q` in the integrating-factor unit; `y_p` (the c8 quick-ref defines the particular solution as `y_h`); state vectors and matrices (`Y`, `\vec{Y}`, `\vec{X}`, `bmatrix` vs `pmatrix` all coexist in c13); a t-vs-x policy per topic with an explicit "we deliberately vary variable names" callout (several confirmed errors in Appendix A are variable-mismatch slips); "semi-stable" without "(node)" (which collides with the 2-D node and saddle-node bifurcation in the same chapter); phase-line dot conventions (the classifying section's stated "solid dots" rule is contradicted by its own worked example's open circles); and "segments" rather than "arrows" for slope-field marks.

### H12. Markup/structure standardization pass
Define one per-section skeleton (Listen aside → motivation → definition → worked examples → ≥1 reading checkpoint) and one set of markup patterns, then sweep: checkpoint emoji conventions (ch. 1's checkpoints lack the 📖❓ cue others carry); `exercises-if.ptx` is a `<subsection>` where its siblings are `<section>`s; two True/False encodings coexist inside single exercise blocks; at least six multi-answer items lack `multiple-correct="yes"` (rendering as single-select radios despite "select all" wording); `<corollary>` wraps interactives in c6/c7/c13 (semantic misuse); `\phantom{vertical space hack - Is there a better way?}` layout hacks recur book-wide; `label` vs `xml:id` conventions drift; duplicate id `if-method` (section label + exploration xml:id) in c5.

### H13. Copy-edit sweep (~80 catalogued issues)
Recurring misspellings: "substract" (×3), "indeterminant" (×5), "throughtout", "particualr", "Undermined Coefficients" (a quick-ref *title*), "bcomes" and "origianl" in `main.ptx` chapter intros, "systemof", "a a few", stray "ss" rendering inside five underbrace labels, the salt-tank rate "(rate in to the tank) − (rate in to the tank)" (second should be "out of"), mashed answer strings (`...e^{-2t}y(t) = ...` concatenated in one `<m>`), an unbalanced parenthesis in `A-limits.ptx`, and the register outlier "it ain't pretty". All instances are catalogued with file/line in the audit working notes.

### H14. Finish the quick-reference appendices
Four quick-ref worksheets are empty or stubs (`c5-qref-qm`, `c6-qref-nm`, `c12-qref-linsys1` are title-only; `c11-qref-ltp` contains the literal text "PIECEWISE AND UNIT STEP STUFF" and lacks the `<worksheet>` wrapper its siblings have); three quick-refs are all titled "Laplace Transforms" (should match their chapters); `c8-qref-uc` has two entries with empty bodies; `c9-qref-lt.ptx` (~820 lines) hand-duplicates the transform table ~15 times with mis-copied "R₁" titles on the R₂–R₅ tables and a `Y(t)/Z(t)` header that should be `Y(s)/Z(s)`; `c7-qref-lhcc` contains duplicated paragraphs and chapter-style narration that doesn't belong in a reference.

### H15. Populate or drop the empty back-matter apparatus
The "List of Symbols" appendix renders empty — `<notation-list/>` exists but zero `<notation>` elements exist anywhere in the source; "Formula Sheets" is a bare title; all three `<solutions>` divisions are commented out (no answer key ships even though exercises carry answers); no colophon in the production back matter (only in the orphaned dev variant); no bibliography. Either populate each (add `<notation>` at first use of each symbol; un-comment `<solutions>` once H1/H8 land) or remove the empty shells.

### H16. Add alt-text/descriptions to all images and interactives
Coverage today is zero: 63 of 63 `<image>` elements and 9 of 9 `<interactive>` elements lack any `@alt` or `<description>` (the only 8 `<description>`s in the book are WeBWorK problem descriptions). For a published, student-facing textbook this is the largest accessibility (WCAG/508) gap. Worst-offender files: `c12-ltp/sec-unit-step-variants.ptx` (8), `a1-algebra/M-piecewise-functions.ptx` (10), `c6-qm/sec-classifying-equilibrium-solutions.ptx` (6). Add a CI lint so regressions can't ship. Two "Need to Add" placeholder strings currently sit where descriptions belong (`sec-euler-method.ptx:228`, `sec-qualitative-methods-systems.ptx:154,174`).

### H17. Complete reading checkpoints in uncovered sections
38 of 62 sections have reading checkpoints, but coverage is inverted: the *early* chapters are barest — all of ch. 0 (4 sections), ch. 1 (3), ch. 4 (4), plus `sec-verifying-solns` (the core verify-by-substitution skill, zero checkpoints) and `sec-euler-method` (the chapter's central section, one checkpoint). Bring these up to the density chs. 8–12 already achieve.

---

## Medium priority

### M1. Sweep build-integrity defects (Rec 4)
Fix the duplicate `xml:id="lt-L1"` in `c10-lt/sec-common-transforms.ptx:137,147` (the one hard validity bug — invalid XML, breaks `pretext validate`); remove the literal `-COMMENTED-` string rendering in the ch. 8 outcomes (`main.ptx:480`, also in `main-dev.ptx`); resolve the 11 `provisional` xrefs that render as visible placeholders (c14 stub, `sec-solving-linear-systems`, both c6 section intros marked "IN PROGRESS", back-matter, six a1-algebra stubs); replace `label="NEEDS-A-LABEL"` (c14); strip "(WebWorK Here For Mathquill?)" from three student-facing titles in `c5-if/sec-finding-the-integrating-factor.ptx`; delete the commented "PISS" credit in `front-matter.ptx` and rename the `di-piss-medium` exercise label; fix the xref whose display text says "L15" while pointing at rule L11 (`exercises-ltp.ptx:1499`); fill the empty captions and titles.

### M2. Prune orphaned assets and generated artifacts (Rec 7)
22 of 38 mp3s are unreachable (all of `audio/readings/c1/`, most of `c2/` — old naming scheme); `assets/tikz/` (14 files), `geogebra/`, `doenet/`, `iframes/`, `js-slates/`, `data/` are referenced by zero source files; ~72 of 86 `assets/figures/` files are unreferenced from PreTeXt (confirm which are JS-loaded before deleting). Stop committing generated TTS artifacts (`processing-tools/tts/processed-ptx-to-txt/*.txt`, `README.docx`); add `*.db` to `.gitignore` so `book-db-sync` output can't be committed accidentally.

### M3. Build out Chapter 14 — Nonlinear Systems (Rec 9)
The chapter is ~0% instructionally complete: its only section is a stub (`NEEDS-A-LABEL` + a FUTURE-WORK xref), with no exercises or checkpoints, while the chapter intro/outcomes promise equilibria, stability, bifurcations, and chaos. The finished, mathematically verified SIR project (`nlinsys-model.ptx` — nullclines, R₀, herd immunity, final-size relation all check out) is not wired into the build at all. Wire it in, then add the core pedagogy: equilibria, Jacobian/linearization, nullclines, stability, one worked predator-prey example, checkpoints, and an exercise set. (Interim option: pull the chapter from the build until ready rather than shipping the stub.)

### M4. Re-enable the 15 "Modeling with…" sections as a Modeling & Projects strand (Rec 10)
Every chapter has a complete, polished `*-model.ptx` (Newton cooling, spring-mass, free-fall with drag, projectile, logistic growth + yeast lab, RC circuits, harvesting/MSY, nonlinear pendulum, predator-prey, SIR) — and every one is commented out of `main.ptx`, leaving the shipped book with essentially no applied/lab/project/writing work. Enable them as an end-of-chapter "Modeling & Projects" section per chapter and extract 1–2 gradable sub-questions from each into the active exercise sets. Prerequisites: fix the predator-prey linearization in `linsys-model.ptx` (wrong Jacobian — correct is `[[0,−0.6],[0.25,0]]`, a center — and a wrong characteristic equation), note that explicit Euler spirals outward on the conservative pendulum (the file currently promises "closed loops"), and seed the homogeneous/nonhomogeneous vocabulary `class-model.ptx` uses before it's defined.

### M5. Add Euler error analysis and an Improved Euler/Heun preview (Rec 14)
No error analysis exists (local truncation `O(h²)`, global `O(h)`) — accuracy is only "smaller h → better" — and the text's own promise that "the same predict, step, repeat pattern forms the backbone of many other techniques" is never fulfilled. A short "How good is Euler?" subsection using the already-computed `y' = t + y` data (show the error halving as h halves) plus one worked Euler-vs-Heun-vs-exact comparison closes both gaps cheaply.

### M6. Add or preview other standard first-order methods (Rec 15)
Exact equations, Bernoulli, and substitution methods are absent book-wide. At minimum, add a half-page "other tools you may meet" pointer at the end of the first-order unit (mirroring the book's existing "Preview of a Future Method" device) so students coming from a standard syllabus know where these fit; full sections optional.

### M7. Add variation of parameters and spring-mass applications to the second-order unit (Rec 16)
Undetermined coefficients is the only nonhomogeneous method taught (variation of parameters appears once — in an appendix aside referencing a method the book never teaches), and the second-order unit has no mechanical-vibrations applications, the canonical payoff of LHCC/LNCC theory. The commented-out `class-model.ptx` spring-mass content (see M4) is a ready starting point.

### M8. Expand dynamic/randomized exercises (Rec 22)
The book's own parameterized-question machinery (`<setup seed>`/`<de-random>` auto-generating fresh variants) is used in only one exercise chapter (c3, 9 instances) out of fourteen. Parsons/ordering problems exist only in c4; WeBWorK auto-checking only in c2/c3/c4/c8. Convert the high-volume static drills — Laplace forward/inverse transforms (c10/c11), characteristic roots (c8), UC form selection (c9), Euler steps (c7/c13), classification (c1) — and add Parsons versions of every method's step sequence.

### M9. Add applied problems to every method chapter's exercise set (Rec 24)
Beyond the disabled modeling sections, active exercise sets are almost purely symbolic: chapter 4's "Applications" group contains exactly one problem (Newton cooling). Add 2–4 contextual problems per method chapter (mixing tanks, RC circuits, cooling, decay, dosing) including "set up the DE" tasks, so the applied strand is assessed rather than only narrated.

### M10. Complete audio narration for chapters 7–14 (Rec 32)
Intro "Listen" asides stop at chapter 6 (7/15 chapters ≈ 47%; verified against `assets/audio/readings/` — all referenced files exist, none missing). Section-level narration exists only in parts of ch. 0 and one ch. 2 section. Extend intro audio to chs. 7–14 with the existing `processing-tools/tts` pipeline, then roll section narration outward.

---

## Low priority

### L1. Add validation to PR CI (Rec 5)
CI currently only checks that the HTML build succeeds (and doesn't run on direct pushes to main at all). Add `pretext validate`, a duplicate-id check, and a placeholder/TODO lint (fail on `WORK-IN-PROGRESS`, `FUTURE-WORK`, `-COMMENTED-`, `NEEDS-A-LABEL`, "Need to Add") so the M1-class defects can't recur.

### L2. Archive/remove stranded master-file variants (Rec 6)
`main-parts.ptx` references 12 nonexistent directories and cannot build; `abandoned-content.ptx` is referenced nowhere (salvage its clean "Grouping Terms in a Derivative" example into ch. 5 first); `back-matter-dev.ptx` has diverged from production (colophon/Solutions/Notation differ); `a4-audio-links.ptx` is orphaned and mislabeled (contains checkpoints, not audio). Move to an archive folder or delete; document `main-dev.ptx` as disposable to stop drift.

### L3. Add convolution and Dirac delta/impulse to the Laplace unit (Rec 17)
Standard-course topics currently absent; natural fit after the piecewise chapter (impulse forcing completes the on/off-switch story).

### L4. Per-chapter assessment floor (Rec 19)
Adopt a floor of all three tiers (💡 Quiz / 🏋️ Drills / ✍🏻 Problems) per chapter: ch. 0 lacks Problems, chs. 6/13 lack Drills, and ch. 7's Conceptual Quiz is commented out, leaving it the only fully static exercise set (0 interactive elements).

### L5. Decide the print/PDF strategy (Rec 31)
The PDF target is commented out in `project.ptx`; nothing tests the LaTeX path. 19 `component="web"` elements (audio asides, the sole Riccati closed-form solution, the LT slideshow) have zero `component="print"` fallbacks, so a naive PDF build would silently drop them. Either wire up and CI-test the PDF target with print fallbacks, or declare the book web-only and remove the dormant `<latex>` config.

### L6. Glossary flashcards export (Rec 36)
Auto-generate a spaced-repetition deck (Anki/CSV) from the 134-entry `glossary.ptx` as a downloadable study asset; the glossary's structure makes this a small script.

---

## Documented for future consideration (triaged "maybe")

- **Systematic hints rollout** — the entire book contains 17 `<hint>` elements; 8 of 14 exercise files have zero. (Rec 20)
- **Embedded executable Sage/Python cells + Jupyter companion labs** for Euler's method, slope fields, and eigenvalues. (Rec 34)

---

## Appendix A — Confirmed mathematical errata (file/line)

| # | Location | Error | Correction |
|---|----------|-------|------------|
| 1 | `c13-linsys/sec-solving-linear-systems.ptx:269–273` | Complex-eigenvalue worked example: printed `y(t)` does not satisfy the system `x'=2x−5y, y'=5x+2y` | `y(t) = e^{2t}(C₁ sin 5t − C₂ cos 5t)` |
| 2 | `c7-em/exercises-em.ptx` (em-problem-01 answer) | `y(1) ≈ 0.125` contradicts its own solution | `y(1) ≈ −0.625` |
| 3 | `c6-qm/exercises-qm.ptx:44,59` (qm-cq-mc-1) | Claims slope `−2` at `(5,−1)` for `y'=y²−1`; `f(−1)=0` (equilibrium) | Change equation (e.g. `y'=y−1`) or the point/slope |
| 4 | `c6-qm/exercises-qm.ptx:390` | DE written `dy/dx = y²−y⁴ = 0` | Drop trailing `= 0` |
| 5 | `c4-sov/exercises-sov.ptx:~1308–1333` (sov-warm-ups-click-2 f–g) | Clickable "correct" options: `u=(−y²/2 + y + c)⁻¹` | `u=(−y²/2 − y + c)⁻¹` (and `+1/5` variant), matching the exercise's own solution |
| 6 | `c4-sov/sec-sov-implicit-solns.ptx:331–350` (cyu-3) | Drag-order blocks integrate `∫(2+3t²)dt = 2t²+t³+c` | `2t + t³ + c` (propagate through subsequent blocks) |
| 7 | `c4-sov/sec-showing-separability.ptx:351` | `w' = e^Q e^x` variable mismatch | `Q' = e^Q e^x` |
| 8 | `c5-if/exercises-if.ptx:868` (if-problem-ivp-1) | Domain `x > 1` excludes the IC at `x = 1` | Likely `x > 0` |
| 9 | `c2-solns/exercises-solns.ptx:781–784` (solns-drills-01) | "Correct" match `3y''−2y+\frac4x y=12` is not satisfied by `y=3x+x²` | `−2y` → `−2y'` |
| 10 | `c2-solns/exercises-solns.ptx:1793–1802` (ivp-05, y₃) | `y²` term subtracted; displayed numerator `−2` claimed `= 0` | Add `y²` term; numerator is `0` |
| 11 | `c2-solns/exercises-solns.ptx:1768–1782` (ivp-05, y₂) | Same sign error; value at `x=0` given as `−1/c` | Correct numerator `(−2x−c−x²+1)`; value `(1−c)/c²` |
| 12 | `c1-classification/sec-linearity.ptx:88–90` | `t\frac{dP}{dx} + \sin(P) = t²` mixes `t` and `x` | Use one independent variable |
| 13 | `c8-lhcc/sec-second-order-lhcc-eqns.ptx:252–253` | `13² − 4(5)(−2)` given as `√201` | `√209` |
| 14 | `c12-ltp/exercises-ltp.ptx:1277,1288,1296` | `ℒ⁻¹{1/(s(s²+4))} = 1 − cos 2t` | `¼(1 − cos 2t)` (the narrative section does this correctly) |
| 15 | `c12-ltp/exercises-ltp.ptx:1506–1517` | `f(t) = 1/9 − (1/27)cos 3t` | `f(t) = 1/9 − (1/9)cos 3t` |
| 16 | `c12-ltp/sec-laplace-piecewise-method.ptx:331` | Proof writes `F(s)=3/(s(s²+2))` | `3/(s²(s+2))` (the work matches the latter) |
| 17 | `c12-ltp/exercises-ltp.ptx:1499` | xref display text "L15" for rule `lt-L11` | Align rule numbering |
| 18 | `c13-linsys/exercises-linsys.ptx:909–922` | IC at `t=2`, asks for `y(0.2)` with forward `h=0.1` | Target likely `y(2.2)` |
| 19 | `c13-linsys/exercises-linsys.ptx:1114–1179` | Solution solves a different problem than the statement | Rewrite statement or solution |
| 20 | `c13-linsys/exercises-linsys.ptx:1037–1112` | Solution uses ICs `u(0)=1, v(0)=2` never stated | Add ICs to statement |
| 21 | `c13-linsys/exercises-linsys.ptx:1002` | Garbled chained equation `y''+x=12x'+2yt=\cos t` | Two separate equations (per the solution) |
| 22 | `c13-linsys/exercises-linsys.ptx:623` | `e^{2t}` should be `e^{−2t}` (coefficient 0; benign) | Fix exponent |
| 23 | `c13-linsys/sec-introduction-to-systems.ptx:150` | Figure plots `y(0)=1.3`; example uses `1.2` | Align figure with example |
| 24 | `a1-algebra/CSQ-completing-sq.ptx:33,42` | Summary box: `(x − b/2)²` for `x²+bx+c` | `(x + b/2)²` (intro and examples are correct) |
| 25 | `a1-algebra/PEQ-polynomial-equations.ptx:268 vs 414–433` | Poses `x⁴−32=0`, solves `x⁴−25=0` | Align statement and solution |
| 26 | `a1-algebra/L-pfd.ptx` (multiple) | Wrong PFD forms, contradictions, placeholder answers | Full rebuild — see H2 |
| 27 | `a2-calculus/G-improper-integrals.ptx:102` | Leftover `1/3` from previous problem | `1/s` |
| 28 | `a3-quickref/c8-qref-uc.ptx:56–59` | Particular solution denoted `y_h` | `y_p` |
| 29 | `a3-quickref/c9-qref-lt.ptx:140` | Header `Y(t), Z(t)` | `Y(s), Z(s)` |
| 30 | `c11-ltm/exercises-ltm.ptx:~1942–2051` | Entire PFD derivation printed twice in one solution | Delete duplicate |
| 31 | `c7-em/exercises-em.ptx` (em-problem-03) | Part cross-references wrong ((b)/(c) mix-ups) | Renumber references |
| 32 | `c13-linsys/exercises-linsys.ptx:359,474,641` | `x(t)`/`y(t)` answers concatenated in one `<m>` with no separator | Split/format |
| 33 | `c13-linsys/linsys-model.ptx:71–113` *(commented out)* | Predator-prey linearization: wrong Jacobian and characteristic equation | Jacobian `[[0,−0.6],[0.25,0]]` (a center); relevant if M4 proceeds |
| 34 | `c6-qm/sec-slope-fields.ptx:27` | "a unique curve threads through" asserted without hypotheses | Soften or add E&U caveat (see H6) |

---

## Caveats

- Two of the nine audit passes (chapters 8–9 and 10–12) were truncated near completion by an external limit. Their headline findings were manually re-verified in the source (errata 13–17 above were confirmed directly), but chapters 8–12's remaining narrative solutions received a lighter verification pass than the rest of the book. H3 (the CAS verification script) is the systematic backstop for this residual risk.
- Broken-xref and duplicate-id findings are from static analysis of the `main.ptx` include set; a `pretext validate` run (see L1) is the authoritative confirmation.
- One triaged recommendation was discarded per the author's decision and does not appear in this plan.
