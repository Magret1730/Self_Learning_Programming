const age = 18;

// Using if statement
if (age >= 18)
{
    console.log('You can vote.');
}
else
{
    console.log('You cannot vote.');
}

// Using ternary operator
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');
// ? means if               : means else
// if the conditional 'age >= 18' is true then 'console.log('You can vote')' else 'console.log('You cannot vote')'


// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote.' : 'You cannot vote.'
console.log(canVote);
console.log(canVote2);

// Multiple statement
const authenticate = true;
/*
let redirect;

if (authenticate)
{
    alert('Welcome to Dashboard!!!');
    redirect = '/dashboard';
}
else
{
    alert('Access Denied');
    redirect = '/login';
}
*/
// A shorter way to write the long code above using ternary operator '?', ':'
/*
const redirect = authenticate
 ? (alert('Welcome to Dashboard'), '/dashboard')
 : (alert('Access Denied'), '/login');
console.log(redirect);
*/

// If there is no else after the if in the code, we can use either of this two methods
authenticate ? console.log('Welcome to Dashboard') : null;
authenticate && console.log('Welcome to Dashboard');
