/* Task 11: Write a recursive function to calculate the sum of all nodes in a binary tree. Log the result for a few test cases. */
class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function calculateSum(node) {
  if (node === null) {
    return 0; // Base case: sum of an empty tree is 0
  }
  // Recursively find the sum of left and right subtrees and add the value of the current node
  const leftSum = calculateSum(node.left);
  const rightSum = calculateSum(node.right);
  return leftSum + rightSum + node.value;
}

// Test Case 1:
//        1
//       / \
//      2   3
//     /
//    4

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);

// Test Case 2:
//      1
//     / \
//    2   3
//       / \
//      4   5
const root3 = new TreeNode(1);
root3.left = new TreeNode(2);
root3.right = new TreeNode(3);
root3.right.left = new TreeNode(4);
root3.right.right = new TreeNode(5);

// Test Case 3:
//      1
//       \
//        2
//         \
//          3
const root2 = new TreeNode(1);
root2.right = new TreeNode(2);
root2.right.right = new TreeNode(3);

console.log("Sum of the binary tree (root 1):", calculateSum(root1)); // Output: 10
console.log("Sum of the binary tree (root 3):", calculateSum(root3)); // Output: 15
console.log("Sum of the binary tree (root 2):", calculateSum(root2)); // Output: 6
