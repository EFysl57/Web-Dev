x = int(input())

min_divider = 0

for i in range(2, x):
    if (x % i == 0):
        min_divider = i
        break

print(min_divider)