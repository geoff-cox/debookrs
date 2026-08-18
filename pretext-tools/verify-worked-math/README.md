# verify-worked-math

CAS regression checks for the worked mathematics printed in the textbook.

Every entry in the registry re-derives a printed answer, worked solution, or
interactive widget's "correct" option with [SymPy](https://www.sympy.org) and
verifies it symbolically. Each check names the source file it guards, so a
failure points directly at the spot where the book disagrees with the math.

## Why

The July 2026 audit (`reports/2026-07-textbook-audit.md`, Appendix A) found
~30 places where a printed answer key or widget contradicted correct work —
every one mechanically detectable. This tool re-checks those spots (and any
new ones added to the registry) so fixed errors stay fixed and new worked
content can be verified before it ships.

## Usage

```sh
pip install sympy
python3 processing-tools/verify-worked-math/verify_worked_math.py
```

The script prints one `PASS`/`FAIL` line per check and exits nonzero on any
failure, so it can be wired into CI or a pre-commit hook.

## Adding checks

Append a `Check(name, source, run)` to `REGISTRY` in
`verify_worked_math.py`:

- `name` — what is being verified, stated as the mathematical claim.
- `source` — repo-relative path of the file containing the printed math.
- `run` — a zero-argument callable returning `True` when the claim holds.

Helpers provided:

- `is_zero(expr)` — symbolic identity check (`simplify(expr) == 0`).
- `ode_residual_zero(residual)` — verify a claimed DE solution by
  substitution.
- `euler(f, t0, y0, h, n)` / `euler_system(fs, t0, y0s, h, n)` — recompute
  Euler's-method tables with exact rational arithmetic.
- `laplace_matches(f_t, F_s)` — verify a transform pair.

Guidelines:

- Verify the **printed final answer** (what students read), plus any
  intermediate stage a student would copy (e.g. a partial-fraction
  decomposition).
- Use exact `Rational` values, not floats, so equality checks are exact.
- One claim per check — small checks give precise failure locations.
