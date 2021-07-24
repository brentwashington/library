let book1 = new Book("S.E. Hinton", "The Outsiders", 192);
let book2 = new Book("J.R.R. Tolkien", "The Hobbit", 304);

let table = document.querySelector("table");
let form = document.querySelector("form");

let addBookButton = document.getElementById("add-book");

let myLibrary = [book1, book2];

// Constructor for Book
function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

addBookButton.addEventListener("click", (e) => {
  // Stop button from reloading the page
  e.preventDefault();

  let titleInput = document.getElementById("title").value;
  let authorInput = document.getElementById("author").value;
  let pagesInput = document.getElementById("pages").value;

  // Create and add book to library array
  let book = new Book(authorInput, titleInput, pagesInput);
  myLibrary.push(book);

  // Add book to the table
  addBookToLibrary();

  // Clear inputs on form
  form.reset();
});

function addBookToLibrary() {
  for (let book of myLibrary) {
    let tableRow = table.insertRow();
    tableRow.insertCell().textContent = book.title;
    tableRow.insertCell().textContent = book.author;
    tableRow.insertCell().textContent = book.pages;
  }
}
