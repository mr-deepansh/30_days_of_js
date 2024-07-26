// Activity 1: Object Creation and Access

/* Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console */
let book = {
  title: "Ramayan",
  author: "Valmiki",
  year: 500,
  genre: "Epic",
};
console.log("Task 1: Book Object");
console.log(book);
console.log(
  `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}`
);

/* Task 2: Access and log the title and author properties of the book object */
console.log("Task 2: Access Title and Author");
console.log(`Title: ${book.title}, Author: ${book.author}`);

// Activity 2: Object Methods

/* Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method */
book.getDetails = function () {
  return `Title: ${this.title}, Author: ${this.author}`;
};
console.log("Task 3: Get Book Details");
console.log(book.getDetails());

/* Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object */
book.updateYear = function (newYear) {
  this.year = newYear;
};
book.updateYear(400);
console.log("Task 4: Update Book Year");
console.log(book);

// Activity 3: Nested Objects

/* Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console */
let library = {
  name: "My Library",
  books: [book],
  location: "India",
  established: 2000,
};
console.log("Task 5: Library Object");
console.log(library);

/* Task 6: Access and log the name of the library and the titles of all the books in the library */
console.log("Task 6: Library Name and Book Titles");
console.log(`Library Name: ${library.name}`);
library.books.forEach((book) => {
  console.log(book.title);
});

// Activity 4: The this Keyword

/* Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method */
book.getBookDetails = function () {
  return `Title: ${this.title}, Year: ${this.year}`;
};
console.log("Task 7: Get Book Title and Year");
console.log(book.getBookDetails());

// Activity 5: Object Iteration

/* Task 8: Use a for..in loop to iterate over the properties of the book object and log each property and its value */
console.log("Task 8: Iterate Over Book Properties");
for (let prop in book) {
  console.log(`${prop}: ${book[prop]}`);
}

/* Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object */
console.log("Task 9: Object Keys and Values");
console.log(Object.keys(book));
console.log(Object.values(book));

// Feature Request Scripts

// 1. Book Object Script
console.log("Feature Request 1: Book Object Script");
let bookObjectScript = {
  title: "The Odyssey",
  author: "Homer",
  year: 800,
  genre: "Epic",
  getDetails: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};
console.log(bookObjectScript.getDetails());
bookObjectScript.updateYear(700);
console.log(bookObjectScript);

// 2. Library Object Script
console.log("Feature Request 2: Library Object Script");
let libraryObjectScript = {
  name: "Central Library",
  books: [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  ],
  location: "City Center",
  established: 1950,
};
console.log(libraryObjectScript);

// 3. Object Iteration Script
console.log("Feature Request 3: Object Iteration Script");
console.log("Using for..in loop:");
for (let prop in libraryObjectScript) {
  console.log(`${prop}: ${libraryObjectScript[prop]}`);
}
console.log("Using Object.keys and Object.values:");
console.log(Object.keys(libraryObjectScript));
console.log(Object.values(libraryObjectScript));
