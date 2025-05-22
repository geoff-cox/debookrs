import numpy as np
import csv
import matplotlib.pyplot as plt
from sympy import symbols, lambdify, sympify
import os
import json
import tkinter as tk
from tkinter import filedialog, messagebox, simpledialog
import webbrowser
from functools import partial

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

    csv_path = os.path.join(output_dir, f"{output_name}.csv")
    with open(csv_path, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['t', 'yA', 'yT'])
        for t, ya, yt in zip(t_values, y_approx, y_true_values):
            writer.writerow([t, ya, yt])

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

def load_and_run_json(json_file):
    with open(json_file, "r") as f:
        config = json.load(f)
    t_sym, y_sym = symbols('t y')
    f_func = lambdify((t_sym, y_sym), sympify(config["f_expr"]), 'numpy')
    y_true_func = lambdify(t_sym, sympify(config["y_expr"]), 'numpy')
    euler_method(f_func, y_true_func, config["a"], config["b"], config["h"], config["y0"],
                 config["output_dir"], config["output_name"], config["tikz_title"],
                 config.get("plot_png", True), config.get("error_analysis", True))

def gui():
    root = tk.Tk()
    root.title("Euler Config Manager")

    script_dir = os.path.dirname(os.path.abspath(__file__))

    def refresh():
        for widget in frame.winfo_children():
            widget.destroy()

        files = [f for f in os.listdir(script_dir) if f.endswith(".json")]
        for f in files:
            full_path = os.path.join(script_dir, f)
            row = tk.Frame(frame)
            row.pack(fill='x', pady=2, expand=True)
            tk.Label(row, text=f, width=30, anchor='w').pack(side='left')
            tk.Button(row, text="Edit", command=partial(edit_json, full_path)).pack(side='left')
            tk.Button(row, text="Run", command=partial(load_and_run_json, full_path)).pack(side='left')
            tk.Button(row, text="Delete", command=partial(delete_json, full_path)).pack(side='left')
            tk.Button(row, text="View Plot", command=partial(view_plot, full_path)).pack(side='left')

    def new_json():
        script_dir = os.path.dirname(os.path.abspath(__file__))
        name = simpledialog.askstring("New Config", "Enter filename (no extension):")
        if not name: return
        path = os.path.join(script_dir, f"{name}.json")
        default = {
            "a": 0, "b": 2, "h": 0.1, "y0": 1,
            "f_expr": "y - t**2 + 1",
            "y_expr": "(t + 1)**2 - 0.5 * exp(t)",
            "output_dir": script_dir,
            "output_name": name,
            "tikz_title": "Euler Approximation",
            "plot_png": True, "error_analysis": True
        }
        with open(path, 'w') as f:
            json.dump(default, f, indent=2)
        refresh()

    def edit_json(path):
        with open(path, 'r') as f:
            config = json.load(f)

        edit_win = tk.Toplevel()
        edit_win.title(f"Editing {os.path.basename(path)}")

        entries = {}

        def make_entry(key, value):
            row = tk.Frame(edit_win)
            row.pack(fill='x', pady=2)
            tk.Label(row, text=key, width=20, anchor='w').pack(side='left')
            if isinstance(value, bool):
                var = tk.BooleanVar(value=value)
                cb = tk.Checkbutton(row, variable=var)
                cb.pack(side='left')
                entries[key] = var
            else:
                var = tk.StringVar(value=str(value))
                ent = tk.Entry(row, textvariable=var)
                ent.pack(side='left', fill='x', expand=True)
                ent.pack(side='left')
                entries[key] = var

        for key, value in config.items():
            make_entry(key, value)

        def save_and_close():
            for key, var in entries.items():
                if isinstance(var, tk.BooleanVar):
                    config[key] = var.get()
                else:
                    text = var.get()
                    try:
                        config[key] = eval(text) if key in ["a", "b", "h", "y0"] else text
                    except:
                        config[key] = text
            with open(path, 'w') as f:
                json.dump(config, f, indent=2)
            edit_win.destroy()

        tk.Button(edit_win, text="Save", command=save_and_close).pack(pady=5)

    def delete_json(path):
        if messagebox.askyesno("Confirm", f"Delete {os.path.basename(path)}?"):
            os.remove(path)
            refresh()

    def view_plot(path):
        with open(path) as f:
            config = json.load(f)
            name = config["output_name"]
            out_dir = config["output_dir"]
            img = os.path.join(out_dir, f"{name}.png")
            if os.path.exists(img):
                webbrowser.open(img)
            else:
                messagebox.showinfo("Missing", "PNG output does not exist.")

    tk.Button(root, text="New Config", command=new_json).pack(pady=5)
    frame = tk.Frame(root)
    frame.pack(fill='both', expand=True)
    refresh()
    root.mainloop()

if __name__ == "__main__":
    gui()
