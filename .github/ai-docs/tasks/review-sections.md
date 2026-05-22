# Review Sections Task Guide

Use this guide for prerequisite refreshers, algebra/calculus review, or short preparatory sections connected to differential equations.

## Goal

Write polished standalone review sections that remind students of prerequisite ideas while making clear why those ideas matter for differential equations.

A review section should not feel like generic algebra or calculus copied into the book. It should connect the topic to upcoming differential equations work.

## Common topics

Past review topics include point-slope form, slope-intercept form, functions and variables, algebraic manipulation, factoring, characteristic equations, exponentials, logarithms, integration techniques, partial fractions, complex numbers, systems of equations, matrices, and graph interpretation.

## Default output

Use PreTeXt XML unless another format is requested. Preserve existing `xml:id` values when revising.

A typical review subsection has this shape:

```xml
<subsection xml:id="review-topic-name">
    <title>Readable Title</title>

    <p>
        ...
    </p>
</subsection>
```

## Style

Keep the prose concise but complete. A review section should be a refresher, not a full standalone module.

Prefer:

- short motivation;
- one or two key formulas;
- a compact explanation;
- a brief illustrative example;
- a sentence connecting the idea to differential equations.

Avoid long generic derivations, excessive edge cases, unused formalism, and examples disconnected from differential equations.

## Differential equations relevance

Every review section should answer: Why are we reviewing this here?

Examples:

- Point-slope form connects to tangent lines, slope fields, Euler’s method, and linearization.
- Factoring connects to characteristic equations.
- Partial fractions connect to inverse Laplace transforms.
- Exponentials connect to growth/decay models and homogeneous linear equations.
- Systems of equations connect to coefficient matching and linear systems.

## Formula handling

Use `<m>` for inline formulas and `<me>` for displayed formulas. Avoid LaTeX text artifacts such as `\mbox{\bf ...}` when prose outside the math environment is clearer.

Prefer:

```xml
<p>
    The slope-intercept form of a line is
    <me>y = mx+b.</me>
</p>
```

## Checkpoints

Include a checkpoint only when it reinforces a likely misconception or important conceptual distinction. Good checkpoints ask students to identify the useful form, interpret a parameter, match algebraic form to meaning, or choose the next step.

## Quality checks

- The section is understandable without the original source.
- The relevance to differential equations is explicit.
- Math tags are correct.
- LaTeX artifacts have been removed.
- The explanation gives students a usable memory hook or interpretation.