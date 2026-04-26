function countOccurrences(word, letter) {
	// PSEUDOCODE
	// Get the word
	// loop through the word
	// get a count variable
	// increase the count for as many times the letter is seen

	// SOLUTION
	let splittedWord = word.split("");
	let count = 0;
	for (i = 0; i < splittedWord.length; i++) {
		if (letter === splittedWord[i]) {
			count++;
		}
	}
	return count;
}

module.exports = countOccurrences;
