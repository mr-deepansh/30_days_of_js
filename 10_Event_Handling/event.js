// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  const newPara = document.querySelector(".para");
  newPara.textContent = "This is a new text content";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const img = document.querySelector("#imageToToggle");

img.addEventListener("dblclick", () => {
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
});

//Task 3: Add a mouseover event listener to an element that changes its background color.
const box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
  box.dataset.originalColor = box.style.backgroundColor;
  box.style.backgroundColor = "red";
});
// Task 4: Add a mouseout event listener to an element that resets its background color.
box.addEventListener("mouseout", () => {
  box.style.backgroundColor = box.dataset.originalColor;
});

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.querySelector("#inputText");
input.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const logPara = document.querySelector("#logPara");
input.addEventListener("keyup", (e) => {
  logPara.textContent = input.value;
  console.log(`Current value: ${input.value}`);
});

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector("#myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  for (const [name, value] of formData) {
    console.log(`${name}: ${value}`);
  }
});

//  Task 8 : Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const select = document.querySelector("#select");
const selectPara = document.querySelector("#selectedFruit");
select.addEventListener("change", (e) => {
  selectPara.textContent = `Selected value: ${selectedValue}`;
});

// Task 9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list = document.querySelector("#myList");
list.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    console.log(`Clicked list item: ${e.target.textContent}`);
  }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parent = document.querySelector(".listElement ul");
parent.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    console.log(`Clicked list item: ${e.target.textContent}`);
  }
});
const addItemBtn = document.querySelector("#addItem");
addItemBtn.addEventListener("click", (e) => {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  parent.appendChild(newItem);
});
