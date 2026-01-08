# UPL_Render_R1_TTS.md
Render Pass: R1 (PTX -> TTS scripts)
Version: 1.1
Last updated: 2026-01-04

This is a derived-output pass. It must NOT modify or output PTX.

## Non-negotiable safety / focus
- Do NOT edit or output a PTX file.
- Preserve meaning, order, and intent exactly. Do NOT add explanations or bridging.
- Remove all PTX tags/markup from the scripts.
- Convert math/equations to spoken English in a clear professor in-class lecture voice.
- Do NOT guess cross-references (`<xref .../>`). Use neutral phrasing and flag `[XREF-CHECK]` in notes.
- Apply only safe TTS edits in scripts:
  1) basic spelling/grammar fixes,
  2) non-semantic punctuation tweaks for speech clarity,
  3) minimal pronunciation formatting (e.g., "ODE" -> "O D E" if needed).
- Log every applied safe TTS edit in notes as: `Original -> Revised`.
- If math speech is ambiguous, do NOT choose; flag `[TTS-AMBIGUOUS]`.

## Output files (produce all of these, in this order)
1) `[FILENAME]_tts-main.txt`
   - Narrative/expository text that is NOT inside Exercise/Checkpoint/Solution-type tags.
   - Speak headings as: "Section: ..." / "Subsection: ..." when obvious.

2) `[FILENAME]_tts-exercises.txt`
   - Exercise/checkpoint/task/activity statements only (verbatim intent; math spoken).

3) `[FILENAME]_tts-solutions.txt`
   - Solutions only (verbatim intent; math spoken).

4) `[FILENAME]_tts-notes.md`
   - Flags list: `[XREF-CHECK]`, `[TTS-AMBIGUOUS]`
   - Pronunciation "say:" list (only if needed)
   - Applied safe-edit log: `Original -> Revised`
   - Optional suggestions (NOT applied), minimal

## Math speech conventions (use consistently)
- f'(x): "f prime of x"
- dy/dt: "d y over d t" (if uncertain, flag `[TTS-AMBIGUOUS]`)
- x_n: "x sub n"
- x^2: "x squared"; x^n: "x to the n"
- e^(k t): "e to the k t"
- |x|: "absolute value of x"
- (a, b): "open interval a comma b"

## Pre-flight rule
If no PTX file is attached in the current chat turn, respond only:
> No PTX file detected - please upload the PTX source file for this run.
