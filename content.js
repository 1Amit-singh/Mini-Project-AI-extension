// contentScript.js

// This function is executed when the content script is injected into a web page
function extractPageContents() {
  // Access the DOM of the web page
  var pageHTML = document.documentElement.innerHTML;

  // Parse the HTML content
  var parser = new DOMParser();
  var doc = parser.parseFromString(pageHTML, "text/html");

  // Extract data from the parsed HTML
  var pageTitle = doc.title;

  // Extract paragraphs
  var paragraphs = Array.from(doc.querySelectorAll("p")).map(
    (p) => p.textContent
  );

  // Extract headings and subheadings
  var headings = Array.from(doc.querySelectorAll("h1, h2, h3, h4, h5, h6")).map(
    (h) => h.textContent
  );

  // Extract descriptions from meta tags
  var metaDescription = doc.querySelector('meta[name="description"]');
  var description = metaDescription ? metaDescription.content : "";

  // Extract text content from all div elements
  // var divContents = Array.from(doc.querySelectorAll("div")).map(
  //   (div) => div.textContent
  // );
  var divContents = doc.querySelectorAll("div");
  var spans = doc.getElementsByClassName("_ac2a");

  // Print the extracted data
  console.log("Page Title:", pageTitle);
  console.log("Paragraphs:", paragraphs);
  console.log("Headings:", headings);
  console.log("Description:", description.split(" "));
  console.log("Div Contents:", divContents);
  console.log("Spans:", spans);

  const user = {
    name: pageTitle.split(" ")[0],
    username: headings[0],
    description: headings[1],
    followers: description.split(" ")[0],
    following: description.split(" ")[2],
    posts: description.split(" ")[4],
  };
  console.log(user);
}

// Call the function to extract page contents and print them
extractPageContents();

chrome.runtime.sendMessage({ data: user });
