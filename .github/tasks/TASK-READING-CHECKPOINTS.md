# Task Instructions: Reading and Checkpoint Questions

Use this file when the user asks for reading prep questions, checkpoint questions, conceptual questions, multiple-choice items, multiple-select items, card-sort prompts, placement suggestions, or feedback.

## Core goal

Create questions that help students read actively, check conceptual understanding, and notice the structure of a differential equations method before doing full computational exercises.

## Default question set

When the user asks for a set of questions and does not specify a number, default to **ten questions**.

Do not include short-answer questions unless explicitly requested.

## Main categories

### 1. Reading prep questions

These appear before or near the beginning of a section. They should prepare students to notice definitions, assumptions, notation, and motivating ideas.

Good reading prep questions ask students to:

- identify the role of a term;
- distinguish two related concepts;
- recognize why a method is needed;
- predict what kind of output a method produces.

### 2. Inter-narrative checkpoint questions

These appear inside the narrative after an important idea, example, or transition. They should be brief and should reinforce the point just made.

Good checkpoint questions ask students to:

- choose the next step;
- interpret a graph, formula, or parameter;
- identify a misconception;
- compare two solution forms;
- connect algebraic work to differential equations meaning.

### 3. Placement suggestions

When asked to design questions for a section, include suggested locations such as:

- after a definition;
- before a worked example;
- after a displayed derivation;
- before introducing a new method;
- at the end of a subsection.

## Preferred formats

Use a mixture when appropriate:

- multiple choice;
- multiple select;
- true/false;
- matching;
- card sort;
- ordering;
- “select all that apply”;
- conceptual computation where the arithmetic is light.

Multiple-select and card-sort formats are especially useful for method selection, classifying terms, recognizing solution types, and distinguishing homogeneous versus nonhomogeneous equations.

## Feedback style

Feedback should teach the concept. Avoid feedback that only says whether the student is correct.

For true/false questions, do **not** use correctness-signaling words like “Exactly,” “Correct,” “Nope,” or “Not quite,” because the same feedback may appear regardless of response. Instead, write neutral explanatory feedback.

Prefer:

```xml
<feedback>
    <p>
        The order is determined by the highest derivative that appears in the equation,
        not by the highest power of the dependent variable.
    </p>
</feedback>
```

Avoid:

```xml
<feedback>
    <p>Correct! The equation is first order.</p>
</feedback>
```

## Distractors

Distractors should be plausible and diagnostic. They should reflect common student mistakes, such as:

- confusing order with degree;
- treating every equation with a derivative as separable;
- confusing independent and dependent variables;
- assuming numerical solutions are closed-form formulas;
- ignoring initial conditions;
- applying the Laplace shift theorem with the wrong shift;
- matching an undetermined-coefficients trial form without accounting for overlap.

When appropriate, improve weak incorrect choices rather than merely flagging them.

## Existing checkpoint library

If the user says questions already exist in a checkpoint library, do not redraft those questions. Reference them by label when known and suggest placement. Only draft new questions for gaps.

## PreTeXt style

When outputting PreTeXt source:

- use short descriptive titles;
- do not make the title merely repeat the question statement;
- avoid unnecessary `<em>` tags around the entire problem statement;
- keep feedback concise and concept-focused;
- keep question text student-facing.

## Good question qualities

A strong question should:

- target one clear learning objective;
- require more than symbol matching;
- be answerable from the section narrative;
- help students avoid a predictable error;
- fit naturally at a specific point in the section.

## Poor question qualities

Avoid questions that:

- ask for a fact students have not yet been prepared to use;
- require a long computation inside a reading checkpoint;
- are too obvious to change student thinking;
- test vocabulary without meaning;
- pile multiple ideas into one prompt.
