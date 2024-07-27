// Day 8: ES6+ Features

/* Task 1: Use template literals to create a string that includes variables for a person’s name and age, and log 
the string to the console. */
let name = "John";
let age = 25;
let person = `My name is ${name} and I am ${age} years old.`;
console.log(person);

/*  Task 2: Create a multi-line string using template literals and log it to the console. */
let multiLineString = `This is a
multi-line
string.`;
console.log(multiLineString);

/* Task 3: Use array to extract the first and second elements from an array of numbers and log them to the 
console */
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(first, second);

/* Task 4 : Use object destructuring to extract the title and author from a book object and log them to the 
console.*/
let book = {
  title: "Ramayan",
  author: "Valmiki",
};
let { title, author } = book;
console.log(title, author);

/* Task 5: Use the spread operator to create a new array that includes all element’s of an existing array plus 
additional elements, and log the new array to the console.
 */
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

/* Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and 
return the result. */
function sum(...arg) {
  return arg.reduce((acc, curr) => acc + curr);
}
let result = sum(1, 2, 3, 4, 5);
console.log(`Sum of numbers is ${result}`);

/* Task 7 : Write a function that takes two parameters and returns their products, with the second parameter 
having a default value of 1. Log the result of calling this function with and without the second parameter. */
function product(a, b = 1) {
  return a * b;
}
console.log(product(5, 2));
console.log(product(5));

/* Task 8 : Use enhanced object literals to create an object with methods and properties, and log the object to 
the console. */
let person1 = {
  name: "John",
  age: 25,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
person1.greet();

// method 2
let firstName = "john";
let lastName = "doe";
const yearOld = 25;

const details = { firstName, lastName, yearOld };
console.log(details);

/* Task 9 : Create an object with computed property names based on variables and log the object to the 
console. */
let key = "name";
let value = "John";
let obj = {
  [key]: value,
};
console.log(obj);

// method 2
let key1 = "age";
let value1 = 25;
let obj1 = {
  [key1]: value1,
};
console.log(obj1);
