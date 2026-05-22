# Task Instructions: Exercises, ODPs, Solutions, and Assessment Items

Use this file when the user asks for exercises, solutions, ODP/PBG questions, proficiency-based assessment items, question deduplication, or question-library guidance.

## Core goal

Create or revise mathematically correct, pedagogically useful assessment items that align with the textbook narrative and the intended student skill.

Questions should be clear enough for students, structured enough for reuse, and distinct enough to avoid duplicate assessment of the same solution.

## General exercise expectations

Exercises should:

- match the section’s stated objectives;
- test one primary idea unless intentionally cumulative;
- use clean numbers unless complexity is part of the learning goal;
- include enough context to make the task unambiguous;
- avoid computational busywork that does not support the concept;
- have solutions or feedback that explain the method, not only the answer.

## PreTeXt output

When producing exercise source, use valid PreTeXt XML. Preserve existing IDs if revising.

Keep titles short and descriptive.

Use separate code blocks for separate requested tasks.

## Solution style

For full solutions:

- start with the method choice;
- show the key steps;
- include brief explanatory comments;
- avoid narrating every algebraic simplification;
- box or clearly identify the final result when appropriate.

Use structured labeled steps for long methods such as:

- undetermined coefficients;
- Laplace transform method;
- solving piecewise forcing problems;
- systems and matrix methods;
- coefficient matching.

## ODP / proficiency-based grading context

ODPs are short assessments scored as:

- `P`: Proficient
- `N`: Not yet proficient

Questions should target a specific proficiency. Avoid bundling multiple unrelated proficiencies into one item unless the topic explicitly requires synthesis.

## ODP naming and metadata conventions

When generating files for the ODP repository, respect the user’s naming convention:

```text
{topicID}-{typeID}-{countID}.tex
```

where:

- `topicID` identifies the topic;
- `typeID` is a lowercase letter;
- `countID` is a sequential three-digit integer starting at `001`.

Required request fields for generating new ODP problems normally include:

- `topicID`
- `semesterID`
- `ioID`
- `weekID`

Example code such as `C5-IC-3-FL26` should be interpreted carefully rather than guessed.

## Canonical question-type categories

When classifying or deduplicating questions, group by the solution expectation, not merely by wording.

Common high-level categories:

- `a`: solve for the general solution;
- `b`: solve for the particular solution;
- `c`: classification;
- `d`: method-specific applicability;
- `e`: general conceptual applicability;
- `f`: verifying solutions;
- `g`: sub-method steps;
- `h`: real-world context reference.

A real-world context reference is enough for category `h` unless the student is actually asked to set up the differential equation; reserve a separate modeling type for setup tasks.

## Duplicate detection

Flag two questions as duplicates if they require students to produce essentially the same solution or answer under the same canonical type, even if the instructions are worded differently.

Do not rely only on surface wording.

Check:

- same equation with cosmetic changes;
- same initial condition and final answer;
- same classification decision;
- same method applicability decision;
- same sub-method step;
- same real-world context with identical mathematical task.

## Question-generation constraints

Do not maintain or rely on `question_manifest.csv` unless the user explicitly says it has been re-audited. Treat old question-type reports as potentially outdated.

When generating new questions from a library, first classify the existing problems and identify gaps. New questions should fill gaps, not merely rephrase existing items.

## Feedback

Feedback should teach. It should identify the key principle, misconception, or method step.

For true/false and auto-graded items, avoid feedback that assumes a specific response unless the system supports response-specific feedback.

## Quality checklist

Before finalizing, verify that:

- the problem has a clear expected answer;
- the method required is appropriate for the section;
- the question is not a duplicate of a known existing item;
- the final answer is mathematically correct;
- notation matches the textbook;
- any metadata or filename conventions are followed exactly.
