# Task Instructions: TTS Narration from PreTeXt Source

Use this file when the user asks to create narration-friendly text, preprocess PreTeXt for audio, generate text for TTS, or revise narration so it matches on-screen textbook text.

## Core goal

Convert PreTeXt textbook source into smooth, natural speech that sounds like a professor reading and lightly guiding students through the material.

The output should be plain narration text, not XML.

## Hard requirements

- Remove all PreTeXt/XML/HTML tags from the narration output.
- Do not include markup that a TTS system would read aloud.
- Keep narration aligned with the visible textbook text.
- If narration edits change meaning, the corresponding PreTeXt source should also be updated when requested.
- Skip exercises and examples when the user asks to skip them.
- Do not generate narration for exercises or examples by default if the user has asked to omit them.

## Voice

Use fluent, concise instructor-style narration. Add brief guiding context between math steps when needed, but do not over-explain routine algebra.

The narration should sound natural when spoken aloud.

## Math narration

Read mathematical expressions as an instructor would say them.

Examples:

- `<m>\frac{dy}{dx}</m>` → “the derivative of y with respect to x”
- `<m>\frac{d^2y}{dx^2}</m>` → “the second derivative of y with respect to x”
- `<m>3y</m>` → “three-y”
- `<m>2x</m>` → “two-x”
- `<m>y'</m>` → “y prime”
- `<m>y''</m>` → “y double prime”
- ODE → “O D E”
- PDE → “P D E”

Use hyphens in expressions like “three-y” to reduce awkward TTS pauses.

## Displayed equations and derivations

When narrating a displayed equation, introduce it naturally.

Example:

```text
We can write the differential equation as the derivative of y with respect to x plus two-y equals four x squared.
```

For derivations, add short transitions:

```text
First, move the two-y term to the other side. Then integrate both sides.
```

Avoid reading long symbolic derivations in a mechanical way unless the steps are central to the explanation.

## Cross-references

When the PreTeXt source contains an `<xref>` and the exact rendered number is not available, replace it with a natural phrase such as:

- “a previous example”
- “the previous section”
- “the method we just introduced”
- “the figure above”
- “the next example”

Choose the phrase from context. If the context is unclear, make the best reasonable guess.

## Asides

Content inside `<aside>` should be introduced as a side note.

Example:

```text
As a side note, this is one reason we often prefer numerical methods when closed-form solutions are difficult to find.
```

## Lists

Convert short lists with four or fewer items into natural prose.

Example:

```text
There are three things to notice: first, the equation includes a derivative; second, the unknown is a function; and third, the equation tells us how the function changes.
```

For lists longer than four items, read them one by one, but keep the narration concise.

## Output organization

When multiple files are provided, produce separate outputs for each file.

Use clear file labels or separate code blocks so the narration can be copied into TTS tooling without cleanup.

## Quality checklist

Before finalizing, check that:

- no XML tags remain;
- math is spoken naturally;
- abbreviations are expanded appropriately;
- cross-references are understandable without rendered numbers;
- asides sound like asides;
- lists are not read as markup;
- the narration is concise, fluent, and aligned with the textbook text.
