import operations

num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

result_add = operations.add(num1, num2)
result_subtract = operations.subtract(num1, num2)
result_multiply = operations.multiply(num1, num2)
result_divide = operations.divide(num1, num2)

print("Addition: ", result_add)
print("Subtraction: ", result_subtract)
print("Multiply: ", result_multiply)
print("Division: ", result_divide)
