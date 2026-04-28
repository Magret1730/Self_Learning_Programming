// PSEDOCODE
// Get the word
// Reverse the word
// Compare the word with the reversed word
// If same return true or else return false

function isPalindrome(word) {
	const normalizedWord = word.toLowerCase().replace(/[ ,]/g, "");
	const reversedWord = word.toLowerCase().replace(/[ ,]/g, "").split("").reverse().join("");

	if (normalizedWord === reversedWord) {
		return true;
	} else {
		return false;
	}
}

module.exports = isPalindrome;
