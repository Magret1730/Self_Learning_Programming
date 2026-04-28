// PSEUDOCODE
// 1. Get all vowels
// 2. Initialize count variable
// 3. Iterate throught the word
// 4. Check if it contains any of the vowels
// 5. Increase count
// 6. Return count

function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  const wordLowerCase = word.toLowerCase();

  for (let i = 0; i < wordLowerCase.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (wordLowerCase[i] === vowels[j]) {
        count++;
      }
    }
  }

  return count;
}

module.exports = countVowels;
