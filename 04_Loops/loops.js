// * for loop

// ! Task 1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// * • Task 2: Write a program to print the multiplication table of 5 using a for loop.
// ! Task 2
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

//* while loop
// ! Task 3
let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log("\nThe sum of numbers from 1 to 10 is:", sum);

// ! task 4
// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

console.log("\n");
// Do...While Loop
// ! Task 5 print number 1 to 5 using do while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// ! Task 6 calculate the factorial of a number using a do.. .while loop
let number = 5;
let factorial = 1;
let l = 1;
do {
  factorial *= l;
  l++;
} while (l <= number);
console.log(`The factorial of ${number} is: ${factorial}`);

// * Task 7: Write a program to print a pattern using nested for loops:
let row = 5;
for (let i = 1; i <= row; i++) {
  let str = "";
  for (let j = 2; j <= i; j++) {
    str += " * ";
  }
  console.log(str);
}
// : Loop Control Statements
// * Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// ! Task 9
for (let i = 1; i <= 10; i++) {
  if (i === 8) {
    break;
  }
  console.log(i);
}
