// object literal is like dictionary in C

let x;

const person = {
    name: 'John Doe',
    age: 56,
    isadmin: true,
    address: {
        number: 50,
        street: 'Gilbert',
        city: 'St. John\'s',
    },
    hobbies: ['music', 'sport'],
};

x = person.name; // accessing the name
x = person['name']; // accessing the name in another way
x = person.address.city; // accessing nested object literals
x = person.hobbies[1]; // accessing arrays in object literals

person.name = 'Jane Doe'; // changing values of the object literals

delete person.age; // to delete from an object literal

person.hasChildren = true; // adds property to the object literals

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};
person.greet();

x = person;

console.log(x);