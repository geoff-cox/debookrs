# UPL_ModeA_Audit_GrammarSpelling.md
Audit Mode: A (Mechanical - grammar/spelling)
Version: 1.1
Last updated: 2026-01-04

(Use with: UPL_Universal_Ruleset.md + PST_RunHeader)

## Goal
Identify basic spelling/grammar fixes that are safe candidates for manual find/replace by the author.

## Mode-specific rules (deltas)
- Recommendations only. Do not rewrite PTX.
- Never change anything inside PTX markup `<...>` or math `<m>/<me>/<md>`.
- Scan **all Zone Types**. Do not skip exercises/checkpoints/solutions; instead label Zone + Risk.
- If the change could affect meaning/assessment integrity, mark **ATTN** and do not push the replacement as "Recommended".

## Output (ONLY)
Produce one file:
- `[FILENAME]_audit-A.md`

File structure:
- Universal Header
- `## Recommended`
- `## ATTN`
- `## Optional (NOT applied)` (rare)

Entry format (one bullet per issue):
- **Locator:** ...
- **Zone:** ...
- **Risk:** ...
- **Find → Replace:** `...` → `...`
- **Note:** (short; required for ATTN)
