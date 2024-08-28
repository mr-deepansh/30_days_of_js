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

/* Recursion with Arrays:Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases. */
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}
let myArray = [1, 2, 3, 4, 5];
console.log(sumArray(myArray));
let myArray2 = [10, 20, 30];
console.log(sumArray(myArray2));
