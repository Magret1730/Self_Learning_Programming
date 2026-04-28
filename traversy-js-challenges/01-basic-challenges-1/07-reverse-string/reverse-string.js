// PSEUDOCODE
// MANUALLY
// 1. Get the word
// 2. Loop through the word
// 3. Push into a new variable from the last word
// 4. Return the word

function reverseString(word) {
  let reversedWord = [];

  for (i = word.length; i >= 0; i--) {
    reversedWord.push(word[i]);
  }

  return reversedWord.join('');
}

// BUILT-IN
// const reverseString = (word) => word.split('').reverse().join('');

module.exports = reverseString;
