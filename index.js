import { bookShow, formShow, contactShow } from './modules/navMenu.js';

import Books from './modules/book.js';
import newDate from './modules/date.js';

const addButtonElement = document.getElementById('add-btn');
const titleInputElement = document.getElementById('title-input');
const authorInputElement = document.getElementById('author-input');
const listLink = document.querySelector('.list-link');
const addLink = document.querySelector('.add-link');
const contactLink = document.querySelector('.contact-link');
const booksObj = new Books();
booksObj.displayBookList();

// Event listener for the add book button
addButtonElement.addEventListener('click', (event) => {
  event.preventDefault();
  // Get the values from the input fields
  const title = titleInputElement.value;
  const author = authorInputElement.value;

  // Add the book to the collection
  booksObj.addBook(title, author);

  // Clear the input fields
  titleInputElement.value = '';
  authorInputElement.value = '';

  // Display the updated book list
  booksObj.displayBookList();
});

// Event listeners for links on nav menu
listLink.addEventListener('click', bookShow);

addLink.addEventListener('click', formShow);

contactLink.addEventListener('click', contactShow);
setInterval(newDate, 1000);
