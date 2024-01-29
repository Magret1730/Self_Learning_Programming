let x;

 // const todo = {}; or
const todo = new Object();

todo.id = 1;
todo.name = "Good job";
todo.completed = true;

x = todo;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2};

x = obj3;

const obj4 = Object.assign({}, obj1, obj2); // it assigns the object literals of obj1 and obj2 to the empty object i.e {}
// answer: {a: 1, b: 2, c: 3, d: 4} // same values as the spread operator

x = obj4;

const todos = [
    {id: 1, name: 'Magret'},
    {id: 2, name: 'Goodness'},
    {id: 3, name: 'Faithful'}
]

x = todos[2].name;

x = Object.keys(todo); // to get keys in an object // answer: [id, name, completed]
x = Object.values(todo); // to get values in an object // answer: [1, 'Good job', true]

x = Object.keys(todo).length; // to get length of the array
x = Object.values(todo).length; // to get length of the array

x = Object.entries(todo); // to get key/value pairs

x = todo.hasOwnProperty('name'); // to check if the object has a property. Answer is either true or false

console.log(x);
