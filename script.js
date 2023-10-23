const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes =[];

//show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Get new quote
function newQuote() {
    loading();
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);

    quoteText.textContent = quote.text;
    quote.author ? authorText.textContent = quote.author : authorText.textContent = 'Unknown';
    complete();
}


newQuoteBtn.addEventListener('click', newQuote);

//Get quotes from API
async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
         apiQuotes = await response.json();
        console.log(apiQuotes);
        newQuote();
    } catch (error) {
        //Catch error here
    }
}
//on load
getQuotes()