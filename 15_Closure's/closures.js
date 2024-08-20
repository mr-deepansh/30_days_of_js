// ! extra code  for understanding purpose of closures
function autoSaveFeature() {
  let lastSavedTime = null;

  function save(content) {
    // Simulate saving the content (e.g., to a server or local storage)
    console.log(`Content saved: ${content}`);
    lastSavedTime = new Date().toLocaleTimeString();
  }

  return {
    saveContent: function (content) {
      save(content);
    },
    getLastSavedTime: function () {
      return lastSavedTime
        ? `Last saved at: ${lastSavedTime}`
        : "Content not saved yet.";
    },
  };
}

// Initialize the auto-save feature
const editorAutoSave = autoSaveFeature();

// Simulate typing in the editor
let content = "Hello, world!";
console.log(editorAutoSave.getLastSavedTime()); // Output: "Content not saved yet."

// Auto-save the content every 5 seconds
setInterval(() => {
  editorAutoSave.saveContent(content);
  console.log(editorAutoSave.getLastSavedTime()); // Output: Last saved time
}, 5000);

// Simulate content change after 10 seconds
setTimeout(() => {
  content = "Hello, world! Updated content!";
}, 10000);
