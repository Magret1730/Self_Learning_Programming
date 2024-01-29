let x = Math.round(Math.random() * 100);

let y = Math.round(Math.random() * 50);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;

const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;

const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;

const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;

const remainder = x % y;
const remainderOutput = `${x} % ${y} = ${remainder}`;

// console.log(x, y);
console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(remainderOutput);