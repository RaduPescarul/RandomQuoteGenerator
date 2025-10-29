document.addEventListener('DOMContentLoaded', () => {

    const quotes = [
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            image: "steveJobs.jpg"
        },
        {
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
            image: "eleanorRoosevelt.png"
        },
        {
            quote: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein",
            image: "albertEinstein.jpg"
        },
        {
            quote: "Be the change that you wish to see in the world.",
            author: "Mahatma Gandhi",
            image: "mahatmaGandhi.jpg"
        }
    ];

    const quoteDisplay = document.getElementById('quote-display');
    const quoteAuthor = document.getElementById('quote-author');
    const quoteImage = document.getElementById('quote-image');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    
    const quoteBody = document.querySelector('.quote-body');

    function getNewQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        quoteDisplay.textContent = `"${randomQuote.quote}"`;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
        quoteImage.src = randomQuote.image;
        quoteImage.alt = `Photo of ${randomQuote.author}`;
    }

    function handleNewQuoteClick() {
        quoteBody.classList.add('fade-out');

        setTimeout(() => {
            getNewQuote();
            quoteBody.classList.remove('fade-out');
        }, 400); 
    }

    newQuoteBtn.addEventListener('click', handleNewQuoteClick);
    
    getNewQuote();
    quoteDisplay.textContent = "Click the button to see a random quote!";
    quoteAuthor.textContent = "";
    quoteImage.src = "images/default.png";
});