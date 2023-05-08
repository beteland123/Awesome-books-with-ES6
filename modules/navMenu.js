const bookListElement = document.getElementById('book-list');
const formElement = document.getElementById('form');
const contactElement = document.getElementById('contact');

// function for links on nav menu
const bookShow= () => {
    bookListElement.style.display = 'flex';
    formElement.style.display = 'none';
    contactElement.style.display = 'none';
  };
  
  const formShow= () => {
    bookListElement.style.display = 'none';
    formElement.style.display = 'flex';
    contactElement.style.display = 'none';
  };
  
  const contactShow= () => {
    bookListElement.style.display = 'none';
    formElement.style.display = 'none';
    contactElement.style.display = 'flex';
  };
  export {bookShow,formShow,contactShow};