let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'raspberry', 'blueberry'];

// nesting
// fruits.push(berries); // nesting the arrays

// console.log(fruits);

// x = fruits[3][1]; // accesing nested array

const allFruits = [fruits, berries]; // nesting the arrays

// console.log(allFruits);

// x = allFruits[0][2]; // accessing nested arrays

// concat
x = fruits.concat(berries); // it adds berries array into fruits array
// answer; x = ['apple', 'pear', 'orange', 'strawberry', 'raspberry', 'blueberry']

// spread(...)
x = [...fruits, ...berries]; // same result as concat
// answer; x = ['apple', 'pear', 'orange', 'strawberry', 'raspberry', 'blueberry']

// flatten array
const arr = [1, 2, [3, 4], 5, 6, [7, 8], 9, 10];

x = arr.flat(); // it flattens out the array like concat and spread
// answer: x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Static Methods on Array
x = Array.isArray(fruits); // checks if the 'fruits' is an array. it gives either true or false.

x = Array.from('12345690') // it creates the array
// answer: x = ['1', '2', '3', '4', '5', '6', '9', '0']

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
// answer: [1, 2, 3]

console.log(x);
