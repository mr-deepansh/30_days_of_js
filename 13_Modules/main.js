import { add, person } from "./module1.js";
/*  Creating and Exporting Modules : Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script */
// console.log(add(2, 3));
const result = add(2, 6);
console.log(`The sum of 2 and 6 is ${result}`);

/*  Creating and Exporting Modules : Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script */
console.log(person.greet());

/* Named and Default Exports : Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script*/
import { multiply, subtract } from "./module1.js";
console.log(multiply(2, 3));
console.log(subtract(6, 3));
