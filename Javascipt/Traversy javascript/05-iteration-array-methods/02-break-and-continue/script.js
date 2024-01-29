// Break
for (i = 0; i <= 5; i++)
{
    if ( i === 3)
    {
        console.log('Breaking...');
        break;
    }
    console.log(i);
}

// Continue
for (j = 0; j <= 10; j += 2)
{
    if (j === 6)
    {
        console.log('Skipping 6...');
        continue;
    }
    console.log(j);
}