// for of is used to iterate over arrays.
// LOOP THROUGH ARRAYS
const items = ['book', 'pencil', 'biro', 'eraser', 'jotter', 'blade'];

for (let i = 0; i < items.length; i++)
{
    console.log(items[i]);
}

// A cleaner way to do this is
for (const item of items)
{
    console.log(item);
}

// Array of objects
const users = [
    {name: 'Kate'},
    {age: 67},
    {height: '150cm'},
    {weight: '90kg'}
]

for (const user of users)
{
    console.log(user.age);
} // answers will come out as undefined and then 67. because name, height and weight does not have age key.

// not to get undefined
for (const user of users)
{
    if (user.age !== undefined) // check for undefined to remove undefined
    {
        console.log(user.age);
    }
}

// LOOP THROUGH STRINGS
const str = 'Hello World';

for (letter of str)
{
    console.log(letter);
}

// LOOP OVER MAP
const maps = new Map();
maps.set('name', 'John');
maps.set('age', 30);

for (const [key, value] of maps)
{
    console.log(key, value);
}
