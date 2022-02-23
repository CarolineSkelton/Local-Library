function findAccountById(accounts, id) {
  return accounts.find((accounts) => accounts.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
    let total = 0;
    books.forEach((book) => book.borrows.forEach((borrow) => {
      if(account.id === borrow.id) total ++;
    }
    ));
    return total;
}                   

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = [];
  books.forEach(book => {
    let borrowed = book.borrows;
      if (borrowed.find((borrow) => borrow.id === account.id &&
          !borrow.returned)) {
      checkedOut.push(book);
    }
  });
  
  checkedOut.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    book.author = author;
  })
  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
