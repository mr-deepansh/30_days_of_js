/*  Basic Recursion: Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases. */
function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
