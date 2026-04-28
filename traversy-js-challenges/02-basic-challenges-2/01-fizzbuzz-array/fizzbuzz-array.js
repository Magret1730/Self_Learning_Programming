// PSEUDOCODE
// 1. Get the number
// 2. I can probably use splice to get beginning of the array
//    which is constant 1 and end array
// 3. If the number is divisible by 3 and 5, print out "FizzBuzz"
// 4. If the number is divisible by 5, print out "Buzz"
// 5. If the number is divisible by 3, print out "Fizz"

function fizzBuzzArray(number) {
	const newArray = [];

	for (i = 1; i <= number; i++) {
		if ((i % 3 === 0) && (i % 5 === 0)) {
			newArray.push("FizzBuzz");
		} else if (i % 5 === 0) {
			newArray.push("Buzz");
		} else if (i % 3 === 0) {
			newArray.push("Fizz");
		} else {
			newArray.push(i);
		}
	}

  return newArray;
}

module.exports = fizzBuzzArray;
