// whenever '&&' is used, everything has to be true to get true as answer
console.log(10 > 20 && 30 > 23); // answer: false
console.log(10 < 20 && 30 > 23); // answer: true

// whenever '||' is used, even if any is false as far as one is true, the answer will be true
console.log(10 > 20 || 30 > 23); // answer: true

// && - It will return first falsy value or last value
let a, b;

a = 10 && 45 && 56
console.log(a); // reurned last value i.e answer: 56

b = 10 && 0 && 67
console.log(b); // returned falsy value i.e answer: 0

const post = [];
console.log(post[0]); // answer: undefined

// to remove undefined, we can do this
const posts = [];
posts.length > 0 && console.log(posts[0]); // answer: 'nothing will be there'
// this is just that it helps you eradicate the 'undefined' showing on the console.


// || - It will return the first truthy value or last value
let c;

c = 10 || 20; // answer: 10
c = 0 || 50; // answer: 50
c = 0 || null || '' || undefined; // answer: undefined

console.log(c);


// ?? - It returns the right sideoperand when the left side is null or undefined
let d;

d = 10 ?? 20 // answer: 10
d = null ?? 30 // answer: 30
d = undefined ?? 40 // answer: 40
d = 0 ?? '' // answer: 0

console.log(d);