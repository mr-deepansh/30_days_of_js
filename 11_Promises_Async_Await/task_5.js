/* Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
 */
const handleRejectedPromise = async () => {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("This is the rejected message after 2 seconds."));
      }, 2000);
    });
    await promise;
  } catch (error) {
    console.error("Caught error:", error.message);
  }
};

handleRejectedPromise();
