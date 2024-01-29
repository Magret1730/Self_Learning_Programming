// 1. Arithmetic operators
let x;

x = 10 + 5;
x = 10 - 5;
x = 10 * 5;
x = 10 / 5;
x = 10 % 5;

// concatenation
x = 'Hi' + " " + 'there';

// Exponient i.e power of
x = 2 ** 3;

// Increment
x = 2;

x = x + 1;
x += 1;
x++;

// Decrement
x = x - 1;
x -= 1;
x--;

// 2. Assignment Operators
x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison operators
x = 3 == '3'; // == evaluates value only
x = 3 === '3'; // === evaluates both type and value

x = 3 != '3'; // != evaluates value only and the opposite of ==
x = 3 !== '3'; // !== evaluates both type and value and the opposite of ===

x = 5 > 3;
x = 5 < 3;
x = 5 >= 3;
x = 5 <= 3;

console.log(x);

/*
In JavaScript, == and === are comparison operators used to compare values. The main difference between them lies in how they handle comparisons:

== (Equality Operator):

This checks for equality of values after performing type coercion if the operands are of different types.
It attempts to convert the operands to the same type before making the comparison.
For example, 1 == '1' will return true because JavaScript will coerce the string '1' to a number before comparing.
=== (Strict Equality Operator):

This checks for equality of values without performing type coercion.
It strictly checks whether the values are of the same type and have the same value.
For example, 1 === '1' will return false because even though they have the same value, they are of different types (number and string).
In summary, == checks for equality after attempting type conversion, while === checks for equality without type conversion, ensuring both value and type match. Using === is often considered safer and leads to fewer unexpected results because it explicitly checks for both value and type equality.
*/