/******************************************
project 1 - A Random Quote Generator
******************************************/

// Quotes array

let quotes = [
  {
    quote: 'One small step for man, one giant leap for mankind.',
    source: 'Neil Armstrong',
    citation: 'Downtown Toronto',
    year: 2021,
    tag: 'Technology'
  },
  {
    quote:
      'Talk is cheap. Show me the code.',
    source: 'Linus Torvalds',
    tag: 'humor, linux, programming'
  },
  {
    quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    source: 'Harold Abelson',
    citation: 'Middle Earth',
    tag: 'programming'
  },
  {
    quote: 'How you look at it is pretty much how you\'ll see it',
    source: 'The Soup Guy from Seinfeld',
    year: 1998
  },
  {
    quote: 'I\'m not a great programmer I\'m just a good programmer with great habits',
    source: 'Kent Beck',
    citation: 'programming',
  }
];

// Gets a random quote

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

// Prints a random quote to the page
var colorTimer = setInterval(printQuote, 20000);

function printQuote() {
  let quote = getRandomQuote();
  let html = '';

  html = '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source;
  if (quote.citation) {
    html += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    html += '<span class="year">' + quote.year + '</span>';
  }
  if (quote.tag) {
    html += '<span class="tag">' + quote.tag + '</span>';
  }
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
  setColor();

  colorTimer = clearInterval(colorTimer);
  colorTimer = setInterval(printQuote, 20000);
}

// Click the event listener to print to the page

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);

// Helpers
function getRandomColor() {
  let red = Math.floor(Math.random() * 255) + 1;
  let green = Math.floor(Math.random() * 255) + 1;
  let blue = Math.floor(Math.random() * 255) + 1;
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
function setColor() {
  document.getElementsByTagName(
    'body'
  )[0].style.backgroundColor = getRandomColor();
}