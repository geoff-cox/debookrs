import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

print("Euler-Method Data Generator")

a = 0
b = 2

f_rhs = "-2*x*y"

y_0 = 2
N = 4

if f_rhs is not None:
    f = lambda x, y: eval(f_rhs)

    h = (b - a) / N
    y_old = y_0
    table_str = "x,y"
    x_vals = np.linspace(a, b, N+1)
    y_vals = np.zeros(x_vals.size)
    y_vals[0] = y_0

    print(f"Solving y' = {f_rhs}, y({a}) = {y_0}, over [{a}, {b}] with N = {N} and h = {h}")

    for k in range(1, N+1):
        y_vals[k] = y_vals[k - 1] - h * f(x_vals[k - 1], y_vals[k - 1])

    # fig, ax = plt.subplots()
    # ax.scatter(x_vals, y_vals)
    # plt.plot(fig)

    tbl_dict = {"x": x_vals, "y": y_vals}
    df = pd.DataFrame(tbl_dict)

    print(df.set_index(df.columns[0]))