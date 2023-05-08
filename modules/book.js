// books.js
const bookListElement = document.getElementById('book-list');
class Books {
    constructor() {
      this.books = JSON.parse(localStorage.getItem('books') || '[]');
    }
  
    addBook(title, author) {
      const book = {
        id: this.books.length + 1,
        title,
        author,
      };
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
    }
    
  
    removeBook(id) {
      this.books = this.books.filter((book) => book.id !== id);
      let localStorageBooks = JSON.parse(localStorage.getItem('books'));
      localStorageBooks = localStorageBooks.filter((obj) => obj.id !== parseInt(id, 10));
      localStorage.setItem('books', JSON.stringify(localStorageBooks));
    }
  
    displayBookList() {
      // Clear the book list element
      bookListElement.innerHTML = '<h2>All Awesome books</h2>';
      const booksContainer = document.createElement('div');
      booksContainer.id = 'booksContainer';
      // Loop through the book collection and create a new element for each book
      this.books.forEach((book) => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `<p><span class="title">"${book.title}" by </span><span class="author">${book.author}</span></p>`;
        bookElement.id = `book-${book.id}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.dataset.id = book.id;
        removeButton.addEventListener('click', (event) => {
          const { id } = event.target.dataset;
          this.removeBook(id);
          const bookElement = document.getElementById(`book-${id}`);
          booksContainer.removeChild(bookElement);
        });
        bookElement.appendChild(removeButton);
        booksContainer.appendChild(bookElement);
        bookListElement.appendChild(booksContainer);
      });
    }
  }
  
  const booksObj = new Books();


  export {Books} ;
  
  
  // addBook.js
  
  
  