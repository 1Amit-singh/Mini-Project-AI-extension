// contentScript.js

// This function is executed when the content script is injected into a web page
function parsePageContents() {
  // Access the DOM of the web page
  var pageHTML = document.documentElement.innerHTML;

  // Parse the HTML content
  var parser = new DOMParser();
  var doc = parser.parseFromString(pageHTML, "text/html");

  // Extract data from the parsed HTML
  var title = doc.querySelector("title").textContent;
  var paragraphs = Array.from(doc.querySelectorAll("p")).map(
    (p) => p.textContent
  );

  // Send the extracted data to the extension's background script or perform other actions
  chrome.runtime.sendMessage({ title: title, paragraphs: paragraphs });
  // Print the extracted data
  console.log("Page title:", title);
  console.log("Paragraphs:", paragraphs);
}

// Call the function to parse page contents
parsePageContents();
