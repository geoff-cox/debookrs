# assets_to_delete

Assets with **no reference anywhere in the book** that also appear to be genuine
scratch files, exact duplicates, or superseded takes. Reviewed individually
(images were opened and inspected; audio was compared by size/hash).

**Intended action:** verify, then delete the whole folder.

Everything here is recoverable from git history at any time:

```
git checkout 6a956a6 -- assets/<path>
```

Original locations are preserved by the subfolder layout (`figures/…` came from
`assets/figures/…`, and so on).

## Contents (20 files)

### figures/ (3)

| File | Why it's here |
|---|---|
| `dumb.gif` | Reaction/meme GIF (Dr. Steve Brule). No instructional content. |
| `t.png` | **Byte-identical duplicate** (md5 `93e2062b…`) of `assets/code/jsxgraph/img-labels/t.png`, which is live and in use. This stray copy in `figures/` is referenced by nothing. |
| `lt-4-step-map-step-1 - Copy.png` | Windows `" - Copy"` artifact. ⚠️ **Worth a look before deleting:** it is *not* byte-identical to `lt-4-step-map-step-1.png`, so it may be an edited variant rather than a pure copy. The rest of that figure family is in `assets_unused/figures/`. |

### iframes/ (3)

Test scaffolding for embedding matplotlib output in an iframe. Nothing in
`source/`, `project.ptx`, or `publication/` references `iframes/` at all.

| File | Why it's here |
|---|---|
| `test.html` | Test harness page (`<iframe src="dark_figure.png">`). |
| `dark_figure.png` | Output of that test — a plain sine curve on a transparent background. |
| `matplotlib-figs.py` | The script that generates it. ⚠️ Differs from `assets/code/matplotlib-figs.py` (which stays), so it is a variant, not an exact duplicate. |

### audio/readings/c1/ (13) and c2/ (1)

The audit report characterises `audio/readings/c1/` as the **old naming
scheme**. These are *different recordings* from the live files (no byte-identical
pairs; sizes differ), i.e. earlier takes that were later re-recorded under the
current naming — the content survives in the live files.

| Orphaned take | Superseded by (live, in use) |
|---|---|
| `c1-1-connection-to-algebra.mp3` | `c0-connection-to-alg-calc.mp3` |
| `c1-1-definition.mp3`, `definition.mp3` | `c0-de-def-defn.mp3` |
| `c1-1-derivative-notation.mp3` | `c0-de-def-notations.mp3` |
| `c1-2-coefficients.mp3` | `c0-de-coefficients.mp3` |
| `c1-2-terms.mp3` | `c0-de-terms.mp3` |
| `c1-2-de-components.mp3` | `c0-de-variables.mp3` |
| `c1-1-de-basics-intro.mp3`, `c1-intro.mp3`, `reading-whats-a-de-intro.mp3` | `c0-intro-what-is-a-de.mp3` |
| `reading-chapter-1-intro.mp3` | `c1-intro-classification.mp3` |

Plus pure scratch files: `c1/Recording.mp3` (default recorder filename),
`c1/template.mp3`, `c2/template.mp3`.

> **Note:** `c1/reading-an-analogy-1.mp3` was **not** put here — it has no live
> counterpart, so it went to `assets_unused/` instead. All other `c2/` narration
> also went to `assets_unused/` (see that folder's README).
