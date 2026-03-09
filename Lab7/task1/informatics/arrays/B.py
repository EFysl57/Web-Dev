n = int(input())
arr = []

arr2 = []

for i in range(0, n):
    x = int(input())
    arr.append(x)


for i in arr:
    if (i % 2 == 0):
        arr2.append(i)
print(arr2)