/* 
! extra code  for understanding purpose of closures 
function autoSaveFeature() {
  let lastSavedTime = null;

  function save(content) {
    // Simulate saving the content (e.g., to a server or local storage)
    console.log(`Content saved: ${content}`);
    lastSavedTime = new Date().toLocaleTimeString();
  }

  return {
    saveContent: function (content) {
      save(content);
    },
    getLastSavedTime: function () {
      return lastSavedTime
        ? `Last saved at: ${lastSavedTime}`
        : "Content not saved yet.";
    },
  };
}

// Initialize the auto-save feature
const editorAutoSave = autoSaveFeature();

// Simulate typing in the editor
let content = "Hello, world!";
console.log(editorAutoSave.getLastSavedTime()); // Output: "Content not saved yet."

// Auto-save the content every 5 seconds
setInterval(() => {
  editorAutoSave.saveContent(content);
  console.log(editorAutoSave.getLastSavedTime()); // Output: Last saved time
}, 5000);

// Simulate content change after 10 seconds
setTimeout(() => {
  content = "Hello, world! Updated content!";
}, 10000);
  
*/

/* 
Understanding Closures :Task 1: Write a function that returns another function where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result 
*/
function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const greetHello = createGreeting("Hello");
console.log(greetHello("Alice"));

/* 
Understanding Closures:Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
*/
function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());

/* 
Practical Closures : Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call
*/
function createUniqueIdGenerator() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId++;
    return lastGeneratedId;
  };
}
const generateUniqueId = createUniqueIdGenerator();
console.log(generateUniqueId());
console.log(generateUniqueId());

/* 
Practical Closures :Task 4: Create a closure that captures a user's name and returns a function that greets the user by name
*/
function greetUser(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}
const greetAlice = greetUser("Alice");
console.log(greetAlice());

/* 
Closures in Loops: Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index. 
*/

function createCart() {
  let totalItems = 0;
  let totalCost = 0;

  return {
    addItem: function (itemName, price) {
      totalItems += 1;
      totalCost += price;
      console.log(
        `${itemName} added to cart. Total items: ${totalItems}, Total cost: $${totalCost.toFixed(
          2
        )}`
      );
    },
    getCartSummary: function () {
      return `You have ${totalItems} items in your cart, costing a total of $${totalCost.toFixed(
        2
      )}.`;
    },
  };
}

const myCart = createCart();

myCart.addItem("Laptop", 999.99);
myCart.addItem("Headphones", 199.99);
myCart.addItem("Mouse", 49.99);
console.log(myCart.getCartSummary());

// ! example second
const functionArray = [];

for (let i = 0; i < 5; i++) {
  functionArray.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i)
  );
}

functionArray[0]();
functionArray[1]();
functionArray[2]();
functionArray[3]();
functionArray[4]();
