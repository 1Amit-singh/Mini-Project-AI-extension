// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Log the parsed data received from the content script
  console.log("Page title:", message.title);
  console.log("Paragraphs:", message.paragraphs);
});
