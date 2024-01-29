const myString = 'developer';

// My solution is his first solution.yippiiiiieeeeeeeeeeeeee.
let myNewString;

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2
myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 3
myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`

// Solution 4
myNewString = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`

console.log(myNewString);