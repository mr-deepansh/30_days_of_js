/* Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases. */

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function calculateDepth(node) {
  if (node === null) {
    return 0; // Base case: depth of an empty tree is 0
  }
  // Recursively find the depth of left and right subtrees and add 1 for the current node
  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:

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
//       \
//        2
//         \
//          3

const root2 = new TreeNode(1);
root2.right = new TreeNode(2);
root2.right.right = new TreeNode(3);

// Test Case 3:
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

console.log("Depth of the binary tree (root 1):", calculateDepth(root1)); // Output: 3
console.log("Depth of the binary tree (root 2):", calculateDepth(root2)); // Output: 3
console.log("Depth of the binary tree (root 3):", calculateDepth(root3)); // Output: 3
