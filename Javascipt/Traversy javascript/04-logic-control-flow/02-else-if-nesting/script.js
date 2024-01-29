const d = new Date(10, 30, 2024, 6, 9, 2);
const hour = d.getHours();

console.log(hour);

if (hour < 12)
{
    console.log('Good morning');
}
else if (hour < 18)
{
    console.log('Good afternoon');
}
else
{
    console.log('Good evening');
}

// Nested IF
if (hour < 12)
{
    console.log('Good morning');

    if (hour === 6)
    {
        console.log('Wake up');
    }
}
else if (hour < 18)
{
    console.log('Good afternoon');
}
else
{
    console.log('Good evening');

    if (hour >= 20)
    {
        console.log('Go to bed!!!');
    }
}

if (hour >= 9 && hour < 15)
{
    console.log('Work time');
}

if (hour === 6 || hour === 20)
{
    console.log('Brush teeth.');
}
