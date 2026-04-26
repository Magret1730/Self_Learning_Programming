// PSEUDOCODE
// 1. Get the sentence
// 2. Split it using space
// 3. Get the first letter of each word in the sentence already splitted
// 4. Turn it to uppercase
// 5. Join the words back with space
// 6. Return it

function titleCase(sentence) {
	let words = sentence.split(" ");
	let newWords = [];

	for (i = 0; i < words.length; i++) {
		// newWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1)); OR
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}

	// return newWords.join(" "); OR
  return words.join(" ");
}

module.exports = titleCase;
