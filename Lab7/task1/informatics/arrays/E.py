n = int(input())
arr = []

for i in range(0, n):
    x = int(input())
    arr.append(x)

res = 'NO'

for i in range(1, n):
    if((arr[i] > 0 and arr[i-1] > 0) | (arr[i] < 0 and arr[i-1] < 0)):
        res = 'YES'
        break

print(res)