n = int(input())
arr = []

for i in range(0, n):
    x = int(input())
    arr.append(x)

for i, value in enumerate(arr):
    if (i % 2 == 0):
        print(value)