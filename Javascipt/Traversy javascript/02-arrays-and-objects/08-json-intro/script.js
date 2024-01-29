// json - javascript object notation

const post = {
    id: 1,
    title: 'post one',
    body: 'This is the body'
}

// Convert to json string
const str = JSON.stringify(post); // stringify will turn an object into a json string

// you cant access a property that has been stringified to JSON.
// what you do is, you parse it to object literal and then access it.

console.log(str);

// LOCAL STORAGE is a way to store things in your browswer i.e on your client
// and it can only store a string
// WHAT TO DO. stringify your object, put it into local storage and when you take it out,
// you will parse it back into object.

// parse JSON i.e to get object literal
const obj = JSON.parse(str);

console.log(obj);

// array 
const posts = [
    {
        id: 1,
        title: 'post one',
        body: 'This is the body'
    },
    {
        id: 2,
        title: 'post two',
        body: 'This is the body'
    }
];

const str2 = JSON.stringify(posts);

console.log(str2);

const obj2 = JSON.parse(str2);

console.log(obj2);
