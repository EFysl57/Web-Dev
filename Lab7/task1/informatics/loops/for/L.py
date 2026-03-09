x = int(input())

num = 0
k = 0
for i in reversed(str(x)):
    num += (int(i) * 2) ** k
    k += 1

print(num)