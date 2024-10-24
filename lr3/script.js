let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997,
    isRead: true,

    bookInfo(){
        console.log(`Навза: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`)
    }
};
book.isRead = !book.isRead;
book.bookInfo();

let library = [
    {title: "Harry Potter", author: "J.K. Rowling", year: 1997, isRead: false,},
    {title: "Kobzar", author: "T.H. Shevchenko", year: 1840 , isRead: true,},
];

function displayLibrary() {
    library.forEach(book => {
        console.log(`Навза: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`)     
    })
};

displayLibrary();

library.push({title: "The Adventures of Tom Sawyer", author: "Mark Twain", year: 1876 , isRead: true,})

displayLibrary();

library.sort((a, b) => a.year - b.year);
console.log("Відсортовані книги за роком видання: ", library)

let unreadBooks = library.filter(book => !book.isRead);
console.log("Непрочитані книги: ", unreadBooks);

let twainBooks = library.find(book => book.author === "Mark Twain");
console.log("Книги Бекетта: ", twainBooks);

function addBookToLibrary() {
    let title = prompt("Введіть назву книги:");
    let author = prompt("Введіть автора книги:");
    let year = prompt("Введіть рік видання книги:");
    let isRead = confirm("Чи прочитана книга?");
    
    library.push({title, author, year, isRead});
    displayLibrary();
}

addBookToLibrary();


