function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}


function getBooksBorrowedCount(books) {
  let total = 0;
   books.forEach((book) => {
     if(!book.borrows[0].returned) total++;
   });
  return total;
}

function sortedSliced(unsorted, topNum) {
  const sorted = Object.values(unsorted.sort((previous, current) => {
  return previous.count > current.count ? -1 : 1 }));
  return sorted.slice(0, topNum);
}

function getMostCommonGenres(books) {
  const genres = books.reduce((total, book) => {
    const { genre } = book;
    if (!total[genre]) total[genre] = { name: genre, count: 1 };
    else total[genre].count++; 
    return total;
  }, {});
  return Object.values(genres).sort((genreA, genreB) => 
         genreB.count - genreA.count).slice(0,5);
}

function getMostPopularBooks(books) {
  const mostPopular = [];
  books.forEach((book) => {
    const popularCount = { name: book.title, count: book.borrows.length };
    mostPopular.push(popularCount);
  });
  return sortedSliced(mostPopular, 5);
}

function getMostPopularAuthors(books, authors) {
  return books.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length
    };
  }).sort((authorA, authorB) => authorB.count - authorA.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
