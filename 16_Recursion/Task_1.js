/*  Basic Recursion: Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases */
function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
