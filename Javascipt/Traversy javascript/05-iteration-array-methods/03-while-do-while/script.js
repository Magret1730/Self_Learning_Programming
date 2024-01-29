let i = 0;

while (i <= 5)
{
    console.log(`Number ${i}`);
    i++;
}

// Loop over array
let arr = [11, 14, 78, 90, 75];
let j = 0;

while (j < arr.length)
{
    console.log(arr[j]);
    j++;
}

// Nesting while loop
let k = 1;
while (k <= 5)
{
    console.log('Number ' + k);

    let l = 1;
    while (l <= 5)
    {
        console.log(`${k} * ${l} = ${k * l}`);
        l++;
    }
    k++;
}

// Do While loop will always run once even if the condition is false
let m = 1;
do
{
    console.log('Number ' + m);
    m++;
} while (m <= 5);

let n = 10;
do
{
    console.log('Number ' + n);
    n++;
} while (n <= 5);

