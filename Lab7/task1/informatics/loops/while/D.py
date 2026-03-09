n = int(input())


def check_square(n):
    if (n == 0):
        return 'NO'


    while (n > 1):
        if(n % 2 != 0):
            print(n)
            return 'NO'
        else: 
            n /= 2
    return 'YES'

print(check_square(n))