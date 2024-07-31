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
