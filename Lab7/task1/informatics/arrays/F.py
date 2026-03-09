n = int(input())
arr = []

for i in range(0, n):
    x = int(input())
    arr.append(x)

cnt = 0

for i in range(1, n-1):
    if(arr[i] > arr[i-1] and arr[i] > arr[i+1]):
        cnt += 1

print(cnt)