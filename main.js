const myLibrary = [];

function Book(name, pages) {
  this.name = name;
  this.pages = pages;
}

function addBook(name, pages) {
  let book = new Book(name, pages);
  myLibrary.push(book);
}

addBook("Book n1", 3);

addBook("Book n2", 9);

addBook("Book n3", 8);

const shelf = document.querySelector(".shelf");
const bookCard = document.createElement("div");
bookCard.classList.add("book");

myLibrary.forEach((book) => {
  let bookClone = bookCard.cloneNode(true);
  bookClone.textContent = `name: ${book.name}, pages: ${book.pages}`;
  console.log(book);

  shelf.appendChild(bookClone);
});
