//*  If-else statement
// ! Task 1
const x = 12;
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

//  ! Task 2
let age = 23;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//* Nested if-else statement

// ! Task 3
let score1 = 75;
let score2 = 65;
let score3 = 85;

if (score1 > score2) {
  if (score1 > score3) {
    console.log("score1 is the highest");
  } else {
    console.log("score3 is the highest");
  }
} else {
  if (score2 > score3) {
    console.log("score2 is the highest");
  } else {
    console.log("score3 is the highest");
  }
}

// * switch case

// ! Task 4
let day = 3;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

// ! Task 5
let score = 85;
let grade;
switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log(`Your grade is ${grade}`);

//* activity 4: Conditional (Ternary) Operator
// Write a program that uses the ternary operator to check if a number is even or odd and log the result to
// the console.

// ! Task 6
let number = 39;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(`The number ${number} is ${result}`);

// * Activity 5: Combining Conditions

// ! Task 7
let year = 2030;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// method 2

let leapYear =
  year % 4 === 0 ? (year % 100 !== 0 ? "Leap" : "Not Leap") : "Not Leap";
console.log(`${year} is a ${leapYear} year`);
