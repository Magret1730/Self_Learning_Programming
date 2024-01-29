// Challenge one
function getCelsius(Fahrenheit)
{
    const celsius = Math.round((Fahrenheit - 32) * 5 / 9);
    console.log(`The temperature is ${celsius} \xB0C`);
};

getCelsius(100);

// Arrow function
const getCelsius2 = (Fahrenheit) => console.log(`The temperature is ${Math.round((Fahrenheit - 32) * 5 / 9)} \xB0C`);
getCelsius2(32);

// Challenge two
function minMax(...arr)
{
    const getMin = Math.min(...arr);
    const getMax = Math.max(...arr);
    return {min: getMin, max: getMax};
}

console.log(minMax(4, 7, 9, 2, 1, 0));

// Arrow function
const minMax2 = (...arr) => ({min: Math.min(...arr), max: Math.max(...arr)});
console.log(minMax2(6, 8, 90, 6, 1, 89));

// Challenge three
(function (length, width)
{
    const areaRectangle = length * width;
    console.log('The area of a rectangle with the length of ' + length + ' and a width of ' + width  + ' is ' + areaRectangle + '.');
})(4, 7);

// Arrow function
((length, width) => {
    const area = length * width;

    const output = `The area of a rectangle with the length of ${length} and a width of ${width} is ${area}.`
    console.log(output);
})(6, 2);