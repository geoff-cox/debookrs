# UPL_ModeD_Audit_TTS_Readiness.md
Audit Mode: D (TTS readiness preflight - NOT a render)
Version: 1.1
Last updated: 2026-01-04

(Use with: UPL_Universal_Ruleset.md + PST_RunHeader)

## Goal
Flag issues that will cause trouble in audio (TTS) later, WITHOUT generating scripts.

## What to flag
- **XREF**: `<xref .../>` or similar references where the spoken output would be unclear.
- **TTS-AMBIGUOUS**: symbols/notation that could be read multiple ways.
- **PRONUNCIATION**: terms/acronyms that need a stable "say:" note.
- **PUNCT / FLOW**: punctuation that will make TTS stumble (only flag; do not rewrite meaning).
- **STRUCTURE**: headings that need spoken cues ("Section:", etc.) if not obvious.

## Mode-specific rules (deltas)
- Recommendations/flags only. Do not generate scripts.
- Do not guess cross-references; flag and defer.
- Do not decide ambiguous math speech; flag and defer.

## Output (ONLY)
Produce one file:
- `[FILENAME]_audit-D-tts.md`

File structure:
- Universal Header
- `## Flags`
- `## Pronunciation (say:) list (optional)`
- `## Notes`

Entry format (one bullet per flag):
- **Locator:** ...
- **Zone:** ...
- **Flag:** XREF-CHECK / TTS-AMBIGUOUS / PRONUNCIATION / PUNCT / STRUCTURE
- **Evidence:** `...`
- **Recommendation:** (short; e.g., "add say: ...", "manual decision needed")
