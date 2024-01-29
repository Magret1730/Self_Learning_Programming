/* ||= assigns the right side value only if the left side is  falsy value */

let a = false;
if (!a) // this means 'if a is false, assign a to be 20'
{
    a = 20;
}
console.log(a); // answer: 20

// short form for this is
let b;
b = b || 10; // if the second b is falsy, set the right hand side which is 10.
console.log(b); // answer: 10

// a more shorter way
let c;
c ||= 40;
console.log(c);

/* &&= assigns the right side value only if the left side is truthy value */
let d = 56;
if (d)
{
    d = 67;
}
console.log(d); // answer: 67

// a more shorter way
let e = 90;
e = e && 897;
console.log(e); // answer: 897

// a more shorter way
let f = 908;
f &&= 40;
console.log(f); // answer: 40


/* ??= assigns the right side value only if the left side is truthy value */
let g = null;
if (g === null || g === undefined)
{
    g = 67;
}
console.log(g); // answer: 67

// a more shorter way
let h = null;
h = h ?? 897;
console.log(h); // answer: 897

// a more shorter way
let i = undefined;
i ||= 40;
console.log(i); // answer: 40