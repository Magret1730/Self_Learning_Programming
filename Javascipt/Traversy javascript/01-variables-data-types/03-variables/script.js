// Ways to declare a variable
// var, let, const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = 30;

console.log(age);

// naming variables
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning variables
age = 31;

console.log(age);

let score;
score = 1;
console.log(score);

if (true)
{
	score = score + 1;
}
console.log(score);

const x = 100;
// x = 400; const can't be re-assigned to

// const d; const must be initialized

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
	name: 'Magret'
};
person.name = "Faith";
person.email = "faith@gmail.com"
console.log(person);

// Declare multiple variables
let a = 30, b, c;

const d = 10,
e = 20,
f = 30;

console.log(d);
console.log(b);
console.log(a);