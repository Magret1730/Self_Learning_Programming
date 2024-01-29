// challenge 1
const arr = [1, 2, 3, 4, 5]

arr.push(6);
arr.unshift(0);
arr.reverse();

// console.log(arr);


// challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// solution 1
// arr1.pop(5);

// const arr3 = [...arr1, ...arr2];

// solution 2
// const arr4 = arr1.splice(0, 4).concat(arr2)

// solution 3
const arr5 = [...arr1, ...arr2];
arr5.splice(4, 1)

// console.log(arr3);
// console.log(arr4);
console.log(arr5);