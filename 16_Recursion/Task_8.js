/* Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases. */
function countOccurrences(arr, target) {
  // Base case: If the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }
  // Recursive case: Check if the first element matches the target
  let count = arr[0] === target ? 1 : 0;
  // Recursive call on the remaining elements
  return count + countOccurrences(arr.slice(1), target);
  /* if (arr[0] === target) {
    return 1 + countOccurrences(arr.slice(1), target);
  } else {
    return countOccurrences(arr.slice(1), target);
  } */
}

// Test cases
console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2)); // Output: 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Output: 0
console.log(countOccurrences([5, 5, 5, 5, 5], 5)); // Output: 5
console.log(countOccurrences([], 2)); // Output: 0
