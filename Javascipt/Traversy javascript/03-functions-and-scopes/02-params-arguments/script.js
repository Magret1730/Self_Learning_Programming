// Default parameters
function registerUser (user = 'Bot')
{
    /*
    if (!user) // this chunk of code or pass it as a parameter to the function
    {           // i.e user = 'Bot'
        user = 'Bot';
    }
    */
    return user + ' is registered.';
}
console.log(registerUser());

// Rest parameters
function sum(...numbers)
{
    return numbers;
}
console.log(sum(1, 4, 8));

function sum2(...numbers)
{
    let total = 0;

    for (const num of numbers)
    {
        total += num;
        // console.log(total);
    }

    return total;
}
console.log(sum2(5, 8, 7, 9));

// objects as parameters
function loginUser(user)
{
    return `${user.name} with id ${user.id} is logged in.`;
}

const user = {
    id: 1,
    name: 'John'
};

console.log(loginUser(user)); // or
console.log(loginUser({id: 2, name: 'Sara'}));

// Arrays as parameters
function getRandom(...arr)
{
    const randomIndex = Math.floor(Math.random() * arr.length); // this gives us index of the item

    console.log(arr.length);
    
    console.log(randomIndex);
    
    const item = arr[randomIndex];

    console.log(item);
}

getRandom(4, 8, 90, 87, 65);

/* or this
function getRandom(arr)
{
    const randomIndex = Math.floor(Math.random() * arr.length); // this gives us index of the item

    console.log(arr.length);
    
    console.log(randomIndex);
    
    const item = arr[randomIndex];

    console.log(item);
}

getRandom([4, 8, 90, 87, 65]);
*/
