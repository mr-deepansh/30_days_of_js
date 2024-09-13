/*  Recursion with Arrays: Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases */
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let max = findMax(arr.slice(1));
    return arr[0] > max ? arr[0] : max;
  }
}
let myArray3 = [1, 7, 3, 4, 5];
console.log(findMax(myArray3));
