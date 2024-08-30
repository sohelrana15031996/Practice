const library = {
  books: [
    {
      title: 'Book1',
      author: 'Author 1',
      available: true,
    },
    {
      title: 'Book2',
      author: 'Author 2',
      available: true,
    }, {
      title: 'Book3',
      author: 'Author 3',
      available: true,
    }, {
      title: 'Book4',
      author: 'Author 4',
      available: true,
    },

  ],
  //Add book method
  addBook(bookTitle, bookAuthor, bookStatus) {
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
      available: bookStatus,
    }
    this.books.push(newBook);
  },

  borrowBook(bookTitle = null, bookAuthor = null) {
    for (const book of this.books) {
      if ((book.title === bookTitle || book.author === bookAuthor) && book.available === true) {
        console.log('This is available for you.')
        book.available = false;
      }
    }

  },
  returnBook(bookTitle = null, bookAuthor = null) {
    for (const book of this.books) {
      if (book.title === bookTitle || book.author === bookAuthor) {
        console.log('You have returned the')
        book.available = true;
      }
    }

  }
}


console.log(library.addBook('book 5', 'Author 5', true));
console.log(library.books);
library.borrowBook('Book4');

const index = library.books.indexOf('Book2');

console.log(index);

console.log(library.books);


const deleteElement = library.books.filter(book => book.title != 'Book4');

console.log(deleteElement);