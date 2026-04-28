// Math is available globally in JavaScript.

function findMaxNumber(numbers) {
	// Using "for loop" solution - Pseudocode
	// 1. Loop through the array
	// 2. Declare a variable and initialize it with the first number in the array
	// 3. Compare it with the next mnum in the array and store the largest
	// 4. Do that till the end of the array
	// SOLUTION
	// maxNum = numbers[0];
	// for (i = 1; i < numbers.length; i++) {
	//   if (maxNum < numbers[i]) {
	//     maxNum = numbers[i];
	//   }
	// }
	// return maxNum;


	// Using "in built max" solution - Pseudocode
  let maxNum = Math.max(...numbers);

  return maxNum;
}

module.exports = findMaxNumber;
