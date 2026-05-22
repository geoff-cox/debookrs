# Task Instructions: Drafting and Revising Textbook Sections

Use this file when the user asks to draft, revise, tighten, reorganize, or polish a section of the differential equations textbook.

## Core goal

Produce a polished, student-facing PreTeXt section that improves clarity, flow, mathematical accuracy, and instructional value while preserving the user’s intended content and structure unless a restructure is clearly beneficial.

## Typical inputs

The user may provide:

- a full `<section>`, `<subsection>`, or `<subsubsection>`;
- a partial draft;
- a chapter file;
- a request to ignore examples, exercises, images, solutions, tasks, or asides;
- a conceptual goal for a new section;
- prior section context that the revision should align with.

## Default output

Return revised PreTeXt XML in a code block.

When the user asks for a full rewrite, provide a complete replacement block. When they ask for targeted cleanup, provide only the relevant replacement portion unless a larger rewrite is clearly needed.

## Revision procedure

1. Identify the instructional purpose of the section.
2. Remove or merge redundant paragraphs.
3. Improve the opening so it motivates the section and previews what students will learn.
4. Keep the narrative short, focused, and student-facing.
5. Add transitions where the section jumps too quickly between ideas.
6. Make definitions precise but not overburdened.
7. Check mathematical statements for accuracy.
8. Make examples brief unless the method is multi-step or conceptually delicate.
9. Preserve existing identifiers unless renaming is requested.
10. End with a useful conceptual summary, transition, or checkpoint when appropriate.

## Style expectations

Prefer:

```xml
<p>
    We have already seen that a differential equation connects a function to one or more of
    its derivatives. In this section, we look more carefully at the language used to describe
    those equations, so that we can compare different types of equations more efficiently.
</p>
```

Avoid:

```xml
<p>
    This section will cover terminology. The terminology is important and should be learned.
</p>
```

The revised version should explain why the terminology matters.

## Section introductions

A strong introduction should:

- connect to prior material;
- identify the problem or need motivating the section;
- preview the main idea without dumping definitions;
- be concise.

Do not begin every section with “In this section...” unless it is the most natural option.

## Definitions

Definitions should be precise and readable. Introduce formal language only after a motivating sentence when possible.

For example:

```xml
<p>
    The highest derivative that appears in a differential equation tells us its <term>order</term>.
    This gives a quick way to distinguish equations that may require very different solution
    strategies.
</p>
```

## Worked examples

Use a structured, labeled-step format for complex or multi-step methods, such as:

- undetermined coefficients;
- Laplace transform method;
- piecewise forcing functions;
- systems methods;
- long coefficient matching examples.

For simpler examples, use a more natural prose flow and avoid over-formatting.

## Redundancy control

If the same explanation appears in multiple nearby sections, suggest a restructure. The preferred approach is:

- keep the earliest occurrence as the main conceptual explanation;
- later sections should reference or build on it, not repeat it;
- use brief reminders rather than full re-explanations.

This is especially important in the Laplace transform chapters, where definition-level material and method-level material can easily overlap.

## Mathematical checking

Flag statements that are:

- false or too broad;
- true only under additional assumptions;
- likely to mislead students;
- inconsistent with terminology used elsewhere in the book.

When fixing such statements, make the correction directly in the revised text and mention it briefly afterward if needed.

## Things to avoid

Do not:

- replace a student-facing explanation with a terse reference-manual style definition;
- add long technical digressions unless the user asks for depth;
- introduce advanced terminology without defining it;
- change IDs, labels, or file organization unnecessarily;
- add exercises or examples when the user explicitly says to ignore them;
- output only advice when the user asked for revised source.
