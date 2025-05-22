import numpy as np
import csv
import matplotlib.pyplot as plt
from sympy import symbols, lambdify, sympify
import os
import json

def euler_method(f, y_true, a, b, h, y0, output_dir, output_name, tikz_title, plot_png=True, error_analysis=True):
    os.makedirs(output_dir, exist_ok=True)

    t_values = np.arange(a, b + h, h)
    y_approx = [y0]

    for i in range(1, len(t_values)):
        t_prev = t_values[i-1]
        y_prev = y_approx[-1]
        y_next = y_prev + h * f(t_prev, y_prev)
        y_approx.append(y_next)

    y_true_values = [y_true(t) for t in t_values]

    # Write CSV
    csv_path = os.path.join(output_dir, f"{output_name}.csv")
    with open(csv_path, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['t', 'yA', 'yT'])
        for t, ya, yt in zip(t_values, y_approx, y_true_values):
            writer.writerow([t, ya, yt])

    # Write LaTeX with TikZ
    tex_path = os.path.join(output_dir, f"{output_name}.tex")
    with open(tex_path, 'w') as file:
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
    \\addplot[blue,mark=*] table [x=t, y=yA, col sep=comma] {%s};
    \\addlegendentry{Euler Approximation}

    \\addplot[red,thick] table [x=t, y=yT, col sep=comma] {%s};
    \\addlegendentry{True Solution}
  \\end{axis}
\\end{tikzpicture}
\\end{document}
""" % (tikz_title, os.path.basename(csv_path), os.path.basename(csv_path)))

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
        plt.savefig(os.path.join(output_dir, f"{output_name}.png"))
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
        plt.savefig(os.path.join(output_dir, f"{output_name}_error.png"))
        plt.close()


# Example usage
if __name__ == "__main__":
    with open("euler_config.json", "r") as f:
        config = json.load(f)

    a = config["a"]
    b = config["b"]
    h = config["h"]
    y0 = config["y0"]
    f_expr = sympify(config["f_expr"])
    y_expr = sympify(config["y_expr"])
    output_dir = config["output_dir"]
    output_name = config["output_name"]
    tikz_title = config["tikz_title"]
    plot_png = config.get("plot_png", True)
    error_analysis = config.get("error_analysis", True)

    t_sym, y_sym = symbols('t y')
    f_func = lambdify((t_sym, y_sym), f_expr, 'numpy')
    y_true_func = lambdify(t_sym, y_expr, 'numpy')

    euler_method(f_func, y_true_func, a, b, h, y0, output_dir, output_name, tikz_title, plot_png, error_analysis)
