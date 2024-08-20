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

/* Understanding Closures :Task 1: Write a function that returns another function where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result */
function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const greetHello = createGreeting("Hello");
console.log(greetHello("Alice"));

/* Understanding Closures:Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.*/
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
