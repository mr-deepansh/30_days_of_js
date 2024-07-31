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
