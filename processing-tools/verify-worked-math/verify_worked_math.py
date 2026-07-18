#!/usr/bin/env python3
"""CAS regression checks for worked mathematics in the textbook.

Each check re-derives a printed answer, worked solution, or interactive
widget's "correct" option from the book source and verifies it with SymPy.
The registry is curated by hand: every entry points at the source file it
guards, so a failure tells you exactly where the book disagrees with the
mathematics.

Usage:
    python3 processing-tools/verify-worked-math/verify_worked_math.py

Exits nonzero if any check fails, so it can gate CI or a pre-commit hook.

Adding a check: append a Check to REGISTRY. Prefer verifying the *printed*
final answer (the thing students read), not an intermediate step. When a
solution has several printed stages, verify the last one and any stage a
student would copy (e.g. a partial-fraction decomposition).

History: this registry was seeded from the July 2026 audit
(reports/2026-07-textbook-audit.md, Appendix A) so that every confirmed
erratum fixed in that round stays fixed.
"""

import sys
from dataclasses import dataclass
from typing import Callable

from sympy import (
    E,
    FiniteSet,
    I,
    Rational as R,
    cos,
    diff,
    exp,
    laplace_transform,
    log,
    simplify,
    sin,
    solveset,
    sqrt,
    symbols,
    tan,
)

x, t, s, y, b, c = symbols("x t s y b c")
C1, C2 = symbols("C1 C2")


@dataclass
class Check:
    name: str
    source: str  # repo-relative file the printed math lives in
    run: Callable[[], bool]


def is_zero(expr) -> bool:
    return simplify(expr) == 0


def ode_residual_zero(residual) -> bool:
    """The residual of a DE after substituting the claimed solution."""
    return is_zero(residual)


def euler(f, t0, y0, h, n):
    """Explicit Euler for scalar y' = f(t, y); returns y_n as a Rational."""
    tk, yk = R(t0), y0
    for _ in range(n):
        yk = yk + R(h) * f(tk, yk)
        tk = tk + R(h)
    return yk


def euler_system(fs, t0, y0s, h, n):
    """Explicit Euler for a first-order system; returns the final state."""
    tk, ys = R(t0), list(y0s)
    for _ in range(n):
        ys = [yk + R(h) * f(tk, *ys) for yk, f in zip(ys, fs)]
        tk = tk + R(h)
    return ys


def laplace_matches(f_t, F_s) -> bool:
    """L{f(t)} equals the claimed F(s)."""
    got = laplace_transform(f_t, t, s, noconds=True)
    return is_zero(got - F_s)


REGISTRY = [
    # ------------------------------------------------------------------
    # Chapter 13 — First-Order Linear Systems
    # ------------------------------------------------------------------
    Check(
        "c13 complex-eigenvalue worked example satisfies x'=2x-5y, y'=5x+2y",
        "source/c13-linsys/sec-solving-linear-systems.ptx",
        lambda: (
            lambda xs, ys: is_zero(diff(xs, t) - (2 * xs - 5 * ys))
            and is_zero(diff(ys, t) - (5 * xs + 2 * ys))
        )(
            exp(2 * t) * (C1 * cos(5 * t) + C2 * sin(5 * t)),
            exp(2 * t) * (C1 * sin(5 * t) - C2 * cos(5 * t)),
        ),
    ),
    Check(
        "c13 higher-order Euler: y''+2y'+y^2=0, y(0)=1, y'(0)=2, h=0.1 -> y(0.2)=1.35",
        "source/c13-linsys/exercises-linsys.ptx",
        lambda: euler_system(
            [lambda tk, u, v: v, lambda tk, u, v: -2 * v - u**2],
            0, [R(1), R(2)], R(1, 10), 2,
        )[0] == R(27, 20),
    ),
    Check(
        "c13 Euler: y''-2y=e^(t-3)cos t, y(3)=-1, y'(3)=0, one h=0.2 step -> y(3.2)=-1",
        "source/c13-linsys/exercises-linsys.ptx",
        lambda: euler_system(
            [lambda tk, u, v: v, lambda tk, u, v: exp(tk - 3) * cos(tk) + 2 * u],
            3, [R(-1), R(0)], R(1, 5), 1,
        )[0] == R(-1),
    ),
    # ------------------------------------------------------------------
    # Chapter 12 — Piecewise Forcing Functions (inverse-transform bases)
    # ------------------------------------------------------------------
    Check(
        "c12 base inverse: L{ (1/4)(1-cos 2t) } = 1/(s(s^2+4))",
        "source/c12-ltp/exercises-ltp.ptx",
        lambda: laplace_matches(R(1, 4) * (1 - cos(2 * t)), 1 / (s * (s**2 + 4))),
    ),
    Check(
        "c12 base inverse: L{ (1/9)(1-cos 3t) } = 1/(s(s^2+9))",
        "source/c12-ltp/exercises-ltp.ptx",
        lambda: laplace_matches(R(1, 9) * (1 - cos(3 * t)), 1 / (s * (s**2 + 9))),
    ),
    Check(
        "c12 example: L{ -3/4 + (3/2)t + (3/4)e^(-2t) } = 3/(s^2(s+2))",
        "source/c12-ltp/sec-laplace-piecewise-method.ptx",
        lambda: laplace_matches(
            -R(3, 4) + R(3, 2) * t + R(3, 4) * exp(-2 * t), 3 / (s**2 * (s + 2))
        ),
    ),
    # ------------------------------------------------------------------
    # Chapter 11 — Laplace Transform Method
    # ------------------------------------------------------------------
    Check(
        "c11 first Problem: x=e^(5t)+2e^(-3t)+te^(-3t) solves x''+6x'+9x=64e^(5t), x(0)=3, x'(0)=0",
        "source/c11-ltm/exercises-ltm.ptx",
        lambda: (
            lambda X: is_zero(diff(X, t, 2) + 6 * diff(X, t) + 9 * X - 64 * exp(5 * t))
            and X.subs(t, 0) == 3
            and diff(X, t).subs(t, 0) == 0
        )(exp(5 * t) + 2 * exp(-3 * t) + t * exp(-3 * t)),
    ),
    # ------------------------------------------------------------------
    # Chapter 9 — Undetermined Coefficients
    # ------------------------------------------------------------------
    Check(
        "c9 worked example: y_p=2x^2+11x+18 solves y''-2y'+y=2x^2+3x",
        "source/c9-uc/sec-uc-method.ptx",
        lambda: (
            lambda yp: is_zero(diff(yp, x, 2) - 2 * diff(yp, x) + yp - (2 * x**2 + 3 * x))
        )(2 * x**2 + 11 * x + 18),
    ),
    # ------------------------------------------------------------------
    # Chapter 8 — LHCC
    # ------------------------------------------------------------------
    Check(
        "c8 example: roots of 5r^2+13r-2 are (-13±sqrt(209))/10",
        "source/c8-lhcc/sec-second-order-lhcc-eqns.ptx",
        lambda: solveset(5 * x**2 + 13 * x - 2, x)
        == FiniteSet((-13 - sqrt(209)) / 10, (-13 + sqrt(209)) / 10),
    ),
    # ------------------------------------------------------------------
    # Chapter 7 — Euler's Method
    # ------------------------------------------------------------------
    Check(
        "c7 em-problem-01: y'=y^2-x, y(0)=-1, h=0.5, two steps -> y(1)=-0.625",
        "source/c7-em/exercises-em.ptx",
        lambda: euler(lambda tk, yk: yk**2 - tk, 0, R(-1), R(1, 2), 2) == R(-5, 8),
    ),
    Check(
        "c7 em-problem-03(a): y'=2x-3y+1, y(1)=5, h=0.1, two steps -> y_2=2.98",
        "source/c7-em/exercises-em.ptx",
        lambda: euler(lambda tk, yk: 2 * tk - 3 * yk + 1, 1, R(5), R(1, 10), 2)
        == R(149, 50),
    ),
    # ------------------------------------------------------------------
    # Chapter 6 — Qualitative Methods
    # ------------------------------------------------------------------
    Check(
        "c6 quiz qm-cq-mc-1: for y'=y-1 the slope at y=-1 is -2 (autonomous)",
        "source/c6-qm/exercises-qm.ptx",
        lambda: (y - 1).subs(y, -1) == -2,
    ),
    # ------------------------------------------------------------------
    # Chapter 5 — Integrating Factor
    # ------------------------------------------------------------------
    Check(
        "c5 if-problem-ivp-1: y=xe^x-x solves y'-y/x=xe^x with y(1)=e-1",
        "source/c5-if/exercises-if.ptx",
        lambda: (
            lambda Y: is_zero(diff(Y, x) - Y / x - x * exp(x))
            and is_zero(Y.subs(x, 1) - (E - 1))
        )(x * exp(x) - x),
    ),
    # ------------------------------------------------------------------
    # Chapter 4 — Separation of Variables
    # ------------------------------------------------------------------
    Check(
        "c4 widget: u=(-y^2/2-y+1/5)^(-1) solves du/dy=u^2(y+1), u(0)=5",
        "source/c4-sov/exercises-sov.ptx",
        lambda: (
            lambda U: is_zero(diff(U, y) - U**2 * (y + 1)) and U.subs(y, 0) == 5
        )(1 / (-(y**2) / 2 - y + R(1, 5))),
    ),
    Check(
        "c4 drag-order: ln|q| integral gives 2t+t^3+c, i.e. d/dt(2t+t^3) = 2+3t^2",
        "source/c4-sov/sec-sov-implicit-solns.ptx",
        lambda: is_zero(diff(2 * t + t**3, t) - (2 + 3 * t**2)),
    ),
    # ------------------------------------------------------------------
    # Chapter 2 — Solutions
    # ------------------------------------------------------------------
    Check(
        "c2 drills: y=3x+x^2 solves 3y''-2y'+(4/x)y=12",
        "source/c2-solns/exercises-solns.ptx",
        lambda: (
            lambda Y: is_zero(3 * diff(Y, x, 2) - 2 * diff(Y, x) + (4 / x) * Y - 12)
        )(3 * x + x**2),
    ),
    Check(
        "c2 ivp-05: y=1/(1+ce^(-x)) solves y'-y+y^2=0",
        "source/c2-solns/exercises-solns.ptx",
        lambda: (
            lambda Y: is_zero(diff(Y, x) - Y + Y**2)
        )(1 / (1 + c * exp(-x))),
    ),
    Check(
        "c2 ivp-05: y=1/(c+x^2) residual of y'-y+y^2 at x=0 is (1-c)/c^2 (not a solution)",
        "source/c2-solns/exercises-solns.ptx",
        lambda: (
            lambda Y: is_zero(
                (diff(Y, x) - Y + Y**2).subs(x, 0) - (1 - c) / c**2
            )
        )(1 / (c + x**2)),
    ),
    # ------------------------------------------------------------------
    # Appendix A1 — Algebra review
    # ------------------------------------------------------------------
    Check(
        "CSQ summary box: (x+b/2)^2 - ((b/2)^2 - c) == x^2+bx+c",
        "source/aa-bookends/a1-algebra/CSQ-completing-sq.ptx",
        lambda: is_zero((x + b / 2) ** 2 - ((b / 2) ** 2 - c) - (x**2 + b * x + c)),
    ),
    Check(
        "PEQ: x^4-25 factors with roots ±sqrt(5), ±i*sqrt(5)",
        "source/aa-bookends/a1-algebra/PEQ-polynomial-equations.ptx",
        lambda: solveset(x**4 - 25, x)
        == FiniteSet(sqrt(5), -sqrt(5), I * sqrt(5), -I * sqrt(5)),
    ),
    # ------------------------------------------------------------------
    # Appendix A2 — Calculus review
    # ------------------------------------------------------------------
    Check(
        "G-improper: L{1} = integral of e^(-st) on [0,inf) = 1/s",
        "source/aa-bookends/a2-calculus/G-improper-integrals.ptx",
        lambda: laplace_matches(1 + 0 * t, 1 / s),
    ),
]

# ----------------------------------------------------------------------
# Appendix A1 — L-pfd: every printed decomposition answer in the section
# ----------------------------------------------------------------------
_PFD = [
    ("example (5s+4)/((s-1)(s^2+s+1))",
     (5 * s + 4) / ((s - 1) * (s**2 + s + 1)),
     3 / (s - 1) - (3 * s + 1) / (s**2 + s + 1)),
    ("f(x)", (3 * x**2 - 2 * x + 1) / (x**3 - 2 * x**2 - 3 * x),
     -1 / (3 * x) + 11 / (6 * (x - 3)) + 3 / (2 * (x + 1))),
    ("g(x) 17x-11", (17 * x - 11) / (x**2 * (x - 3)),
     -40 / (9 * x) + 11 / (3 * x**2) + 40 / (9 * (x - 3))),
    ("h(x) x+12", (x + 12) / ((x**2 - 4) ** 2),
     -3 / (8 * (x - 2)) + 7 / (8 * (x - 2) ** 2)
     + 3 / (8 * (x + 2)) + 5 / (8 * (x + 2) ** 2)),
    ("r(x) 3x-14", (3 * x - 14) / ((x + 1) * (x**2 + 2 * x + 1)),
     3 / (x + 1) ** 2 - 17 / (x + 1) ** 3),
    ("s(x) 111", 111 / ((x**2 - 9) * (x**2 + 9)),
     37 / (36 * (x - 3)) - 37 / (36 * (x + 3)) - 37 / (6 * (x**2 + 9))),
    ("t(x) 2x^2-3x+1", (2 * x**2 - 3 * x + 1) / ((x**2 - 4) * (x**2 + 4)),
     3 / (32 * (x - 2)) - 15 / (32 * (x + 2)) + (3 * x + 7) / (8 * (x**2 + 4))),
    ("u(x) 3x^2-2x+1", (3 * x**2 - 2 * x + 1) / ((x**2 - 1) * (x**2 + 1)),
     1 / (2 * (x - 1)) - 3 / (2 * (x + 1)) + (x + 1) / (x**2 + 1)),
    ("v(x) x^4-2x^2+1", (4 * x**2 - 5 * x + 2) / (x**4 - 2 * x**2 + 1),
     1 / (2 * (x - 1)) + 1 / (4 * (x - 1) ** 2)
     - 1 / (2 * (x + 1)) + 11 / (4 * (x + 1) ** 2)),
    ("w(x) x^4-16", (5 * x**2 - 3 * x + 1) / (x**4 - 16),
     15 / (32 * (x - 2)) - 27 / (32 * (x + 2)) + (3 * x + 19) / (8 * (x**2 + 4))),
    ("g(x) 1/(x^2-5x+6)", 1 / (x**2 - 5 * x + 6), 1 / (x - 3) - 1 / (x - 2)),
    ("h(x) 4x+7", (4 * x + 7) / (x**2 - 7 * x), -1 / x + 5 / (x - 7)),
    ("r(x) 20x^2+65x+115", (20 * x**2 + 65 * x + 115) / ((x**2 + 9) * (x + 11)),
     14 / (x + 11) + (6 * x - 1) / (x**2 + 9)),
    ("s(x) 3x^2+5x+7", (3 * x**2 + 5 * x + 7) / ((x**2 + 4) * (x**2 + 16)),
     (5 * x - 5) / (12 * (x**2 + 4)) + (-5 * x + 41) / (12 * (x**2 + 16))),
    ("t(x) 2x^2+3x+5", (2 * x**2 + 3 * x + 5) / ((x**2 + 1) * (x**2 + 4)),
     (x + 1) / (x**2 + 1) + (-x + 1) / (x**2 + 4)),
    ("p(x) improper quintic", (x**5 - 3 * x - 27) / (x**3 - 2 * x**2 - 3 * x),
     x**2 + 2 * x + 7 + 9 / x + R(69, 4) / (x - 3) - R(25, 4) / (x + 1)),
    ("q(x) improper quadratic", (8 * x**2 - 51 * x + 41) / (x**2 - 6 * x + 5),
     8 - R(7, 2) / (x - 5) + R(1, 2) / (x - 1)),
]

for _name, _lhs, _rhs in _PFD:
    REGISTRY.append(
        Check(
            f"L-pfd {_name}",
            "source/aa-bookends/a1-algebra/L-pfd.ptx",
            (lambda L=_lhs, Rr=_rhs: is_zero(L - Rr)),
        )
    )


# ----------------------------------------------------------------------
# H8 answer backfill (chapters 3, 4, 13)
# ----------------------------------------------------------------------
C = symbols("C")

REGISTRY += [
    Check(
        "c3 rewrite-and-solve: y=(c-1/x)sec x satisfies [y cos x]'=1/x^2",
        "source/c3-di/exercises-di.ptx",
        lambda: is_zero(diff((c - 1 / x) / cos(x) * cos(x), x) - 1 / x**2),
    ),
    Check(
        "c3 rewrite-and-solve: y=1/(2x^3)+c/x^5 satisfies [y x^5]'=x",
        "source/c3-di/exercises-di.ptx",
        lambda: is_zero(diff((1 / (2 * x**3) + c / x**5) * x**5, x) - x),
    ),
    Check(
        "c3 rewrite-and-solve: y=(x/2)e^(2x)+cx satisfies [y/x]'=e^(2x)",
        "source/c3-di/exercises-di.ptx",
        lambda: is_zero(diff(((x / 2) * exp(2 * x) + c * x) / x, x) - exp(2 * x)),
    ),
    Check(
        "c4 Level 1: y=Ce^(x^3/3) solves y'=x^2 y",
        "source/c4-sov/exercises-sov.ptx",
        lambda: (lambda Y: is_zero(diff(Y, x) - x**2 * Y))(C * exp(x**3 / 3)),
    ),
    Check(
        "c4 Level 1: y=-ln(C-e^x) solves y'=e^(x+y)",
        "source/c4-sov/exercises-sov.ptx",
        lambda: (lambda Y: is_zero(diff(Y, x) - exp(x + Y)))(-log(C - exp(x))),
    ),
    Check(
        "c4 Level 1: y=2-Ce^(-x) solves y'=2-y",
        "source/c4-sov/exercises-sov.ptx",
        lambda: (lambda Y: is_zero(diff(Y, x) - (2 - Y)))(2 - C * exp(-x)),
    ),
    Check(
        "c4 Level 1: y=-1/(tan x + c) solves y'=y^2 sec^2 x",
        "source/c4-sov/exercises-sov.ptx",
        lambda: (lambda Y: is_zero(diff(Y, x) - Y**2 / cos(x) ** 2))(
            -1 / (tan(x) + c)
        ),
    ),
    Check(
        "c13 sugar tank: S=120-118e^(-t/40) solves S'=3-S/40, S(0)=2",
        "source/c13-linsys/exercises-linsys.ptx",
        lambda: (
            lambda S: is_zero(diff(S, t) - (3 - S / 40)) and S.subs(t, 0) == 2
        )(120 - 118 * exp(-t / 40)),
    ),
    Check(
        "c13 brine tank: S=0.2(100+t)-2e7/(100+t)^3 solves S'=0.8-3S/(100+t), S(0)=0",
        "source/c13-linsys/exercises-linsys.ptx",
        lambda: (
            lambda S: is_zero(diff(S, t) - (R(4, 5) - 3 * S / (100 + t)))
            and S.subs(t, 0) == 0
        )(R(1, 5) * (100 + t) - 2 * 10**7 / (100 + t) ** 3),
    ),
    Check(
        "c13 Euler: y'=3z, z'=y+z^2 from (2,3,-4), h=0.1, 2 steps -> (1.17, -1.479)",
        "source/c13-linsys/exercises-linsys.ptx",
        lambda: euler_system(
            [lambda tk, yk, zk: 3 * zk, lambda tk, yk, zk: yk + zk**2],
            2, [R(3), R(-4)], R(1, 10), 2,
        ) == [R(117, 100), R(-1479, 1000)],
    ),
]


def main() -> int:
    failures = 0
    for check in REGISTRY:
        try:
            ok = check.run()
        except Exception as exc:  # a crashed check is a failed check
            ok = False
            print(f"ERROR {check.name}: {exc}")
        status = "PASS" if ok else "FAIL"
        if not ok:
            failures += 1
        print(f"{status}  {check.name}  [{check.source}]")
    total = len(REGISTRY)
    print(f"\n{total - failures}/{total} checks passed")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
