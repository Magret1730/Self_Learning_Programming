if (true)
{
    console.log('This is true.');
}

if (false)
{
    console.log('This is  NOT true.');
}

const x = 10, a = 7;
const y = 5, b = 1;

if (x > y)
{
    console.log(`${x} is greater than ${y}.`);
}

if (x === y)
{
    console.log(`${x} is equal to ${y}`);
}
else
{
    console.log(`${x} is not equal to ${y}`);
}

// shorthand IF // Not recommended
if (a > b)
    console.log(`${a} is greater than ${b}`), console.log('This is true.');
else
    console.log(`${a} is not greater than ${b}`);