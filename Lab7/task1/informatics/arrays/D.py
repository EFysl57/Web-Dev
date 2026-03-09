n = int(input())
arr = []

for i in range(0, n):
    x = int(input())
    arr.append(x)

cnt = 0

for i in range(1, n):
    if(arr[i] > arr[i-1]):
        cnt += 1

print(cnt)