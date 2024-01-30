// This is my first Java Script course
// console.log('Hello World');
// let name = 'Mosh';
// console.log(name);

// NAMING RULES
// cannot be a reserved keyword
// they should be meaningful
// they cannot start with a number
// they cannot a space or hyphen
// use camelCase
// they are case sensitive
// naming multiple variables
// let firstName = "Mosh", secondName = "Magret";
// or firstName = "Mosh";
// secondName = "Magret";

// CONSTANTS
// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// let name = "Mosh"; //string literal
// let age = 30; // number literal
// let isApproved = true; //BOolean Literal
// let firstName = undefined;
// let selectedColor = null;

let person = {
	name: "Mosh",
	age: 30
};

// Dot notation
person.name = "John";

// Bracket Notation
person["name"] = "Mary";

console.log(person.name);