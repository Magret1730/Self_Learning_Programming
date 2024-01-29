/*
for ([initialExpression]; [conditionalExpression]; [incrementExpression])
{
    statement;
}
*/

for (let i = 0; i <= 20; i += 2)
{
    if (i === 8)
    {
        console.log('8 is my lucky number');
    }
    else
    {
        console.log('Number ' + i);
    }
}

// Nested Loops
for (let j = 0; j <= 5; j++)
{
    console.log('Number ' + j);

    for (let k = 1; k <= 5; k++)
    {
        console.log(`${j} * ${k} = ${j * k}`);
    }
}

// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Timothy'];

for (i = 0; i < names.length; i++)
{
    if (names[i] === 'Sara')
    {
        console.log('Sara is the best');
    }
    else
    {
        console.log(names[i]);
    }
}
