// Question
// Problem: Valid Parentheses
// Given a string s containing only the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.
// A string is valid if:
// Open brackets are closed by the same type of brackets.
// Open brackets are closed in the correct order.
// Every closing bracket has a corresponding opening bracket.
// 1. Input: s = "()";
// Output: true;
// 2. Input: s = "()[]{}";
// Output: true;
// 3. Input: s = "(]";
// Output: false;
// 4. Input: s = "([)]";
// Output: false;
// Constraints:
// 1 <= s.length <= 10^4
// s consists only of brackets ()[]{}

// Pseudocode
// Put () in an array, same with {} and [] e.g; const bracket = ();
// Loop through the given input
// If bracket[0] is present, confirm the next loop contains bracket[1] if yes, return true; 
// If false,
// shift the first character
// Loop through again the input ... process continues and if no till the end; return false

// function validParenthesis(s) {

// }

var isValid = function(s) {
  const bracket = ['(', ')'];
  const curlyBracket = ['{', '}'];
  const squareBracket = ['[', ']'];

  for (let i = 0; i < s.length; i++) {
    
  }
};