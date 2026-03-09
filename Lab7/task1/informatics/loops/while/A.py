from math import isqrt


n = int(input())

i = 1
while(i < n):
    if ((isqrt(i) ** 2 == i) and i < n):
        print(i)
    
    i += 1