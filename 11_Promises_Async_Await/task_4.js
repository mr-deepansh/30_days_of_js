// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
// Function that returns a promise which resolves after 3 seconds
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

// * Extra Practice
const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));
const fetchDataFromAPI = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(`Fetched data:`, data);
    await delay(8000);
    console.log("Data logged after 2 seconds delay:", data);
  } catch (error) {
    console.error(error);
  }
};
fetchDataFromAPI();
