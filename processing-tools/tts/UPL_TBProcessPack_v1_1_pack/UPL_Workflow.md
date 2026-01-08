# UPL_Workflow.md
Version: 1.1
Last updated: 2026-01-04

## Goal
A fast, repeatable workflow that:
- minimizes drift,
- minimizes copy/paste burden,
- keeps the author (your son) in full control via manual accept/reject in GitHub.

## What is always uploaded
- PTX source file for the run (always upload; never paste)
- Constitution files (uploaded once per Project/Lab):
  - UPL_Universal_Ruleset.md
  - UPL_Universal_Header.md
  - UPL_ModeA_Audit_GrammarSpelling.md
  - UPL_ModeB_Audit_Tags.md
  - UPL_ModeC_Audit_Style.md
  - UPL_ModeD_Audit_TTS_Readiness.md
  - UPL_Render_R1_TTS.md
  - UPL_StyleLog.md (optional)
  - UPL_DiffEq_Audit_Guide.docx

## What is pasted each run
- PST_RunHeader_Template.md (filled in)
- One Mode selection line (e.g., "Run Audit Mode A only.")
- Nothing else.

## Baseline run options
Pick one baseline that matches your objective:

### Baseline 1: Mechanical only (fastest)
- Run **Mode A** on every PTX file.

### Baseline 2: Full audit suite (most thorough)
- Run **Mode A**, then **Mode B**, then **Mode C** on every PTX file.
- Run **Mode D** only on chapters you plan to render for audio soon.

### Baseline 3: Audio pipeline (when you need it)
- Run **Mode D** (TTS readiness), then **Render R1** (TTS scripts) for the target files.

## Per-file run checklist (repeat for each PTX file)
1. Upload the PTX file for this run.
2. Paste the filled Run Header.
3. Add a one-liner: "Run Audit Mode X only. Follow Universal."
4. Review the returned output file(s).
5. Move on to the next PTX file.

## Drift control
- Universal is the single source of truth.
- Mode files contain only mode-specific deltas.
- Keep outputs strictly limited to the specified file(s).
