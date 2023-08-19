"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateButton = document.getElementById("generate-button");
function fetchRandomQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.quotable.io/random");
        const data = yield response.json();
        return data;
    });
}
function generateRandomQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const randomQuote = yield fetchRandomQuote();
            quoteElement.textContent = randomQuote.content;
            authorElement.textContent = `- ${randomQuote.author}`;
        }
        catch (error) {
            console.error("error fetching quote, error");
            quoteElement.textContent = "An error occurred while fetching the quote.";
            authorElement.textContent = "";
        }
    });
}
generateButton.addEventListener("click", generateRandomQuote);
generateRandomQuote();
