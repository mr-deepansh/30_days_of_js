/* module Pattern : Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items */
const itemManager = (function () {
  const items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    getItems: function () {
      return items;
    },
  };
})();
itemManager.addItem("item1");
itemManager.addItem("item2");
console.log(itemManager.getItems());
itemManager.removeItem("item1");
console.log(itemManager.getItems());

//! 2
const createItemManager = () => {
  let items = []; // Private array to hold the items
  return {
    // Method to add an item to the collection
    addItem: (item) => {
      items.push(item);
      console.log(`${item} added to the collection.`);
    },

    // Method to remove an item from the collection
    removeItem: (item) => {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} removed from the collection.`);
      } else {
        console.log(`${item} not found in the collection.`);
      }
    },

    // Method to list all items in the collection
    listItems: () => {
      if (items.length > 0) {
        console.log("Items in the collection:");
        items.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
      } else {
        console.log("The collection is empty.");
      }
    },
  };
};

// Example usage:
const itemManage = createItemManager();

itemManage.addItem("Book");
itemManage.addItem("Pen");
itemManage.addItem("Notebook");
itemManage.listItems();
itemManage.removeItem("Pen");
itemManage.removeItem("Pencil"); // Trying to remove an item that doesn't exist
itemManage.listItems();
