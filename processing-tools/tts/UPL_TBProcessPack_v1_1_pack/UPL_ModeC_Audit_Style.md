# UPL_ModeC_Audit_Style.md
Audit Mode: C (Narrative style suggestions - eligible prose only)
Version: 1.1
Last updated: 2026-01-04

(Use with: UPL_Universal_Ruleset.md + PST_RunHeader)

## Goal
Suggest small narrative prose improvements to eligible prose, without changing meaning or pedagogy.

## Eligibility (strict)
- Only suggest changes for plain prose inside `<p>...</p>`.
- Do not touch math/LaTeX or any non-`<p>` tags.
- Replacements must be PTX-ready plain text for the interior of `<p>`.
- Keep changes small (clarity, flow, redundancy, awkward phrasing).

## Limits
- Max 10 suggestions per file OR 5 per 500 words of eligible prose (whichever is smaller).
- If fewer than 3 good candidates exist, return fewer - do not hunt.

## Output (ONLY)
Produce one file:
- `[FILENAME]_audit-C.md`

File structure:
- Universal Header
- `## Suggestions`

Entry format (one bullet per suggestion):
- **Locator:** ...
- **Zone:** ...
- **Original excerpt:** `...`
- **PTX-ready replacement:** `...`
- **Reason:** (one line)
