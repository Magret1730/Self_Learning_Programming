# Write a function that takes an integer array nums and returns the second largest number 
# in the array. You can assume that the array has at least two distinct numbers.
# For example: Input: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
# Output: 6

# def secondLargest(num):
#   """
#     function takes in an array and returns the second
#     largest number
#   """
#   num.sort()
#   lenNum = len(num)
#   secMaxNum = num[lenNum-2]

#   return secMaxNum

# def main():
#   """Main function"""
#   print(secondLargest([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]))

# if __name__ == "__main__":
#   main()

def secondLargest(num):
    """
    Function takes in an array and returns the second largest number,
    removing duplicates first.
    """
    uniqueNums = list(set(num))  # Remove duplicates using set
    uniqueNums.sort()  # Sort in ascending order
    lenNum = len(uniqueNums)
    
    return uniqueNums[lenNum - 2]  # Return the second largest

def main():
    """Main function"""
    print(secondLargest([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]))  # Output: 6

if __name__ == "__main__":
    main()
