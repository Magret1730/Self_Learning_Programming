// Array Literal
const numbers = [11, 13, 54, 87, 90];
const mixed = [11, 'Hello', true, null, 90];

// Array Constructor
const fruits = new Array('lemon', 'grape', 'orange');

let x;

x = numbers[1];

x = numbers[2] + numbers[4];

x = `My favorite fruit is ${fruits[2]}`;

x = mixed.length;

fruits[2] = 'pear'

x = fruits;

// fruits.length = 2;

// x = fruits.length; // it always start counting from 1

fruits[fruits.length] = 'strawberry';

console.log(x);