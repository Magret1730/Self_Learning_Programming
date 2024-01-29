// Primitive Data Types
// string
const firstName = 'Sarah';

//number
const age = 30;
const temp = 9.98;

// boolean
const hasKids = true;

// null
const aptNumber = null;

// undefined
// let score;  or
const score = undefined;

// Symbol
const id = Symbol('id');
// console.log(id);

// BigInt
const n = 1234567890123456789012345678901234567890n;

// Reference Data Types
const numbers = [1, 2, 3, 4];

const person = {
	firstName: 'John',
	age: 30,
};

function sayHello() {
	console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);
