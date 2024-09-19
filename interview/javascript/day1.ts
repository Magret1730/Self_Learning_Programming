// Write a function that takes a string and returns True if the string is a palindrome
// (a word, phrase, or sequence that reads the same backward as forward,
// ignoring spaces, punctuation, and case), and False otherwise.
// For example:
// Input: "A man, a plan, a canal, Panama"
// Output: True

function isPalindromee(word: string): boolean{
  let newWord: string = word.trim().replace(/[\s,]/g, "").toLowerCase();
  // return newWord;
  return newWord === newWord.split('').reverse().join('');
}

function mainn(): void{
  console.log(isPalindrome(" a gooD, boy, "));
  console.log(isPalindrome("A man, a plan, a canal, Panama"));
}

mainn()
