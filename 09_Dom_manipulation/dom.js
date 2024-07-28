// Task 1: Select an HTML element by its ID and change its text content.
let paragraph = document.getElementById("my-para");
paragraph.innerHTML = "Hello World";
paragraph.style.display = "flex";
paragraph.style.justifyContent = "center";
paragraph.style.alignItems = "center";
paragraph.style.width = "100%";
paragraph.style.height = "20vh";

// Task 2: Select an HTML element by its class and change its background color.
let bgChange = document.getElementsByClassName("box");
bgChange[0].style.backgroundColor = "#FAF9F6";

// Task 3: Create a new div element with some text content and append it to the body.
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list.
let newLi = document.createElement("li");
newLi.textContent = "New List Item";
let ul = document.querySelector("ul");
ul.appendChild(newLi);

// Task 5: Select an HTML element and remove it from the DOM.
const elementToRemove = document.querySelector(".remove-this");
elementToRemove.remove();

// Task 6: Remove the fourth child of a specific HTML element if it exists.
const ulList = document.querySelector("ul");
if (ulList.children.length >= 4) {
  ulList.children[3].remove();
}

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const image = document.getElementById("img-src");
image.src = "./new-img.png";
image.alt = "new image";

// Task 8: Add and remove a CSS class to/from an HTML element.
const design = document.getElementById("myList");
design.style.display = "flex";
design.style.flexDirection = "row";
design.style.justifyContent = "space-around";

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.getElementById("my-button");
button.addEventListener("click", () => {
  paragraph.textContent = "Hello Coders! How are you today?";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
const mouseover = document.getElementById("my-button");
mouseover.addEventListener("mouseover", (e) => {
  e.target.style.borderColor = "red";
});
