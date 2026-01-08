# UPL_Render_R1_TTS.md
Render Pass: R1 (PTX -> TTS scripts)
Version: 1.2 (project-consolidated)
Last updated: 2026-01-07

This is a derived-output pass. It must NOT modify or output PTX.

## 0) Purpose and scope
R1 converts preprocessed (ignored tags stripped out) PreTeXt (PTX) source into narration-ready text-to-speech (TTS) scripts.

Preprocessing:
The raw *.ptx files are preprocessed into TTS-friendly PTX/XML-ish text files.
- Adds:
	- Remove attributes label="..." and xml:id="..." (and optionally more)
	- Strip emojis from all text nodes
- Keeps pacing/context tags like <p>, <aside>, sectioning, and preserves <m>/<me>.

Hard constraints:
- Preserve meaning, order, and intent exactly.
- Do NOT add explanations, “bridging” sentences, extra motivation, or new examples.
- Remove ALL PTX tags/markup from the script output (the script is plain text).
- Convert math/equations into spoken English in a clear “professor at the board” lecture voice.
- If something cannot be read unambiguously, flag it (do not guess).

R1 output is intended for audio narration; it is not a PTX rewrite pass.

## 1) Pre-flight rule (file presence)
If no PTX file is attached in the current chat turn, respond only:

> No PTX file detected - please upload the PTX source file for this run.

## 2) What to output
Output a single text file:

1) `[FILENAME]_tts.txt`
   - Include narrative/expository text that is NOT inside Exercise/Checkpoint/Solution-type tags.
   - Speak headings out loud when structurally obvious:
     - “Section: …”
     - “Subsection: …”

Do not output modified PTX for R1.

## 3) What to ignore (recursively)
Recursively ignore and produce no narration output for:
- `<examples>`
- `<audio>`
- `<exercises>`, `<exercise>`, `<task>` (and other exercise/checkpoint/solution-like containers)
- `<figure>`, `<image>`
- `<table>`, `<tabular>`
- `<!-- comments -->`

If an ignored environment contains nested PTX content, ignore it all.

## 4) Structural reading rules
- `<sidebyside>`: read the contained items as a list (e.g., “First… Next… Finally…”), maintaining the original order.
- `<aside>`: treat as a side note in the narration. Preface the content with a short cue such as:
  - “As a side note, …”
  Keep it brief; do not add additional commentary beyond the cue.

## 5) Cross-references and unresolved targets
- Do NOT guess the target of cross-references like `<xref .../>`.
- Use neutral phrasing (e.g., “as referenced earlier”) only if already present in the source.
- Flag unresolved cross-references in notes as:
  - `[XREF-CHECK]`
Do not invent section numbers, titles, or destinations.

## 6) Safe TTS edits (strictly limited)
You may apply ONLY these “safe TTS edits” in the script:
1) Basic spelling/grammar fixes that do not change meaning.
2) Non-semantic punctuation tweaks for speech clarity (pauses, cadence).
3) Minimal pronunciation formatting, including:
   - Rendering abbreviations as spaced letters when needed for TTS (e.g., “ODE” -> “O D E”).
   - Hyphenating coefficient–variable pairs when it improves TTS pacing without altering meaning
     (e.g., “three-y”, “two-x”, “negative-five-x”).

You must log every applied safe TTS edit in a notes section as:
- `Original -> Revised`

Do NOT perform stylistic rewrites, reorganization, or added transitions beyond the above.

## 7) Ambiguity policy (never guess)
If math speech is ambiguous, do NOT choose an interpretation. Flag it in notes as:
- `[TTS-AMBIGUOUS]`

Examples of ambiguity triggers:
- Notation that could be read multiple ways (e.g., unclear operator precedence, overloaded symbols).
- Derivative notation where the independent variable is not clear from context.
- Expressions where grouping is not explicit and multiple readings are plausible.

## 8) Math speech conventions (use consistently)
Convert math into spoken equivalents that are clear and consistent. Use these as defaults:

### 8.1 Derivatives
- `f'(x)`: “f prime of x”
- `dy/dt`: “the derivative of y with respect to t”
- Higher derivatives (when present and unambiguous):
  - `d^2y/dx^2`: “the second derivative of y with respect to x”
If uncertain about the variable or order, flag `[TTS-AMBIGUOUS]`.

### 8.2 Subscripts and superscripts
- `x_n`: “x sub n”
- `u_c(t)`: “u sub c of t” (when this structure appears)
- `x^2`: “x squared”
- `x^3`: “x cubed”
- `x^4`: “x to the 4th”
- `x^n`: “x to the n”

### 8.3 Exponentials and constants
- `e^(k t)`: “e to the k t”
(If parentheses materially affect meaning, reflect grouping in speech: “e to the quantity k t”.)

### 8.4 Absolute value and intervals
- `|x|`: “absolute value of x”
- `(a, b)`: “open interval from a to b”

### 8.5 Grouping / disambiguation cues (when needed)
To avoid ambiguity, you may introduce minimal grouping cues that do not add explanation, such as:
- “the quantity …”
- “open parenthesis … close parenthesis”
Use sparingly and only to preserve correctness.

## 9) Abbreviations and letter-by-letter speech
When an abbreviation should be spoken as letters, render with spaces:
- “O D E”, “P D E”, etc.

(Do not expand acronyms into full phrases unless the source already expands them.)

## 10) Notes and reporting requirements
Alongside the script output, maintain a notes section that includes:
- Every safe TTS edit as `Original -> Revised`.
- Any `[XREF-CHECK]` items.
- Any `[TTS-AMBIGUOUS]` items, with enough local context to locate the issue.

## 11) Non-goals (explicitly forbidden in R1)
- Do NOT output PTX.
- Do NOT “smooth” prose beyond safe edits.
- Do NOT add missing steps, motivations, or commentary.
- Do NOT resolve references by inference.
- Do NOT paraphrase for style; preserve structure and intent.

End of R1 directives.
