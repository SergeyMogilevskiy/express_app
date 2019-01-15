const models = require("../models/models");

// const getBooks = (page, limit) => {
//   return Promise.all([model.getBooks(page, limit), model.getTotalBooks()]);
// };

const getBooks = (page, limit) => {
  return models.getBooks(page, limit);
};

const getBookById = id => {
  return models.getBookById(id);
};

const postBook = (body) => {
  return models.postBook(body);
};

const updateBook = (body, id) => {
  // return models.updateBook(body, id);
}

module.exports = { getBooks, getBookById, postBook, updateBook };
