const myLibrary = [];

function Book(name, author, status) {
  this.name = name;
  this.author = author;
  this.status = status;
}

function addBook(name, author, status) {
  let book = new Book(name, author, status);
  myLibrary.push(book);
}

const shelf = document.querySelector(".shelf");
const bookCard = document.createElement("div");
const bookTitle = document.createElement("h2");
const authorName = document.createElement("p");
const bookStatus = document.createElement("button");
const removeBookBtn = document.createElement("button");

bookCard.appendChild(bookTitle);
bookCard.appendChild(authorName);
bookCard.appendChild(bookStatus);

removeBookBtn.classList.add("remove");
removeBookBtn.textContent = "remove book";
removeBookBtn.setAttribute("onclick", "removeBook(event)");

bookStatus.setAttribute("onclick", "toggleBookStatus(event)");

bookCard.appendChild(removeBookBtn);

bookCard.classList.add("book");
function displayBooks() {
  myLibrary.forEach((book, i) => {
    bookCard.dataset.number = i;
    bookTitle.textContent = book.name;
    authorName.textContent = book.author;
    bookStatus.textContent = book.status;
    let bookClone = bookCard.cloneNode(true);

    shelf.appendChild(bookClone);
  });
}

// Add a button on each book that displays read and unread
// When clicked, if the button is unread, button becomes read
// When clicked, if button is read, button becomes unread

function toggleBookStatus(e) {
  if (e.target.textContent == "Read") {
    e.target.textContent = "Not Read";
  } else if (e.target.textContent == "Not Read") {
    e.target.textContent = "Read";
  }
}
// Hello  

function removeBook(e) {
  myLibrary.splice(e.target.parentElement.dataset.number, 1);
  removeAll();
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
const bookStatusRead = document.querySelector("#read");
const bookStatusNotRead = document.querySelector("#not-read");
const bookForm = addBookModal.querySelector(".book-form");
const submitBook = addBookModal.querySelector(".submit");

submitBook.addEventListener("click", (e) => {
  e.preventDefault();
  let bookName = newBookName.value;
  let bookAuthor = newBookAuthor.value;
  let bookStatus = "Not Read";
  if (bookStatusRead.checked) {
    bookStatus = "Read";
  }
  addBook(bookName, bookAuthor, bookStatus);
  removeAll();
  bookForm.reset();
  addBookModal.classList.remove("open");
});

function removeAll() {
  while (shelf.firstChild) {
    shelf.removeChild(shelf.firstChild);
  }
  displayBooks();
}
