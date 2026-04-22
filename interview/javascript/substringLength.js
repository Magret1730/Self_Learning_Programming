// Question
// Problem: Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.


// Pseudocode
// Create a varibale to keep lengthSubstring and initialize to 0
// If substring does not includes s[i], push s[i] to substring
// If substring includes s[i] i.e duplication, compare the max length of the substring to lengthSubstring and store the max and remove all the elements in substring
// make remove all elements in the array and continue

const s = "abcabcbb";
// const s = "bbbbb";
// const s = "pwwkew";
// const s = "dvdf";

var lengthOfLongestSubstring = function (s) {
  let substring = [];
  let substringLength = 0;

  for (let i = 0; i < s.length; i++ ) {
    let ch = s[i];

    
    if (substring.includes(ch)) { // second a
      substringLength = Math.max(substringLength, substring.length);

        // remove all elements in substring
        // substring.length = 0;

        // removes all element in the starting position of the duplicated charaxcter
        while (substring.includes(ch)) {
          substring.shift()
        }

        substring.push(ch);
    } else {

      substring.push(ch);
      // substring = ["a", "b", "c"];
    }
  }

  substringLength = Math.max(substringLength, substring.length);

  console.log("The length of the longest substring is: " + substringLength);
};

lengthOfLongestSubstring(s);

// CHATGPT Optimized Solution
var lengthOfLongestSubstring = function (s) {
  const seen = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    // If duplicate, move left until ch is removed
    while (seen.has(ch)) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(ch);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring(s));
