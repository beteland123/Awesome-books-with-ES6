const bookListElement = document.getElementById('book-list');
class Books extends Array {
  constructor() {
    super();
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
  }

    addBook =(title, author) => {
      const uniqueNumber = Math.floor(Math.random() * 1000000);
      const book = {
        id: uniqueNumber,
        title,
        author,
      };
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
    }

    removeBook(id) {
      this.books = this.books.filter((book) => book.id !== parseInt(id, 10));
      let localStorageBooks = JSON.parse(localStorage.getItem('books'));
      localStorageBooks = localStorageBooks.filter((obj) => obj.id !== parseInt(id, 10));
      localStorage.setItem('books', JSON.stringify(localStorageBooks));
    }

      displayBookList = () => {
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
          removeButton.id = book.id;
          removeButton.addEventListener('click', (event) => {
            const { id } = event.target;
            this.removeBook(id);
            this.displayBookList();
          });
          bookElement.appendChild(removeButton);
          booksContainer.appendChild(bookElement);
          bookListElement.appendChild(booksContainer);
        });
      }
}

export default Books;

// addBook.js