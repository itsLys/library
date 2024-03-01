const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBook(name, author, pages) {
  let book = new Book(name, author, pages);
  myLibrary.push(book);
}

const shelf = document.querySelector(".shelf");
const bookCard = document.createElement("div");
bookCard.classList.add("book");

function displayBooks() {
  myLibrary.forEach((book) => {
    let bookClone = bookCard.cloneNode(true);
    bookClone.textContent = `name: ${book.name}, author ${book.author}, pages: ${book.pages}`;
    console.log(book);
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
const newBookPages = addBookModal.querySelector("#page-num");
const bookForm = addBookModal.querySelector(".book-form");
const submitBook = addBookModal.querySelector(".submit");

submitBook.addEventListener("click", (e) => {
  e.preventDefault();
  let bookName = newBookName.value;
  let bookAuthor = newBookAuthor.value;
  let bookPages = newBookPages.value;
  addBook(bookName, bookAuthor, bookPages);
  removeAll();
  displayBooks();
  bookForm.reset();
  addBookModal.classList.remove("open");
  console.log(myLibrary);
});
function removeAll() {
  while (shelf.firstChild) {
    shelf.removeChild(shelf.firstChild);
  }
}
