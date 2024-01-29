function sayHello() {
    console.log('Hello World');
}

sayHello(); // this is invoking or calling a function

// this is defining or declaring a function
function add(num1, num2) {  // num1 and num2 are parameters
    console.log(num1 + num2);
}

add(5, 4); // 5 and 4 are arguments

function subtract(num1, num2) {
    return num1 - num2;
}

const result = subtract(11, 1);
console.log(result);
