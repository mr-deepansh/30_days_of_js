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

/* Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch(). */
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is the rejected message after 2 seconds.");
  }, 2000);
});

promise2
  .then((message) => {
    console.log(message); // This won't be executed as the promise rejects
  })
  .catch((error) => {
    console.log(error); // Output after 2 seconds: This is the rejected message after 2 seconds.
  });

/*  Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log 
messages in a specific order. */
const fetchData = (step, delay, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`Step ${step}: Data fetching failed.`));
      } else {
        resolve(`Step ${step}: Data fetched successfully.`);
      }
    }, delay);
  });
};

/*  Promise chaining  */
fetchData(1, 2000)
  .then((message) => {
    console.log(message); // Output after 2000 ms: Step 1: Data fetched successfully.
    return fetchData(2, 3000);
  })
  .then((message) => {
    console.log(message); // Output after 5000 ms (2000 ms + 3000 ms): Step 2: Data fetched successfully.
    return fetchData(3, 2500, true); // Simulate a failure imp => shouldFail=true to see the error message
  })
  .then((message) => {
    console.log(message); // This won't be executed as the previous promise rejects
    console.log("All steps completed successfully!");
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
