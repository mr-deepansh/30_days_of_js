/* Memoization : Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations..*/
function memoized(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

function sum(a, b) {
  console.log("Calculating sum...");
  return a + b;
}
const memoizedSum = memoized(sum);
console.log(memoizedSum(2, 3));

// ! 2

const memoize = (fn) => {
  const cache = {}; // Private cache object to store results
  return (...args) => {
    const key = JSON.stringify(args); // Create a unique key based on the function arguments
    if (cache[key]) {
      console.log(`Fetching from cache for args: ${key}`);
      return cache[key]; // Return cached result if it exists
    }
    console.log(`Calculating result for args: ${key}`);
    const result = fn(...args); // Compute the result
    cache[key] = result; // Store the result in the cache
    return result;
  };
};

// Example usage:
const slowFunction = (num) => {
  for (let i = 0; i < 1e6; i++) {} // Simulate a slow operation
  return num * 2;
};
const memoizedSlowFunction = memoize(slowFunction);
console.log(memoizedSlowFunction(5)); // First call, calculates and stores the result
console.log(memoizedSlowFunction(5)); // Second call, fetches the result from the cache
console.log(memoizedSlowFunction(10)); // Calculates and stores the result for new arguments
console.log(memoizedSlowFunction(5)); // Fetches the result from the cache again
