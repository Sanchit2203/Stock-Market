print("Write a program to print first five prime number from 10001 to 49999 but only those numbers whose middle digit is odd")
for i in range(10001,49999):
    for j in range(2,49999):
        if(i%j==0 & i%1==0):