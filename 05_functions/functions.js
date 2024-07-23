// Day 5: Functions

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkOddEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number.`);
  } else {
    console.log(`${num} is an odd number.`);
  }
}
checkOddEven(2); // Output: 2 is an even number.
checkOddEven(3); // Output: 3 is an odd number.

// Task 2: Write a function to calculate the square of a number and return the result

function squareNumber(num) {
  return num * num;
}

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console

let findMax = function (num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is the maximum number.`);
  } else {
    console.log(`${num2} is the maximum number.`);
  }
};
findMax(5, 10); // Output: 10 is the maximum number.

// Task 4: Write a function expression to concatenate two strings and return the result

let concatString = function (str1, str2) {
  return str1 + str2;
};
console.log(concatString("Hello", " World")); // Output: Hello World

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result

let sumOfNumbers = (num1, num2) => num1 + num2;
console.log(sumOfNumbers(5, 10)); // Output: 15

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value

let checkChar = (str, char) => str.includes(char);
console.log(checkChar("hello", "e")); // Output: true
console.log(checkChar("hello", "c")); // Output: false

// method two

const containsCharacter = (str, char) => str.includes(char);
const result1 = containsCharacter("Hello, world!", "w");
const result2 = containsCharacter("Hello, world!", "z");
console.log(result1);
console.log(result2);

/*  Task 7: Write a function that takes two parameters and returns their product.Provide a default value for 
 the second parameter */

let productOfNumbers = function (num1, num2 = 1) {
  return num1 * num2;
};
const result3 = productOfNumbers(5, 10);
const result4 = productOfNumbers(5);
console.log(result3);
console.log(result4);

/* Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a 
default value for the age */

let greetPerson = function (name, age = 18) {
  return `Hello ${name}, you are ${age} years old.`;
};
let greeting1 = greetPerson("John", 40);
let greeting2 = greetPerson("Harry");
console.log(greeting1);
console.log(greeting2);

/* Task 9: Write a higher-order function that takes a function and a number, and calls the function that 
many times */

let repeat = function (func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
};
let sayHello = function () {
  console.log("Hello");
};
repeat(sayHello, 3);

// example 2

function createGreeting(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}

const greetMorning = createGreeting("Good morning");
const greetAfternoon = createGreeting("Good afternoon");
const greetEvening = createGreeting("Good evening");

greetMorning("John");
greetAfternoon("Harry");
greetEvening("Sam");

/* Task I0: Write a higher-order function that takes two functions and a value, applies the first function to 
the value, and then applies the second function to the result */

let higherOrder = function (func1, func2, value) {
  return func2(func1(value));
};
let add = function (value) {
  return value + 5;
};
let multiply = function (value) {
  return value * 2;
};
let result = higherOrder(add, multiply, 20);
console.log(result);

// example 2

function applyFunctions(func1, func2, func3, value) {
  return func3(func2(func1(value)));
}

const addOne = (x) => x + 1;
const square = (x) => x * x;
const minessone = (x) => x - 1;

const finalResult = applyFunctions(addOne, square, minessone, 5);
console.log(finalResult); // Output: 36
