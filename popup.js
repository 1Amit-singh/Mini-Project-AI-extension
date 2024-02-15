document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sendButton").addEventListener("click", function () {
    console.log("clicked");
    var userInput = document.getElementById("userInput").value;
    console.log(userInput);
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        messages: [{ role: "system", content: userInput }],
        model: "gpt-3.5-turbo", // specify the model here
        max_tokens: 4000,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("responseArea").innerHTML =
          data.choices[0].message.content;
        userInput = "";
      }) // This should log the API response
      .catch((error) => console.log(error)); // This should log any errors
  });
});
