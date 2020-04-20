import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots()

x = []
y = []
t = 0

for i in range(1000000):
    x.append(i)
    y.append(t)
    t = t + 1/(i+1)

ax.plot(x,y)
plt.show()
