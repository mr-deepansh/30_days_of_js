// * Activity 1: Variable Declaration
var number = 45;
console.log(`number: ${number}`);

let myStr = "Hello coders! How are you?";
console.log(`myStr: ${myStr}`);

// * Activity 2: Constant Declaration
const myConst = true;
console.log(`myConst: ${myConst}`);

// * Activity 3: Data Types

// String
let myName = "Ankita";
console.log(`myName: ${myName} Data type is: ${typeof myName}`);

// Number
const myAge = 25;
console.log(`myAge: ${myAge} Data type is: ${typeof myAge}`);

// Boolean
let isStudent = true;
console.log(`isStudent: ${isStudent} Data type is: ${typeof isStudent}`);

// Array
let myArray = [1, 2, 3, 4, 5];
console.log(`myArray: ${myArray} Data type is: ${typeof myArray}`);

// Object
let myObject = {
  name: "Ankita",
  age: 25,
  isStudent: true,
};
console.log(
  `myObject: ${JSON.stringify(myObject)} Data type is: ${typeof myObject}`
);

// Null
let myNull = null;
console.log(`myNull: ${myNull} Data type is: ${typeof myNull}`);

// undefined
let myUndefined;
console.log(`myUndefined: ${myUndefined}, type: ${typeof myUndefined}`);

// * Activity 4: Reassigning Variables

let myVar = 10;
console.log(`myVar: ${myVar}`);
myVar = "Hello";
console.log(`myVar: ${myVar}`);

// * Activity 5: understanding const

const myConstVar = 10;
console.log(`myConstVar: ${myConstVar}`);
// myConstVar = 20;
// console.log(`myConstVar: ${myConstVar}`);
