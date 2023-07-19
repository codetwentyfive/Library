let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let libraryBook = document.querySelector()
}

function addBookToLibrary() {

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checker;

  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  render():


}



let newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";

})

document.querySelector("#new-book-form").addEventListener("submit", function () {
  event.preventDefault();
  addBookToLibrary();
})