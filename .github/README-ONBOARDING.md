# AI Onboarding Pack for *Exploring Differential Equations*

This folder contains modular instruction files for future AI assistance on the differential equations textbook project. It is designed for work on *Exploring Differential Equations*, a student-centered PreTeXt/Runestone textbook for an introductory differential equations course.

## Recommended instruction structure

Use a **small core file plus separate task-specific skill files**.

A single giant instruction file is easy to paste once, but it is less accurate in practice because unrelated rules compete for attention. Modular skill files work better because the active instructions can be matched to the current task. The best structure is:

1. Load `AGENT-CORE-DE-TEXTBOOK.md` for all work on the textbook.
2. Add exactly the relevant task file or files for the current request.
3. Keep project-specific preferences in the core file and task procedures in the skill files.
4. Avoid loading every file unless the task genuinely spans writing, assessment, narration, tooling, and interactivity.

## Best file format for future AI assistance

For instruction files, **Markdown (`.md`) is the best default**.

Markdown is more accurate and efficient for AI use because it is readable, stable in GitHub, easy to paste into ChatGPT/Copilot/project instructions, and supports headings, checklists, examples, and priority rules without adding XML syntax noise.

Use these formats as follows:

| Format | Best use | Avoid when |
|---|---|---|
| `.md` | Agent instructions, runbooks, checklists, onboarding docs | The output itself must be valid PreTeXt |
| `.ptx` / PreTeXt XML | Textbook source, sections, exercises, examples, objectives | General AI instructions or policy documents |
| `.json` / `.yaml` | Machine-readable configuration or schemas | Nuanced writing/style instructions |
| `.txt` | Plain narration/TTS output | Structured instructions with headings and examples |
| `.py` / `.js` | Working tooling scripts | Human-readable task instructions |

## Files in this pack

- `AGENT-CORE-DE-TEXTBOOK.md`: baseline identity, tone, PreTeXt conventions, and quality bar.
- `TASK-SECTION-REVISION.md`: revising or drafting textbook sections.
- `TASK-REVIEW-SECTIONS.md`: writing standalone review sections for algebra/calculus/preparation topics.
- `TASK-READING-CHECKPOINTS.md`: designing reading prep, checkpoint, multiple-choice, multiple-select, and placement questions.
- `TASK-TTS-NARRATION.md`: converting PreTeXt source into natural narration for audio.
- `TASK-EXERCISES-ODP-ASSESSMENT.md`: exercises, solutions, ODP/PBG question generation, deduplication, and assessment alignment.
- `TASK-PRETEXT-TOOLING.md`: scripts, repo refactoring, XML workflows, and build/debugging support.
- `TASK-INTERACTIVES-RUNESTONE.md`: JSXGraph, Euler method tools, Runestone, MicroParsons, hparsons, and slideshow/interactivity work.
- `TASK-PROJECT-DOCS-REPORTS.md`: README, licensing, reports, talks, tutorials, and public-facing project documents.

## How to use this pack

For most textbook prose revisions, provide:

```text
Use AGENT-CORE-DE-TEXTBOOK.md and TASK-SECTION-REVISION.md.
```

For review section work, provide:

```text
Use AGENT-CORE-DE-TEXTBOOK.md and TASK-REVIEW-SECTIONS.md.
```

For audio narration, provide:

```text
Use AGENT-CORE-DE-TEXTBOOK.md and TASK-TTS-NARRATION.md.
```

For question design, provide:

```text
Use AGENT-CORE-DE-TEXTBOOK.md and TASK-READING-CHECKPOINTS.md.
```

For scripts, refactoring, or build/debugging:

```text
Use AGENT-CORE-DE-TEXTBOOK.md and TASK-PRETEXT-TOOLING.md.
```

## Operating principle

The assistant should produce immediately useful work, not generic advice. When the user provides source, revise it directly. When the task is broad, make the best grounded pass possible and identify only the most important unresolved decisions.
