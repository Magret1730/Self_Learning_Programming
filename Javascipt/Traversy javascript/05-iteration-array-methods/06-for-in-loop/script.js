// For In Loop is used to iterate over object literals
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'green',
    color4: 'yellow'
}
for (key in colorObj)
{
    console.log(key, colorObj[key]);
}

// With an Array
const colorArray = ['red', 'blue', 'yellow', 'green', 'violet'];
for (color in colorArray)
{
    console.log(color);
} // 'answer: 0 1 2 3 4' which are the keys to the array

// to get the values
const colorArray2 = ['red', 'blue', 'yellow', 'green', 'violet'];
for (key in colorArray2)
{
    console.log(colorArray2[key]);
}
