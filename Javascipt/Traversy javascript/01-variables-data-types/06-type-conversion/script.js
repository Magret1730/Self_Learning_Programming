// CONVERT STRING TO NUMBER
// let amount = '100';
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// CONVERT NUMBER TO STRING
// let amount = 100;
// amount = amount.toString();
// amount = String(amount);

// CONVERT STRING TO DECIMAL
// let amount = '99.5';
// amount = parseFloat(amount);

// CONVERT NUMBER TO BOOLEAN
// 1 and any other number is true and 0 only is false
// let amount = 0;
// amount = Boolean(amount);

// WAYS TO END UP WITH NaN
let amount = 'hello';
amount = parseInt(amount);
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);