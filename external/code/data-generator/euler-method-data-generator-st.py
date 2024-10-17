import streamlit as st
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

st.title("Euler-Method Data Generator")

a = st.number_input("a = ", 0, 1000)
b = st.number_input("b = ", 0, 1000, a + 1)

if a > b:
    st.warning("a should be less than b")

f_str = st.text_input("y' = ", "x*y")

y_0 = st.number_input(f"y({a}) = ", -1000, 1000, 0)
N = st.number_input(f"N = ", 1, 50, 5, 1)

if f_str is not None:
    f = lambda x, y: eval(f_str)

    h = (b - a) / N
    st.write(f"h = {h}")

    y_old = y_0
    table_str = "x,y"
    st.write("x,y")
    x_vals = np.linspace(a, b, N)
    y_vals = np.zeros(x_vals.size)
    y_vals[0] = y_0
    for k in range(1, N):
        y_vals[k] = y_vals[k - 1] - h * f(x_vals[k - 1], y_vals[k - 1])

    fig, ax = plt.subplots()
    ax.scatter(x_vals, y_vals)
    st.pyplot(fig)

    tbl_dict = {"x": x_vals, "y": y_vals}
    df = pd.DataFrame(tbl_dict)

    st.dataframe(df.set_index(df.columns[0]))