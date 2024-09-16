/* Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.  */
class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(node) {
  if (node) {
    inOrderTraversal(node.left); // Visit the left subtree
    console.log(node.value); // Visit the root node
    inOrderTraversal(node.right); // Visit the right subtree
  }
}

// Constructing the binary tree:
//        4
//       / \
//      2   5
//     / \
//    1   3

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

// Perform in-order traversal
inOrderTraversal(root);
