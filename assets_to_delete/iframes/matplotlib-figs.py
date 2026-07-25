import matplotlib.pyplot as plt
import numpy as np

plt.style.use('dark_background')  # Use the dark_background style sheet

fig, ax = plt.subplots()
x = np.linspace(0, 10, 100)
y = np.sin(x)
ax.plot(x, y)

ax.set_xlabel('X-axis')
ax.set_ylabel('Y-axis')
ax.set_title('Sine Wave (Dark Background)')

plt.savefig('dark_figure.png', transparent=True)  # Save as PNG with transparency to avoid a white box
plt.close(fig)
