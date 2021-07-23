let book1 = new Book("S.E. Hinton", "The Outsiders", 192, true);
let book2 = new Book("J.R.R. Tolkien", "The Hobbit", 304, false);

let myLibrary = [book1, book2];

// Constructor for Book
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  for (let book of myLibrary) {
    let para = document.createElement("p");
    let bookDetails = document.createTextNode(`${book.title}, ${book.author}, ${book.pages} pages`);
    para.appendChild(bookDetails);
    document.body.appendChild(para);
  }
}

addBookToLibrary();
