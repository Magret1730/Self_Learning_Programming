const email = 'test@test.com' //A string with anything in it will always result to true

if (email)
{
    console.log('It is true');
}

console.log(Boolean(email));  // Answer: true

// Falsy Values // Any value other than this 6 is truthy
// - false
// - 0
// - "" or ''
// - null
// - undefined
// - NaN

// Truthy Values
// - Everything else that is not faulty
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = '';

if (x)
{
    console.log('This is truthy');
}
else
{
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and Falsy caveat
const children = 7;

if (children)
{
    console.log(`You have ${children} children.`);
}
else
{
    console.log('You have no children');
} // answer: You have 7 children.

// if children = 0, then the if statement will be 0 and that means falsy value
// this means answer will be 'You have no children'
// to remove that we can do 'children !== undefined' in the if statement i.e

const children2 = 0;

if (!isNaN(children2)) // or if (children2 !== undefined) 
{
    console.log(`You have ${children2} children.`);
}
else
{
    console.log('You have no children');
} // answer: 'You have 0 children.' instead of 'You have no children.'.

// Checking for empty array caveat
const posts = ['post one', 'post two'];

if (posts)
{
    console.log('List posts');
}
else
{
    console.log('No post to list');
} // answer: 'List posts'

// if the array is empty, answer will still be 'List post'
// what we will do is check for the length of the array: if (post.length > 0)

const post = [];

if (post.length > 0)
{
    console.log('List post');
}
else
{
    console.log('No post to list');
} // answer: 'No post to list'

// Checking for empty object
const user = {
    name: 'Brad',
}

if (user)
{
    console.log('List User');
}
else
{
    console.log('No User');
} // answer: 'List User')

// if the object is empty, answer will still be 'List User'
// what we will do is check for the length of the keys of the object: if (Object.keys(user).length > 0)
const user2 = {}

if (Object.keys(user2).length > 0)
{
    console.log('List User');
}
else
{
    console.log('No User');
}
// answer: 'No User'

// Loose Equality (==)
console.log(false == 0); // answer: true
console.log('' == 0); // answer: true
console.log(null == undefined); // answer: true

// but with (===) this is because === checks for both type and value
console.log(false === 0); // answer: false
console.log('' === 0); // answer: false
console.log(null === undefined); // answer: false