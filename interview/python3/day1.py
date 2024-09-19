# Write a function that takes a string and returns True if the string is a palindrome
# (a word, phrase, or sequence that reads the same backward as forward,
# ignoring spaces, punctuation, and case), and False otherwise.
# For example:
# Input: "A man, a plan, a canal, Panama"
# Output: True

def isPalindrome(word: str) -> bool:
  """
    A function that return true if the argument is a palindrome
  """
  """
    PSEUDOCODE
    - Remove the space and comma from the whole statement
    - Divide the word into two.
    - If the length of the word has int(word.length) % 2 == 1:
      - pick the middle word
      - else leave it as it is
    - Reverse the second half of the word
    - Compare the two halfs
    - If they are the same, return True otherwise return False
  """
  newWord = word.strip().replace(",", "").replace(" ", "").lower()
  # return newWord

  # Divide the word into two halves
  # wordLength = len(newWord) # 8
  # halfWordLength = wordLength // 2 # 4
  # firstHalf = newWord[0: halfWordLength]
  # if wordLength % 2 == 0:
  #   secondHalf = newWord[halfWordLength: wordLength]
  # else:
  #   secondHalf = newWord[halfWordLength - 1: wordLength]
  # reverseSecondHalf = secondHalf.reverse()

  newWordReverse = newWord[::-1]

  if newWord == newWordReverse:
    return True
  else:
    return False

def main():
  print(isPalindrome("   man, Is a, boY   "))
  print(isPalindrome("A man, a plan, a canal, Panama"))

if __name__ == "__main__":
  main()
    