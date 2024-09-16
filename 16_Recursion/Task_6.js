/* Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.  */
function isPalindrome(str) {
  // Base case: if the string length is 0 or 1, it is a palindrome
  if (str.length <= 1) {
    return true;
  }
  // Recursive case: Compare first and last characters, and check the middle part recursively
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

// Test cases
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("ab"));

function isArrayPalindrome(arr) {
  // Base case: If the array has 0 or 1 element, it's a palindrome
  if (arr.length <= 1) {
    return true;
  }
  // Recursive case: Compare first and last elements, and check the middle part recursively
  if (arr[0] === arr[arr.length - 1]) {
    return isArrayPalindrome(arr.slice(1, -1));
  } else {
    return false;
  }
}
console.log("Array Palindrome");

// Test cases
console.log(isArrayPalindrome([1, 2, 3, 2, 1])); // true
console.log(isArrayPalindrome([1, 2, 3, 4, 5])); // false
console.log(isArrayPalindrome(["a", "b", "a"])); // true
console.log(isArrayPalindrome(["a", "b", "c"])); // false
