function findAuthorById(authors, id) {
  return authors.filter((author) => author.id === id)
  .find((author) => author); 
}

function findBookById(books, id) {
  return books.filter((book) => book.id === id)
  .find((book) => book);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => !book.borrows[0].returned);
  const returnedBook = books.filter((book) => book.borrows[0].returned);
  const newArray = [];
  newArray.push(checkedOut);
  newArray.push(returnedBook);
  return newArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(patron => patron.id === borrow.id)
    return {...borrow, ...account}
  }).slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
