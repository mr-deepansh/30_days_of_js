/* Task 6 : Use the fetch API to get data from a public API and log the response data to the console using 
promises. */
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
