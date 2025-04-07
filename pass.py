import random as r

string="abcdefghijklmnopqrstuvwxyz"
string1="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
string2="1234567890"
string3="!@#$%^&*()_+"

password=""
n=r.choice(range(4,8))
for i in range(n):
    password+=r.choice(string)
    password+=r.choice(string1)
    password+=r.choice(string2)
    password+=r.choice(string3)
    
print(password)