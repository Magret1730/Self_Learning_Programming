let x;

const arr = [12, 56, 89, 67, 90];
// arr.push('good'); // adds value to the end of the array

// arr.pop(); // removes the last value at the end of the array

// arr.unshift(true); // adds element to the beginning of the array

// arr.shift(); // removes element from the beginning if the array

// arr.reverse(); // reverses elements of the array

// console.log(arr);

x = arr.includes(12); // it checks to see if an element e.g 12 is in the array. it returns true or false

x = arr.indexOf(90); // gets the index of an element in an array

x = arr.slice(1); // it gives every elements of the array from index 1 to the end

x = arr.slice(1, 4); // it gives every elements of the array from index 1 to the 3rd i.e 4 - 1 = 3.
// x = [56, 89, 67] arr = [12, 56, 89, 67, 90]]

// uncomment the splice to see how it works
// slice doesnt change the array but splice does. splice plugs out the values you want
// from the array and the other values is what is left in the array

// x = arr.splice(1, 3);
// x = [56, 89, 67] arr = [12, 90] it takes out the values of the splice from the array permanently

// x = arr.splice(3, 1); // removing a single element from an array. The 3 is the position and 1 is indicating one element is to be removed.
// x = [67] arr = [12, 56, 89, 90]

// x = arr.splice(1, 3);
// for the splice, 1 is the position to start splicing from and 3 tells it ti pick a total of 3 elements starting from position 1 in the array.
// x = [56, 89, 67]

x = arr.splice(1, 3).reverse().toString().charAt(1);


// console.log(x, arr);
console.log(x);