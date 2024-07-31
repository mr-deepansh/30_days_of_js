// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is the resolved message after 2 seconds.");
  }, 2000);
});
promise.then((message) => {
  console.log(message);
});
promise.catch((error) => {
  console.log(error);
});
// ! Function that returns a promise which may resolve or reject after 2 seconds
const simulateApiCall = (shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("This is the rejected message after 2 seconds."));
      } else {
        resolve("This is the resolved message after 2 seconds.");
      }
    }, 2000);
  });
};
simulateApiCall(false)
  .then((message) => {
    console.log("Resolved:", message); // Logs success message if `shouldFail` is false
  })
  .catch((error) => {
    console.error("Error:", error.message); // Logs error message if `shouldFail` is true
  });
simulateApiCall(true)
  .then((message) => {
    console.log("Resolved:", message); // This won't be executed as the promise rejects
  })
  .catch((error) => {
    console.error("Error:", error.message); // Logs error message: This is the rejected message after 2 seconds.
  });
