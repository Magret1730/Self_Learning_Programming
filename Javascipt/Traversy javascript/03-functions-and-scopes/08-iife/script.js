(function () {
    const user = 'Larry';
    console.log(user);
    const hello = () => console.log(`Hello from the IIFE`);
    hello(); // to invoke hello()
})(); // '()' is to invoke it.

(function (name)
{
    console.log('Hello ' + name);
})('Shawn');  // inside the invoking parenthesis, that is where you put the arguments.


// Named function IIFE
(function hello()
{
    console.log('Hello');
    // hello();  // DON'T DO THIS BECAUSE IT IS A RECURSION.
})();
