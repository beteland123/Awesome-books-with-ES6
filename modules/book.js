const bookListElement = document.getElementById('book-list');
class Books extends Array {
  constructor() {
    super();
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
  }

    addBook =(title, author) => {
      const book = {
        id: this.books.length + 1,
        title,
        author,
      };
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
    }

    removeBook = (id) => {
      const index = this.books.findIndex((book) => book.id === Number(id));
      if (index !== -1) {
        this.books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(this.books));
      }
      this.displayBookList();
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