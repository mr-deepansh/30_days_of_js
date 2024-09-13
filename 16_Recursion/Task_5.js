/*  String Manipulation with Recursion : Task 5: Write a recursive function to reverse a string. Log the result for a few test cases */

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
  }
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("Deepansh")); // Output: "hsnapeeD"
console.log(reverseString("recursion")); // Output: "noisrucer"
