document.addEventListener("DOMContentLoaded", function () {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote");

  async function getQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");

      // Check if the response is ok (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      quoteText.innerText = `"${data.content}"`;
      authorText.innerText = `- ${data.author}`;
    } catch (error) {
      console.error("Error fetching quote:", error);
      quoteText.innerText = "An error occurred while fetching the quote.";
      authorText.innerText = "";
    }
  }

  newQuoteButton.addEventListener("click", getQuote);

  getQuote();
});
