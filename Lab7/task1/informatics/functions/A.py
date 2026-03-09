def min (a, b, c, d):
    min1 = 0
    min2 = 0
    
    if (a > b):
        min1 = b
    else:
        min1 = a

    if (c < d):
        min2 = c
    else:
        min2 = d
    
    if (min1 > min2):
        return min2
    else: 
        return min1
    


print(min(4, 5, 6, 7))