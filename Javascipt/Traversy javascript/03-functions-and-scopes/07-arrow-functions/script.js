/*function add (a, b)
{
    return a+ b;
}*/

// ARROW FUNCTION SYNTAX
const add = (a, b) =>
{
    return a + b;
}
console.log(add(1, 8));

// IMPLICIT RETURN
// making it shorter since it is a line of code that is in the curly braces
const subtract = (a, b) => a - b;
console.log(subtract(8, 1));

// YOU CAN OMIT THE PARENTHESIS IN THE PARAMETER SECTION, IF THE PARAMETER IS JUST ONE
const double = a => a * 3;
console.log(double(6));

// Returning an object. Surround the curly braces with parenthesis.
const returnObj = () => ({
    name: 'Magret'
});
console.log(returnObj());

// forEach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n)
{
    console.log(n);
});

// to make it neater
numbers.forEach(n => console.log(n)); // parenthesis must be added to the parameter e.g n if it is more than one.
