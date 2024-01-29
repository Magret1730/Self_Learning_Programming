// alert('Hello'); // or window.alert('Hello');

// console.log(innerWidth); // or console.log(window.innerWidth);

const x = 100;
console.log(x, 'in global');

function run()
{
    console.log(window.innerHeight);
    console.log(x, 'in function');
}
run();

if (true)
{
    console.log(x, 'in block');
}

function add()
{
    const x = 6; // function scope x overrights global scope x in a function. This is called VARIABLE SHADOWING.
    const y = 50;
    console.log(y, 'function scope');
    console.log(x + y);
}
add();
