/* 
Closures in Loops: Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index. 
*/

function createCart() {
  let totalItems = 0;
  let totalCost = 0;

  return {
    addItem: function (itemName, price) {
      totalItems += 1;
      totalCost += price;
      console.log(
        `${itemName} added to cart. Total items: ${totalItems}, Total cost: $${totalCost.toFixed(
          2
        )}`
      );
    },
    getCartSummary: function () {
      return `You have ${totalItems} items in your cart, costing a total of $${totalCost.toFixed(
        2
      )}.`;
    },
  };
}

const myCart = createCart();

myCart.addItem("Laptop", 999.99);
myCart.addItem("Headphones", 199.99);
myCart.addItem("Mouse", 49.99);
console.log(myCart.getCartSummary());

// ! example second
const functionArray = [];

for (let i = 0; i < 5; i++) {
  functionArray.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i)
  );
}

functionArray[0]();
functionArray[1]();
functionArray[2]();
functionArray[3]();
functionArray[4]();
// ! 3
const createFunctions = () => {
  const functions = [];
  for (let i = 0; i < 5; i++) {
    functions.push(() => {
      console.log(i);
    });
  }
  return functions;
};

const functions = createFunctions();
functions[0](); // logs 0
functions[1](); // logs 1
