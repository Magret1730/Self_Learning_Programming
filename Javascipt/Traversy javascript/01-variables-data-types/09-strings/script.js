let x;

const name = 'John';
const age = 31;

x = 'My name is ' + name + ' and I am ' + age + ' years old.';

// Template literals
x = `My name is ${name} and I am ${age} years old.`

// String Properties and Methods
// const s = 'Hello World'; // string
const s = new String('Hello World'); // turning string into string object
x = typeof s;

x = s.length;

// Access value by key
x = s[10];

x = s.__proto__; // it will give different methods we can use with strings.

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(5); // it will give the character at index 5
x = s.charAt(s.length - 1); // it will give the last character

x = s.indexOf('e'); // it will give the index of the first e
x = s.lastIndexOf('e'); // it will give the index of the last e

x = s.substring(0, 5); // it will give the substring from 0 to 5 i.e Hello

x = s.substring(7); // it will give the substring from 7 to the end i.e World

x = s.slice(-11, -7); // it will give the substring from -11 to -7 i.e Hell i.e H is -11, e is -10
x = s.slice(-5); // it will give the substring from -5 to the end i.e World

x = '         Hello World';
x = x.trim(); // it will remove the whitespaces from the beginning and the end

x = s.split(' '); // it will split the string into an array based on the separator indicated e.g space

x = s.replace('World', 'Universe'); // it will replace the word 'World' with 'Universe'.

x = s.includes('Hello'); // it will return true if the string 's' has the world 'Hello'.

x = s.valueOf(); // it will return the value of the string 's'.

console.log(x);

// console.log(s);
