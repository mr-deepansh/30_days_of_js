// Day 1: Promises and Async/Await

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is the resolved message after 2 seconds.");
  }, 2000);
});
promise1.then((message) => {
  console.log(message); // Logs: "This is the resolved message after 2 seconds."
});
promise1.catch((error) => {
  console.log(error); // This won't be executed as the promise resolves
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
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
    console.log(error); // Output after 2 seconds: "This is the rejected message after 2 seconds."
  });

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
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

fetchData(1, 2000)
  .then((message) => {
    console.log(message); // Output after 2000 ms: "Step 1: Data fetched successfully."
    return fetchData(2, 3000);
  })
  .then((message) => {
    console.log(message); // Output after 5000 ms (2000 ms + 3000 ms): "Step 2: Data fetched successfully."
    return fetchData(3, 2500, true); // Simulate a failure
  })
  .then((message) => {
    console.log(message); // This won't be executed as the previous promise rejects
    console.log("All steps completed successfully!");
  })
  .catch((error) => {
    console.error("Error:", error.message); // Logs error message
  });

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const taskDelay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved value after 3 seconds");
    }, ms);
  });
};

const logResolvedValue = async () => {
  try {
    const result = await taskDelay(3000);
    console.log("Resolved value:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

logResolvedValue();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const handleRejectedPromise = async () => {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("This is the rejected message after 2 seconds."));
      }, 2000);
    });
    await promise; // This will throw an error
  } catch (error) {
    console.error("Caught error:", error.message);
  }
};

handleRejectedPromise();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const apiURL = "https://jsonplaceholder.typicode.com/posts";

fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const bookUrl = "https://openlibrary.org/subjects/bestsellers.json";

const fetchBooks = async () => {
  try {
    const response = await fetch(bookUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

fetchBooks();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});
const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 1000);
});
const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

Promise.all([promiseA, promiseB, promiseC])
  .then((values) => {
    console.log(values); // Logs an array of all resolved values
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promiseX = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});
const promiseY = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 1000);
});
const promiseZ = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

Promise.race([promiseX, promiseY, promiseZ])
  .then((value) => {
    console.log(value); // Logs the value of the first resolved promise
  })
  .catch((error) => {
    console.error("Error:", error);
  });
