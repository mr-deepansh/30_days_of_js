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
