const num = new Number(5);

let x;

x = num.toString();

x = num.toString().length;

x = num.toFixed(2) // string representation of decimal i.e if num = 5 answer will be 5.00 in typeof string or num = 5.6787 answer = 5.68

x = num.toPrecision(2); // string representation: it will give 2 numbers in total e.g; let num = 4.675 answer = 4.7

x = num.toExponential(2); // string representation: its exponential

x = num.toLocaleString('en-ca'); // working with your language

x = num.valueOf();

x = Number.MAX_VALUE; // largest value possible with numbers
x = Number.MIN_VALUE; // lowest value possible with numbers

console.log(x);