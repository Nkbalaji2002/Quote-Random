interface Quote {
  content: string;
  author: string;
}

const quoteElement = document.getElementById("quote") as HTMLElement;
const authorElement = document.getElementById("author") as HTMLElement;
const generateButton = document.getElementById(
  "generate-button"
) as HTMLButtonElement;

async function fetchRandomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data: Quote = await response.json();
  return data;
}

async function generateRandomQuote() {
  try {
    const randomQuote = await fetchRandomQuote();
    quoteElement.textContent = randomQuote.content;
    authorElement.textContent = `- ${randomQuote.author}`;
  } catch (error) {
    console.error("error fetching quote, error");
    quoteElement.textContent = "An error occurred while fetching the quote.";
    authorElement.textContent = "";
  }
}

generateButton.addEventListener("click", generateRandomQuote);

generateRandomQuote();

// const quotes: Quote[] = [
//   {
//     quote: "Quote 1 text",
//     author: "Author 1",
//   },
//   {
//     quote: "Quote 2 text",
//     author: "Author 2",
//   },
//   {
//     quote: "Quote 3 text",
//     author: "Author 3",
//   },
//   {
//     quote: "Quote 4 text",
//     author: "Author 4",
//   },
//   {
//     quote: "Quote 5 text",
//     author: "Author 5",
//   },
//   {
//     quote: "Quote 6 text",
//     author: "Author 6",
//   },
// ];

// function generateRandomQuote() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   const randomQuote = quotes[randomIndex];
//   quoteElement.textContent = randomQuote.quote;
//   authorElement.textContent = `- ${randomQuote.author}`;
// }

// generateButton.addEventListener("click", generateRandomQuote);

// generateRandomQuote();
