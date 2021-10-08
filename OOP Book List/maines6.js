class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  showAlert(message, className) {
    const divEl = document.createElement("div");

    // add classes name

    divEl.className = `alert ${className}`;

    // add text

    divEl.appendChild(document.createTextNode(message));

    // get parent

    const container = document.querySelector(".container");
    //get form
    const form = document.querySelector("#book-form");

    //insert alert

    container.insertBefore(divEl, form);

    //timeout after 3 sec

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//Event listener for add book

document.getElementById("book-form").addEventListener("submit", function (e) {
  // get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //instantiate book
  const book = new Book(title, author, isbn);

  //instantiate ui

  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    //Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    //add book to list

    ui.addBookToList(book);

    //show alert
    ui.showAlert("Book Added 🎉", "success");

    // clear field

    ui.clearFields();
  }

  e.preventDefault();
});

//Event listener for delete

document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();

  ui.deleteBook(e.target);
  if (e.target.className === "delete") {
    // show alert

    ui.showAlert("Book Removed", "success");
  }
  e.preventDefault();
});
