// Linked List
/* Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes. */
class Node {
  constructor(value) {
    this.value = value; // Node ka data
    this.next = null; // Next node ka reference, initially null
  }
}

class LinkedList {
  constructor() {
    this.head = null; // List ke pehle node ka reference (head), initially null
    this.size = 0; // Linked List ka size
  }

  // Method to add a new node at the end
  add(value) {
    let newNode = new Node(value); // Naya node banate hain
    if (this.head === null) {
      this.head = newNode; // Agar list khali hai to head naya node banega
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next; // List ke last node tak pahuchte hain
      }
      current.next = newNode; // Last node ka next ab naya node hoga
    }
    this.size++; // Size ko update karte hain
  }

  // Method to remove a node from the end
  remove() {
    if (this.head === null) {
      console.log("List is empty, nothing to remove.");
      return;
    }

    // Agar sirf ek hi node ho
    if (this.head.next === null) {
      this.head = null; // Head ko null kar do
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        // Second-last node tak pahuche
        current = current.next;
      }
      current.next = null; // Last node ko remove kar do
    }
    this.size--; // Size ko update karo
  }

  // Method to display all nodes
  display() {
    if (this.head === null) {
      console.log("List is empty.");
      return;
    }

    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.value + " -> "; // Node values ko concatenate karte hain
      current = current.next; // Agle node par move karte hain
    }
    console.log(result + "null"); // Null list ke end ko represent karta hai
  }
}

// Linked List ka use karna
let list = new LinkedList();
list.add("mango");
list.add("apple");
list.add("orange");
list.add("banana");

list.display(); // Output: mango -> apple -> orange -> banana -> null

list.remove(); // Last node (banana) ko remove karna
list.display(); // Output: mango -> apple -> orange -> null
