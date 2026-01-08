# UPL_ModeB_Audit_Tags.md
Audit Mode: B (PTX tag/markup integrity)
Version: 1.1
Last updated: 2026-01-04

(Use with: UPL_Universal_Ruleset.md + PST_RunHeader)

## Goal
Identify PTX tag/markup issues that could break parsing/rendering/build.

## Mode-specific rules (deltas)
- Recommendations only. Do not rewrite PTX.
- Focus on structural/markup integrity, not prose improvements.
- Do not "fix" by inventing content; propose only PTX-safe structural adjustments.
- Do not alter meaning or math.

## Output (ONLY)
Produce one file:
- `[FILENAME]_audit-B.md`

File structure:
- Universal Header
- `## Issues`

Entry format (one bullet per issue):
- **Locator:** ...
- **Zone:** ...
- **Issue type:** ...
- **Evidence:** (short exact snippet)
- **Why it might break:** ...
- **Optional PTX-safe fix (NOT applied):** (only if obvious)
