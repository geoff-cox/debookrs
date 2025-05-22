import numpy as np
import csv
import matplotlib.pyplot as plt
from sympy import symbols, lambdify, sympify

def euler_method(f, y_true, a, b, h, y0, output_name, tikz_title, plot_png=True, error_analysis=True):
    t_values = np.arange(a, b + h, h)
    y_approx = [y0]

    for i in range(1, len(t_values)):
        t_prev = t_values[i-1]
        y_prev = y_approx[-1]
        y_next = y_prev + h * f(t_prev, y_prev)
        y_approx.append(y_next)

    y_true_values = [y_true(t) for t in t_values]

    # Write CSV
    csv_filename = f"{output_name}.csv"
    with open(csv_filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['t', 'yA', 'yT'])
        for t, ya, yt in zip(t_values, y_approx, y_true_values):
            writer.writerow([t, ya, yt])

    # Write LaTeX with TikZ
    tex_filename = f"{output_name}.tex"
    with open(tex_filename, 'w') as file:
        file.write(r"""
\\documentclass[tikz,border=10pt]{standalone}
\\usepackage{pgfplots}
\\pgfplotsset{compat=1.18}
\\begin{document}
\\begin{tikzpicture}
  \\begin{axis}[
    title={%s},
    xlabel={$t$}, ylabel={$y$},
    grid=both,
    thick,
    legend style={at={(0.5,-0.15)},anchor=north},
    width=12cm, height=8cm
  ]
    \\addplot[blue,mark=*] table [x=t, y=yA, col sep=comma] {%s.csv};
    \\addlegendentry{Euler Approximation}

    \\addplot[red,thick] table [x=t, y=yT, col sep=comma] {%s.csv};
    \\addlegendentry{True Solution}
  \\end{axis}
\\end{tikzpicture}
\\end{document}
""" % (tikz_title, output_name, output_name))

    # Optional PNG Plot
    if plot_png:
        plt.figure(figsize=(10, 6))
        plt.plot(t_values, y_approx, 'bo-', label='Euler Approximation')
        plt.plot(t_values, y_true_values, 'r-', label='True Solution')
        plt.xlabel('t')
        plt.ylabel('y')
        plt.title(tikz_title)
        plt.grid(True)
        plt.legend()
        plt.savefig(f"{output_name}.png")
        plt.close()

    # Optional Error Analysis Plot
    if error_analysis:
        abs_error = np.abs(np.array(y_approx) - np.array(y_true_values))
        plt.figure(figsize=(10, 4))
        plt.plot(t_values, abs_error, 'k--', label='|yA - yT|')
        plt.xlabel('t')
        plt.ylabel('Absolute Error')
        plt.title('Error in Euler Approximation')
        plt.grid(True)
        plt.legend()
        plt.savefig(f"{output_name}_error.png")
        plt.close()


# Example usage
if __name__ == "__main__":
    # User inputs
    a = 0
    b = 2
    h = 0.1
    y0 = 1

    # Define symbolic derivative and true solution
    t_sym, y_sym = symbols('t y')
    f_expr = sympify('y - t**2 + 1')
    y_expr = sympify('(t + 1)**2 - 0.5 * exp(t)')

    f_func = lambdify((t_sym, y_sym), f_expr, 'numpy')
    y_true_func = lambdify(t_sym, y_expr, 'numpy')

    output_dir = "assets/code/data-figure-generation/"
    output_name = f"{output_dir}euler_output"
    tikz_title = "Euler's Method Approximation vs True Solution"

    euler_method(f_func, y_true_func, a, b, h, y0, output_name, tikz_title)
