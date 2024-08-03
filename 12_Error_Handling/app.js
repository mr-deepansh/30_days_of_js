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
