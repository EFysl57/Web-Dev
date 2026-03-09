import numpy

def arrays(arr):
    n=numpy.array(list(reversed(arr)),float)
    return n

arr = input().strip().split(' ')
result = arrays(arr)
print(result)