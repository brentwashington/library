let table = document.querySelector("table");
let form = document.querySelector("form");

let addBookButton = document.getElementById("add-book");

// Initialize library array
let myLibrary = [];

// Constructor for Book
function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

// Display the saved library data
setFromStorage();

addBookButton.addEventListener("click", (e) => {
  // Stop button from reloading the page
  e.preventDefault();

  let titleInput = document.getElementById("title").value;
  let authorInput = document.getElementById("author").value;
  let pagesInput = document.getElementById("pages").value;

  // Create and add book to library array
  let book = new Book(authorInput, titleInput, pagesInput);
  myLibrary.push(book);

  console.log(myLibrary);

  // Add book to the table
  addBookToLibrary(titleInput, authorInput, pagesInput);

  // Add the book to the local storage
  addToStorage();

  // Clear inputs on form
  form.reset();
});

// Adds the library array to local storage
function addToStorage() {
  localStorage.setItem("Library", JSON.stringify(myLibrary));
}

// Retrieves and displays local storage data
function setFromStorage() {
  let retrievedData = localStorage.getItem("Library");
  let library = JSON.parse(retrievedData);

  library.forEach(book => addBookToLibrary(book.title, book.author, book.pages));
}

function addBookToLibrary(title, author, pages) {
  let tableRow = table.insertRow();
  tableRow.insertCell().textContent = title;
  tableRow.insertCell().textContent = author;
  tableRow.insertCell().textContent = pages;
}