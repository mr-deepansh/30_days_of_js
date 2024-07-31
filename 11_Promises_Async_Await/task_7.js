/*  Task 7 : Use the fetch API to get data from a public API and log the response data to the console using 
async/await.*/
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
