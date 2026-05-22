# Task Instructions: Standalone Review Sections

Use this file when the user asks for review material, prerequisite refreshers, algebra/calculus review, or short preparatory sections connected to differential equations.

## Core goal

Write polished, standalone review sections that remind students of prerequisite ideas while making clear why those ideas matter for differential equations.

A review section should not feel like generic algebra or calculus copied into the book. It should connect the review topic to future differential equations work.

## Common review topics

Past requested review material includes:

- point-slope form of a line;
- slope-intercept form;
- functions and variables;
- algebraic manipulation;
- factoring and characteristic equations;
- exponential functions;
- logarithms;
- integration techniques;
- partial fractions;
- complex numbers;
- systems of equations;
- matrices and linear systems;
- interpreting graphs.

## Output format

Use PreTeXt XML unless explicitly asked for another format.

A typical review subsection should have:

```xml
<subsection xml:id="review-topic-name">
    <title>Readable Title</title>

    <p>
        ...
    </p>
</subsection>
```

Preserve the user’s existing `xml:id` when revising.

## Style

Use a professional, approachable tone. Keep the prose concise but complete. The section should be brief enough to serve as a refresher, not a full standalone course module.

Prefer:

- short motivation;
- one or two key formulas;
- a compact explanation;
- a brief illustrative example;
- a sentence connecting the idea to differential equations.

Avoid:

- long generic derivations;
- excessive edge cases;
- formalism that will not be used soon;
- review examples disconnected from differential equations.

## Differential equations relevance

Every review section should answer the implicit question: “Why are we reviewing this here?”

Examples of good connections:

- Point-slope form connects to tangent lines, slope fields, Euler’s method, and linearization.
- Factoring connects to characteristic equations.
- Partial fractions connect to inverse Laplace transforms.
- Exponentials connect to growth/decay models and homogeneous linear equations.
- Systems of equations connect to coefficient matching and linear systems.

## Handling formulas

Use `<m>` for inline formulas and `<me>` for displayed formulas.

Avoid LaTeX text artifacts like `\mbox{\bf ...}` unless they are truly necessary. Prefer prose outside the math environment.

Instead of:

```xml
<me>\mbox{\bf slope-intercept form of a line: } y = mx+b.</me>
```

Prefer:

```xml
<p>
    The slope-intercept form of a line is
    <me>y = mx+b.</me>
</p>
```

## Examples

Examples should be concise and explanatory. For review sections, one short example is often enough.

A good example should:

- demonstrate the reviewed idea;
- avoid unnecessary algebraic clutter;
- use numbers that keep the focus on the concept;
- include a sentence interpreting the result.

## Checkpoints in review sections

Include a checkpoint only if it reinforces a likely student misconception or important conceptual distinction.

Good checkpoint types:

- identify which formula is most useful;
- explain the meaning of a parameter;
- match algebraic form to interpretation;
- choose the next step in a method.

Avoid making review checkpoints into routine drill unless the user explicitly asks for practice problems.

## Quality checklist

Before finalizing, check that the section:

- is understandable without the original source;
- has a clear reason to appear in a differential equations book;
- uses PreTeXt math tags correctly;
- avoids unnecessary verbosity;
- removes lingering LaTeX formatting artifacts;
- gives students a usable memory hook or interpretation.
