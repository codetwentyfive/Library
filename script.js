let myLibrary = [];

function Book() {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    event.preventDefault(); // Prevent form submission
  
    let title = document.getElementsByClassName("title").value;
    let author = document.getElementsByClassName("author").value;
    let pages = parseInt(document.getElementsByClassName("pages").value);
    let read = document.getElementsByClassName("read").checked;
  
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  
    displayBooks();
  }

  document.getElementsByClassName("add-btn").addEventListener("click", addBookToLibrary);


function displayBooks(){
    let bookDisplay=document.getElementsByClassName("book");
    bookDisplay.innerHtml="";

}