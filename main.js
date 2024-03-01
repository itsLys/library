const myLibrary = [];

function Book(name, author) {
  this.name = name;
  this.author = author;
}

function addBook(name, author) {
  let book = new Book(name, author);
  myLibrary.push(book);
}

const shelf = document.querySelector(".shelf");
const bookCard = document.createElement("div");
const bookTitle = document.createElement("h2");
const authorName = document.createElement("p");
bookCard.appendChild(bookTitle);
bookCard.appendChild(authorName);
bookCard.classList.add("book");

function displayBooks() {
  myLibrary.forEach((book) => {
    bookTitle.textContent = book.name;
    authorName.textContent = book.author;
    let bookClone = bookCard.cloneNode(true);
    // bookClone.textContent = `name: ${book.name}, author ${book.author}, pages: ${book.pages}`;
    shelf.appendChild(bookClone);
  });
}

const newBook = document.querySelector(".new-book-btn");
const addBookModal = document.querySelector(".form-con");
const closeModal = document.querySelector(".close-btn");

newBook.addEventListener("click", () => {
  addBookModal.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (e.target == closeModal || e.target == addBookModal)
    addBookModal.classList.remove("open");
});

const newBookName = addBookModal.querySelector("#book-name");
const newBookAuthor = addBookModal.querySelector("#author-name");

const bookForm = addBookModal.querySelector(".book-form");
const submitBook = addBookModal.querySelector(".submit");

submitBook.addEventListener("click", (e) => {
  e.preventDefault();
  let bookName = newBookName.value;
  let bookAuthor = newBookAuthor.value;

  addBook(bookName, bookAuthor);
  removeAll();
  displayBooks();
  bookForm.reset();
  addBookModal.classList.remove("open");
});
function removeAll() {
  while (shelf.firstChild) {
    shelf.removeChild(shelf.firstChild);
  }
}
