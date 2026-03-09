n = int(input())
arr = []

cnt = 0

for i in range(0, n):
    x = int(input())
    if (x > 0):
        cnt += 1
    arr.append(x)

print(cnt)


