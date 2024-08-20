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
