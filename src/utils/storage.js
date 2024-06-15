export function addToBookshelf(book) {
    const myBookshelf = localStorage.getItem("myBookshelf");
    if (myBookshelf) {
        const bookshelf = JSON.parse(myBookshelf);
        const bookExists = bookshelf.some(
            (existingBook) => existingBook.id === book.id
        );
        if (!bookExists) {
            bookshelf.push(book);
            localStorage.setItem("myBookshelf", JSON.stringify(bookshelf));
        }
    } else {
        localStorage.setItem("myBookshelf", JSON.stringify([book]));
    }
}