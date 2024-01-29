const firstName = 'Dayo';
const lastName = 'Babadee';
const age = 32;

// if key and value are the same, you dont have to add both.
/*
const person = {
    firstName: firstName,
    lastName: lastName,
    age: age
};
same as the one below
*/

const person = {
    firstName,
    lastName,
    age
};

console.log(person);

// Destructuring // this is the normal one
/*const todo = {
    id: 1,
    title: 'wash plates',
    user: {
        name: 'Grace'
    }
};

// const id = todo.id;

// console.log(id);

const {id, title, user: {name}} = todo; // normal
console.log(id, title, name);*/

// to rename id: todoId
const todo = {
    id: 1,
    title: 'wash plates',
    user: {
        name: 'Grace'
    }
};
const {id: todoId, title, user: {name}} = todo;

console.log(todoId);

// Destructuring Array
const numbers = [12, 34, 56, 78, 90];

const [first, second, ...rest] = numbers; // ...rest denotes the rest of the array

console.log(first, second, rest);