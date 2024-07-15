// * Activity 1: Arithmetic Operations

let a = 32;
let b = 16;
const sum = a + b;
console.log("Task 1 Results:");
console.log(`Sum of ${a} and ${b} is: ${sum}`);

const subtract = a - b;
console.log("Task 2 Results:");
console.log(`Subtraction of ${a} and ${b} is: ${subtract}`);

const multiply = a * b;
console.log("Task 3 Results:");
console.log(`Multiplication of ${a} and ${b} is: ${multiply}`);

const divide = a / b;
console.log("Task 4 Results:");
console.log(`Division of ${a} and ${b} is: ${divide}`);

const reminder = a % b;
console.log("Task 5 Results:");
console.log(`Reminder of ${a} and ${b} is: ${reminder}`);

//* Activity 2: Assignment Operators

let number = 10;
number += 5;
console.log("Task 6 Results:");
console.log(`+= number: ${number}`);

number -= 6;
console.log("Task 7 Results:");
console.log(`-= number: ${number}`);

// * Activity 3: Comparison Operators

// ! Compare two numbers using > (greater than) and < (less than)

let num1 = 10;
let num2 = 20;

console.log("Task 8 Results:");
console.log(num1 > num2); // false
console.log(num1 < num2); // true

let num3 = 15;
let num4 = 15;

console.log("Task 9 Results:");
console.log(num3 >= num4); // true
console.log(num3 <= num4); // true

let num5 = 25;
let num6 = "25";

console.log("Task 10 Results:");
console.log(num5 == num6); // true
console.log(num5 === num6); // false

// * Activity 4: Logical Operators

// ! Logical AND (&&) operator

let firstNumber = 10;
let secondNumber = 20;
let thirdNumber = 30;
console.log("Task 11 Results:");
console.log(firstNumber < secondNumber && secondNumber < thirdNumber); // true

// ! Logical OR (||) operator
console.log("Task 12 Results:");
console.log(firstNumber < secondNumber || secondNumber > thirdNumber);

// ! Logical NOT (!) operator
console.log("Task 13 Results:");
console.log(!(firstNumber < secondNumber));

// * Activity 5: Ternary Operator

let age = 20;
let isAdult = age >= 18 ? "You are an adult" : "You are not an adult";
console.log("Task 14 Results:");
console.log(isAdult);
