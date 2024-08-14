import _ from "lodash";
///

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

/* Task 4: Create a module that exports a single function using default export. Import and use this function in another script */

import divide from "./module1.js";
console.log(divide(6, 3));
console.log(divide(6, 0));

/*  Importing Entire Modules : Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties. */
import * as mathOps from "./mathOperations.js";

// Using the constants
console.log(`Value of PI: ${mathOps.PI}`);
console.log(`Value of E: ${mathOps.E}`);
// Using the functions
console.log(`Addition of 5 and 3: ${mathOps.add(5, 3)}`);
console.log(`Multiplication of 5 and 3: ${mathOps.multiply(5, 3)}`);
console.log(`Subtraction of 5 from 10: ${mathOps.subtract(10, 5)}`);
console.log(`Division of 10 by 2: ${mathOps.divide(10, 2)}`);

/*  Using Third-Party Modules: Task 6: Install a third-party module (e.g., Iodash ) using npm. Import and use a function from this module in a script */
const lowerCaseString = "hello world";
const capitalizedString = _.capitalize(lowerCaseString);

console.log(capitalizedString);
