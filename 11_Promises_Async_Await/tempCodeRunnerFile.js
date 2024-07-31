simulateApiCall(true)
  .then((message) => {
    console.log("Resolved:", message); // This won't be executed as the promise rejects
  })
  .catch((error) => {
    console.error("Error:", error.message); // Logs error message: This is the rejected message after 2 seconds.
  });