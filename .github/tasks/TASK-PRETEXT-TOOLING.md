# Task Instructions: PreTeXt Tooling, Scripts, Refactoring, and Debugging

Use this file when the user asks for Python scripts, JavaScript utilities, PreTeXt build/debugging help, XML refactoring, file renaming, repository cleanup, or workflow automation.

## Core goal

Provide safe, concrete, testable tooling support for a PreTeXt textbook repository.

The user prefers practical scripts, staged refactors, clear edge-case handling, and robust validation over vague advice.

## Repository context

The differential equations textbook project commonly uses:

- `project.ptx` as the project manifest;
- `source/` for modular PreTeXt XML source;
- `publication/` for publication/build configuration;
- `assets/` for supporting media;
- `processing-tools/` for scripts and helper tools;
- PreTeXt CLI for builds;
- Runestone output where relevant;
- Python, JavaScript, CSS/SCSS, Markdown, and XML.

## Script style

For Python scripts:

- use `argparse`;
- include clear command-line usage;
- support dry-run mode for destructive operations;
- validate inputs before modifying files;
- print a summary of planned changes;
- fail safely on duplicate target filenames;
- use `pathlib`;
- handle encodings explicitly, usually UTF-8;
- keep functions small and named by responsibility.

For refactoring scripts, prefer:

- scan first;
- report matches;
- validate rename map;
- apply changes only after conflicts are ruled out;
- include a post-change validation pass.

## User workflow preferences

The user is comfortable backing up files manually, so undo support is not always required. Still, destructive scripts should warn clearly and support dry-run mode.

Prefer small, testable steps and patch-level guidance.

For code edits, provide:

- filename;
- what to change;
- why it matters;
- how to test it.

## XML and PreTeXt handling

When working with XML:

- preserve indentation when possible;
- avoid unnecessary rewrites of the whole file;
- avoid changing IDs unless requested;
- be careful with namespaces and includes;
- do not assume every `.ptx` file is a complete standalone XML document;
- explain when regex is unsafe and an XML parser is preferable.

For PreTeXt merges and includes:

- distinguish between source fragments and full XML trees;
- preserve parent-file indentation when possible;
- validate the merged output;
- warn if XInclude support depends on a specific parser/library.

## Refactoring naming conventions

When the user asks about renaming chapter folders or IDs, treat this as a cross-file refactor.

A safe refactor plan should include:

1. build a rename map;
2. detect collisions;
3. update references across all relevant files;
4. rename folders and files;
5. validate IDs and references;
6. run or suggest a PreTeXt build.

Do not recommend large manual find/replace for a multi-chapter refactor.

## Debugging style

When given an error message:

1. identify the likely cause;
2. explain it briefly;
3. give the minimal fix;
4. include verification commands;
5. mention only relevant alternatives.

For example, for a missing Cairo dependency in Codespaces, focus on the system packages needed for `pycairo` rather than giving a generic Python packaging tutorial.

## Git and GitHub

For Git workflows:

- recommend safe sequencing: status, pull/rebase, branch, commit, test;
- explain how to avoid conflicts when possible;
- give exact commands when useful;
- include VS Code-friendly steps when appropriate.

## Quality checklist

Before finalizing tooling advice or code, check that:

- commands are concrete;
- destructive steps are gated or dry-run capable;
- paths are configurable;
- edge cases are handled;
- the testing procedure is clear;
- the advice fits a PreTeXt repository rather than a generic web project.
