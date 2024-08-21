/* Memoization: Task 8: Create a memoized version of a function that calculates the factorial of a number. */
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));
