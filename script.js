let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let bookDisplay = document.querySelector(".bookDisplay");
  bookDisplay.innerHTML = ""; // empties the html 
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `<div class="book">
                    <h2 class="title">${book.title}</h2>
                    <p class="author">By: <${book.author}/p>
                    <p class="pages">Pages:${book.pages}304</p>
                    <p class "read-status">${book.read ? "Read" : "Not read yet"}</p>
                    <button class="removeBtn" onclick="removeBook(${i})">Remove</button>
                    </div>`;
    bookDisplay.appendChild(bookEl);
  }



}
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}
function addBookToLibrary() {

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checker;

  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  render();


}



let newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "flex";

})

document.querySelector("#new-book-form").addEventListener("submit", function () {
  event.preventDefault();
  addBookToLibrary();
})