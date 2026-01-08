# UPL_Universal_Ruleset.md
Version: 1.1 --- 
Last updated: 2026-01-04

## Purpose
This is the single source of truth for:
- non-negotiable constraints,
- workflow order (what to do first, second, third),
- shared vocabulary (Zone Type, Risk),
- shared reporting format (so outputs are consistent across modes).

This ruleset applies to **all audit modes (A–D)** and **all render passes (R1)** unless a mode explicitly narrows scope further.

## Non-negotiable constraints (always)
1. **No direct edits to PTX files.** Audits produce recommendations only.
2. **Do not change meaning.** Do not alter mathematical meaning or content.
3. **Do not alter pedagogy.** Do not change tasks, solutions, answer choices, assessment intent, or instructional logic.
4. **Do not change PTX structure.** No changes to tag layout, nesting, IDs, attributes, or markup structure.
5. **Do not edit inside markup or math.**
   - Do not change anything inside PTX tags: `<...>`
   - Do not change anything inside math: `<m>...</m>`, `<me>...</me>`, `<md>...</md>`
6. **If uncertain, do not decide.** Mark it **ATTN** with a brief reason.

## Zone Type (content classification)
Use **Zone Type** as a label to help the author triage. We do **not** skip zones.
- Narrative / Exposition
- Example
- Checkpoint
- Exercise
- Solution
- Other (caption/table/figure/listing/etc.)

## Risk level (automation safety)
Risk is independent of Zone Type.
- **Safe**: plain prose in an eligible text region (typically inside `<p>...</p>`) with no nearby math/markup complexity.
- **Caution**: near mixed content (xref, emphasized terms, inline tags), or wording where a small change could affect intent.
- **Manual-only**: inside or adjacent to math blocks, dense markup, or anything that might break PTX/meaning if mass-replaced.

## Location discipline (how to cite where you found something)
Prefer real line numbers if your editor provides them. Otherwise use:
- nearest tag path (e.g., `chapter > section > subsection > exercise xml:id` if visible),
- plus a short unique excerpt (8–20 words).

## Reporting format (shared skeleton)
All audit outputs should follow the same skeleton so the author can scan quickly.

Each entry should be one bullet with these fields (order is fixed):
- **Locator:** …
- **Zone:** …
- **Risk:** Safe / Caution / Manual-only
- **Find → Replace:** `...` → `...`
- **Note:** (optional; required for ATTN; keep short)

Use these sections (even if empty):
- `## Recommended`
- `## ATTN`
- `## Optional (NOT applied)` (rare; keep minimal)

## Workflow checklist (every run)
1. Confirm a **PTX file is uploaded** for this run.
2. Read the **Run Header** (chapter/file/mode/date/notes).
3. Apply this Universal Ruleset.
4. Apply the selected **Mode** (A/B/C/D) or **Render Pass** (R1).
5. Produce **only** the specified output file(s).
6. Do a drift-check: confirm you did not add extra commentary or overreach scope.

## Pre-flight rule
If no PTX file is attached in the current chat turn, respond only:
> No PTX file detected - please upload the PTX source file for this run.
