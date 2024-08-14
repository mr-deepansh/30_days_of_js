/*  Creating and Exporting Modules : Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script */
const add = (a, b) => a + b;

/*  Creating and Exporting Modules : Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script */
const person = {
  name: "John",
  profession: "Web Developer",
  greet: function () {
    return `Hello, my name is ${this.name} and my profession is  a ${this.profession}`;
  },
};

/* Named and Default Exports : Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script*/
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;

export { add, person };

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

export default divide;
