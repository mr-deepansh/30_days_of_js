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

//* frequent questions

let number1 = 30;
let number2 = 20;

let sum1 = number1 + number2;
let difference = number1 - number2;
let multiple = number1 * number2;
let division = number1 / number2;
let remind = number1 % number2;

console.log("Task 15 Results:");
console.log(`Sum of ${number1} and ${number2} is: ${sum1}`);
console.log(`Difference of ${number1} and ${number2} is: ${difference}`);
console.log(`Multiple of ${number1} and ${number2} is: ${multiple}`);
console.log(`Division of ${number1} and ${number2} is: ${division}`);
console.log(`Remind of ${number1} and ${number2} is: ${remind}`);

// comparison and logical operators

let num7 = 10;
let num8 = 20;

console.log("Task 16 Results:");
console.log(`Is ${num7} greater than ${num8} : ${num7 > num8}`);
console.log(`Is ${num7} less than ${num8} : ${num7 < num8}`);
console.log(`Is ${num7} greater than or equal to ${num8} : ${num7 >= num8}`);
console.log(`Is ${num7} less than or equal to ${num8} : ${num7 <= num8}`);
console.log(`Is ${num7} equal to ${num8} : ${num7 == num8}`);
console.log(`Is ${num7} equal to ${num8} : ${num7 === num8}`);

// conditional operator && || !

let condition1 = num7 > 7;
let condition2 = num8 < 30;
console.log("Task 17 Results:");
console.log(`Both conditions are true : ${condition1 && condition2}`);
console.log(`At least one condition is true : ${condition1 || condition2}`);
console.log(`Negation of the condition: ${!condition1}`);

// ternary operator

let num9 = 30;
let num10 = 40;

console.log("Task 18 Results:");
let result =
  num9 > num10 ? "Number 1 [ 30 ] is greater" : "Number 2 [ 40 ] is greater";
console.log(result);
