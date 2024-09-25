//  Linked List
/* Task 1: Implement a Node class to represent an element in a linked list with properties value and next . */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
let firstNode = new Node(7);
let secondNode = new Node(11);
firstNode.next = secondNode;
console.table(firstNode);

// ! Random Testing Linked List
/* 
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  search(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
} 

let list = new LinkedList();
list.add("mango");
list.add("apple");
list.add("orange");
list.add("banana");

if (list.search("orange")) {
  console.log("Found: orange");
} else {
  console.log("Not found: orange");
}

*/
