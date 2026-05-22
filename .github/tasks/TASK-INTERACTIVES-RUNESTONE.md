# Task Instructions: Interactives, Runestone, JSXGraph, Parsons, and Slideshows

Use this file when the user asks for interactive textbook components, JSXGraph tools, Euler’s method visualizations, Runestone integration, MicroParsons/hparsons work, slideshow tooling, or JavaScript/CSS debugging.

## Core goal

Help build interactive learning tools that clarify differential equations concepts while remaining maintainable inside the PreTeXt/Runestone ecosystem.

The emphasis should be on pedagogy first, implementation second.

## Common interactive work

Past recurring work includes:

- JSXGraph-based Euler’s method tools;
- slope field and solution curve visualizations;
- progressive guessing and feedback;
- Runestone-compatible components;
- horizontal Parsons problems;
- MicroParsons/hparsons integration;
- math-mode handling in Parsons blocks;
- slideshow tools in PreTeXt;
- dark-mode support;
- JSON-based slideshow configuration;
- layout alignment and performance debugging.

## Design principles

An interactive should:

- focus on one conceptual goal;
- reveal structure progressively;
- give feedback that helps students revise their thinking;
- avoid overwhelming the learner with controls;
- make the visual representation match the mathematical idea;
- be robust under dark mode and responsive layouts when relevant.

## Euler’s method interactives

For Euler’s method tools, emphasize:

- initial condition as the starting point;
- slope from the differential equation;
- tangent-line step;
- step size;
- approximate solution points;
- accumulated error;
- contrast between numerical and analytic solutions when available.

Good student prompts ask learners to predict:

- the sign of the next slope;
- whether the approximation increases or decreases;
- how changing step size affects the approximation;
- where accumulated error may appear.

## JSXGraph guidance

For JSXGraph code:

- keep board setup separate from mathematical logic;
- use named functions for slope, step update, and rendering;
- avoid hard-coded magic numbers when they are conceptual parameters;
- reset state cleanly;
- handle invalid user input;
- keep labels readable;
- ensure visual updates are synchronized with internal state.

## Runestone / PreTeXt integration

When integrating with Runestone or PreTeXt:

- preserve generated IDs where possible;
- avoid assumptions that only hold in one build target;
- account for MathJax rendering timing;
- avoid extracting mutable rendered HTML when stable IDs or source data are available;
- test in the target output environment, not only in a standalone HTML file.

## MicroParsons and hparsons

For Parsons work, the user prefers designs that avoid grading based on mutated block HTML.

Preferred direction:

- initialize with an array of block text in correct order;
- preserve stable block indices or IDs;
- grade using block ordering, not fragile text extraction;
- support math mode without depending on rendered MathJax strings;
- separate MicroParsons source changes from hparsons integration changes.

Common files in this work may include:

- `hparsons.js`;
- `BlockFeedback.js`;
- `micro-parsons.ts`;
- `ParsonsInput.ts`;
- `LoggingEvents.ts`;
- style files and type definitions.

## Slideshow tooling

For slideshow tools, support:

- JSON-based configuration;
- optional layout selection, such as horizontal or vertical;
- theme-aware behavior;
- dark-mode detection from a top-level `dark-mode` class;
- image caching;
- dynamic rendering inside PreTeXt;
- performance-conscious event handling.

## Debugging style

When debugging interactive code:

1. identify the conceptual state model;
2. identify the rendering pipeline;
3. isolate whether the bug is state, rendering, layout, timing, or build integration;
4. propose a small patch;
5. give a test case.

Avoid rewriting the whole tool unless the architecture is the source of the bug.

## Quality checklist

Before finalizing, check that:

- the interaction supports the learning goal;
- feedback is pedagogically meaningful;
- state and rendering are separated;
- math display is robust;
- dark mode and layout issues are considered when relevant;
- the patch can be tested locally.
