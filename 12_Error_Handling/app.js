// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
  throw new Error("This is an intentional error 😀");
}

try {
  throwError();
} catch (error) {
  console.log("Error:", error.message);
}
// Real-time example: Parsing JSON //
function parseJSON(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    console.log("JSON parsed successfully:", data);
  } catch (error) {
    console.error("Failed to parse JSON:", error.message);
  }
}

const validJSONString = '{"name": "John", "age": 30}';
const invalidJSONString = '{"name": "John", "age": 30'; // Missing closing brace

parseJSON(validJSONString);
parseJSON(invalidJSONString);

/* Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try catch block to handle this error. */
function divideTwoNumbers(num1, num2) {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return num1 / num2;
}

try {
  const result = divideTwoNumbers(10, 2);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}

/* Finally Block Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and 
finally blocks to observe the execution flow */
try {
  console.log("Inside try block");
  throw new Error("This is an intentional error");
} catch (error) {
  console.log("Inside catch block");
} finally {
  console.log("Inside finally block");
}

/* Custom Error Objects : Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block */
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
function throwCustomError() {
  throw new CustomError("This is a custom error");
}
try {
  throwCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.log("Custom Error:", error.message);
  } else {
    console.log("Unexpected Error:", error.message);
  }
}

/* Custom Error Objects: Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block */
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function validateInput(input) {
  if (input.trim() === "") {
    throw new ValidationError("Input cannot be empty");
  }
  return input;
}
try {
  const userInput = "";
  const validatedInput = validateInput(userInput);
  console.log("Validated input:", validatedInput);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation Error:", error.message);
  } else {
    console.log("Unexpected Error:", error.message);
  }
}
/* Error Handling in Promises : Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomPromise = new Promise((resolve, reject) => {
  const randomNumber = getRandomNumber(1, 10);
  if (randomNumber % 2 === 0) {
    resolve(randomNumber);
  } else {
    reject(new Error("Odd number generated"));
  }
});
randomPromise
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.log("Rejected:", error.message);
  });

/* Error Handling in Promises: Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message */
async function handleRandomPromise() {
  try {
    const result = await randomPromise;
    console.log("Resolved:", result);
  } catch (error) {
    console.log("Rejected:", error.message);
  }
}
handleRandomPromise();

/* Graceful Error Handling in Fetch : Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch() . Log an appropriate error message to the console */
const invalidURL = "https://jsonplaceholder.typicode.com/userss";
fetch(invalidURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

/* Graceful Error Handling in Fetch : Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message */
async function fetchData() {
  try {
    const response = await fetch(invalidURL);
    if (!response.ok) {
      throw new Error("Method two ! Failed to fetch data");
    }
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchData();
