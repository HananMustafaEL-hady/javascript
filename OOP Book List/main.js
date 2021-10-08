//Book Constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor

function UI() {}
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // create tr element

  const row = document.createElement("tr");

  // inswert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a class="delete">X<a/> </td>    
    `;

  list.appendChild(row);
};

//clear fields

UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//Event listeners

document.getElementById("book-form").addEventListener("submit", function (e) {
  // get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //instantiate book
  const book = new Book(title, author, isbn);

  //instantiate ui

  const ui = new UI();

  //add book to list

  ui.addBookToList(book);
  // clear field

  ui.clearFields();
  e.preventDefault();
});
