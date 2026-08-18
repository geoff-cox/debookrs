# Differential Equations Textbook Audit & TTS Pipeline Guide

Version 1.1 | Last updated: 2026-01-04

## Purpose

This guide defines a stable, repeatable process for auditing PreTeXt (PTX) source files and, when needed, rendering Text-to-Speech (TTS) narration scripts. The objective is to minimize drift and friction while keeping the author in full control of all textbook changes (manual accept/reject in GitHub).

## Core design principles

* One constitution: a single Universal Ruleset that is authoritative for all runs.
* Mode files contain only mode-specific deltas (no repeated rule copies).
* PTX is always uploaded (never pasted) to avoid truncation and formatting errors.
* Audits produce recommendations only; render passes produce derived outputs only.
* Everything is labeled for triage (Zone Type + Risk), not pre-filtered by �good/bad zones.�

## File layers (what is uploaded vs pasted)
To keep runs fast, we separate stable reference files from per-run inputs.

### Upload once (Project/Lab recommended)
* UPL_Universal_Ruleset.md
* UPL_Universal_Header.md
* UPL_ModeA_Audit_GrammarSpelling.md
* UPL_ModeB_Audit_Tags.md
* UPL_ModeC_Audit_Style.md
* UPL_ModeD_Audit_TTS_Readiness.md
* UPL_Render_R1_TTS.md
* UPL_StyleLog.md (optional)
* This guide (UPL_DiffEq_Audit_Guide.docx)

### Upload every run
* PTX source file for the run (always uploaded).

### Paste every run
* PST_RunHeader_Template.md (filled in)
* One mode selection line (e.g., "Run Audit Mode A only.")
* Style Log snippet (optional; only if relevant)

## Naming conventions (optional but recommended)
Use prefixes to recognize file role at a glance:
* UPL_  = reference/constitution file (uploaded once)
* PST_  = paste template (open and paste into chat)
* PTX_  = textbook source file (uploaded each run)

## Shared vocabulary
### Zone Type (content classification)
* Narrative / Exposition
* Example
* Checkpoint
* Exercise
* Solution
* Other

### Risk level (automation safety)
* Safe: plain prose in eligible text region; no nearby math/markup complexity.
* Caution: mixed content or wording where small changes could affect intent.
* Manual-only: inside/adjacent to math or dense markup; not safe for find/replace.

## Audit modes and outputs
All audit modes are recommendations only (no PTX edits).
* Mode A: Mechanical grammar/spelling candidates
* Output: [FILENAME]_audit-A.md
* Mode B: PTX tag/markup integrity risks
* Output: [FILENAME]_audit-B.md
* Mode C: Small style suggestions in eligible prose only
* Output: [FILENAME]_audit-C.md
* Mode D: TTS readiness preflight flags (no scripts)
* Output: [FILENAME]_audit-D-tts.md

## Render passes and outputs
Render passes produce derived outputs only (no PTX).
* Render R1 (TTS scripts):
* [FILENAME]_tts-main.txt
* [FILENAME]_tts-exercises.txt
* [FILENAME]_tts-solutions.txt
* [FILENAME]_tts-notes.md

### Baseline run options
Choose a baseline that matches your time and goals:
* Baseline 1 (fast): Run Mode A on every PTX file.
* Baseline 2 (thorough): Run Mode A then B then C on every PTX file; run D only for audio-near chapters.
* Baseline 3 (audio pipeline): Run Mode D then Render R1 for the target PTX files.

## Per-file run checklist (copy this into your brain)
1. Upload the PTX file for this run.
2. Paste the filled PST_RunHeader_Template.md.
3. Paste the one-line instruction selecting Mode A/B/C/D (or Render R1).
4. Save/download the produced output file(s).
5. Repeat for the next PTX file.

## Drift control rules
* Universal Ruleset is authoritative; do not duplicate rules across mode files.
* Mode files describe only deltas: goal, eligibility, limits, and exact outputs.
* Outputs must follow the shared reporting skeleton so the author can triage quickly.
* If uncertain, label ATTN and stop short of deciding.

## Appendix: Included files in this release
* UPL_Universal_Ruleset.md
* UPL_Universal_Header.md
* UPL_Workflow.md
* UPL_ModeA_Audit_GrammarSpelling.md
* UPL_ModeB_Audit_Tags.md
* UPL_ModeC_Audit_Style.md
* UPL_ModeD_Audit_TTS_Readiness.md
* UPL_Render_R1_TTS.md
* UPL_StyleLog.md
* PST_RunHeader_Template.md
* PST_Prompt_ModeA.md
* PST_Prompt_ModeB.md
* PST_Prompt_ModeC.md
* PST_Prompt_ModeD.md
* PST_Prompt_Render_R1_TTS.md
