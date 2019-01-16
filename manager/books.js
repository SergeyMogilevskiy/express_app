const models = require("../models/books");

const getBooks = (page, limit) => {
  return models.getBooks(page, limit);
};

const getBookById = id => {
  return models.getBookById(id);
};

const postBook = (body) => {
  return models.postBook(body);
};

const deleteBook = id => {
  return models.deleteBook(id)
}

const updateBook = body => {
  return models.updateBook(body);
}

module.exports = { getBooks, getBookById, postBook, updateBook, deleteBook };
