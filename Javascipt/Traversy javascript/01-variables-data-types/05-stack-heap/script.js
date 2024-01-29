// values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
	name: 'Jonas',
	age: 27
};

let newName = name;
newName = 'James';

let newPerson = person;
newPerson.name = 'Faith';

console.log(newName, name);
console.log(newPerson, person);