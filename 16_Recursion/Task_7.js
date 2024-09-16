/* Recursive Search : Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.  */

function binarySearch(arr, target, start, end) {
  // Base case: If start index exceeds the end index, target is not found
  if (start > end) {
    return -1;
  }
  // Calculate the middle index
  let mid = Math.floor((start + end) / 2);
  // Base case: If the middle element is the target, return the index
  if (arr[mid] === target) {
    return mid;
  }
  // Recursive case: Search in the left half if the target is smaller than the middle element
  if (target < arr[mid]) {
    return binarySearch(arr, target, start, mid - 1);
  }
  // Recursive case: Search in the right half if the target is larger than the middle element
  return binarySearch(arr, target, mid + 1, end);
}

function performBinarySearch(arr, target) {
  return binarySearch(arr, target, 0, arr.length - 1);
}
// Test cases
console.log(performBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // Output: 4
