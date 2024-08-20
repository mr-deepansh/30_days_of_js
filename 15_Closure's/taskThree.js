/* 
Practical Closures : Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call
*/
function createUniqueIdGenerator() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId++;
    return lastGeneratedId;
  };
}
const generateUniqueId = createUniqueIdGenerator();
console.log(generateUniqueId());
console.log(generateUniqueId());
