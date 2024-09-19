// Write a function that takes an integer array nums and returns the second largest number 
// in the array. You can assume that the array has at least two distinct numbers.
// For example: Input: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
// Output: 6

// function secondLargest(num) {
//     num.sort();
//     const lenNum = num.length
//     return num[lenNum-2]
// }

// console.log(secondLargest([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));

function secondLargest(num) {
    // Remove duplicates using Set and then sort
    let uniqueNums = [...new Set(num)];
    uniqueNums.sort((a, b) => a - b);  // Sort in ascending order
    const lenNum = uniqueNums.length;
    
    return uniqueNums[lenNum - 2];  // Return the second largest
}

console.log(secondLargest([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // Output: 6

