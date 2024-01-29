const x = 10;
var foo = 2; // when you globally declare var, it gets added to the window object
// to confirm. enter 'window' in the console of chrome and you will see it there.

if (true)
{
    const y = 20;
    console.log(x + y);
}

for (let i = 0; i <= 5; i++)
{
    console.log(i);
}

if (true)
{
    const a = 3;
    let b = 4;
    var c = 5;
}

console.log(c); // var is not block scoped. That means you can access it outside the block of code unlike let and const

// var is function scoped i.e when var is used inside a function, you can't access it outside the function
function run()
{
    var d = 100;
    console.log(d);
}
run();

// console.log(d); //this will give error becase 'var d' is defined inside a function

