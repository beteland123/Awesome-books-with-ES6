import Books from './book.js';

const bookListElement = document.getElementById('book-list');
const formElement = document.getElementById('form');
const contactElement = document.getElementById('contact');
const removeButtons = document.querySelectorAll('.remove-btn');

// function for links on nav menu
const bookShow = () => {
  bookListElement.style.display = 'flex';
  formElement.style.display = 'none';
  contactElement.style.display = 'none';
  const booksObj = new Books();
  removeButtons.forEach((button) => {
    button.addEventListener('click', booksObj.removeBook);
  });
};

const formShow = () => {
  bookListElement.style.display = 'none';
  formElement.style.display = 'flex';
  contactElement.style.display = 'none';
};

const contactShow = () => {
  bookListElement.style.display = 'none';
  formElement.style.display = 'none';
  contactElement.style.display = 'flex';
};
export { bookShow, formShow, contactShow };