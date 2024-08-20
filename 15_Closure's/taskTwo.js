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
