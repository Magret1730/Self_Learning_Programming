const numbers = [1,2,3,4,5,6,7,8,9,10];

// previousValue can also be called Accumulator
// 0 is the initialValue. It can be added or not
const sum = numbers.reduce(function(previousValue, currentValue)
{
    return previousValue + currentValue;
}, 0);
console.log(sum);

// shorter form
const sum2 = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 10);
console.log(sum2);

// Using for loop
const sum3 = () =>
{
    let prev = 0;
    for (const cur of numbers)
    {
        prev += cur;
    }
    return prev;
};
console.log(sum3());

// Using reduce() to get the total of the prices
const cart = [
    {id: 1, name: 'Product 1', price: 130},
    {id: 2, name: 'Product 2', price: 150},
    {id: 3, name: 'Product 3', price: 175},
];

const total = cart.reduce((previousValue, product) => previousValue + product.price, 0);
console.log(total);
