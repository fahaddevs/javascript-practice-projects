// Define all selectors 
let addBookForm = document.querySelector('#book_form');

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor(){

  }

  addNewBook(book){
    let bookList = document.querySelector('#book_list');

    let row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#">X</a></td>`;

    bookList.appendChild(row);
  }

  clearFiels(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}



addBookForm.addEventListener('submit', addBook);


function addBook (e){
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let isbn = document.querySelector('#isbn').value;

  let book = new Book(title,author,isbn);

  let ui = new UI();
  ui.addNewBook(book);
  ui.clearFiels();
}