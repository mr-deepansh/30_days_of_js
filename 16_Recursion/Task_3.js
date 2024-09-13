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
