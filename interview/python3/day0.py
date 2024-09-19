# Write a function that takes an integer n and returns the sum of 
# all even numbers up to n (inclusive). For example, if n is 10, the 
# function should return 2 + 4 + 6 + 8 + 10 = 30.

def sumInt (num: int) -> int:
    """
      A function that takes an int and returns the
      sum of all even numbers up to n (inclusive)
    """

    # n = 10
    if num < 2:
      return ("Numbers should be greater than 2")
      

    # if num == 2:
    #   return (2)

    # while num != 2:
    #   p =+ 2 # 4
    #   num = num - 2 # 10-4=4

    total_sum = 0
    for x in range(2, num+1, 2):
       total_sum += x

    return total_sum

def main():
   print(sumInt(4))

if __name__ == "__main__":
   main()
