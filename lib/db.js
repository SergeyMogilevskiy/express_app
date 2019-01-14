const pgp = require("pg-promise")();
let db = false;

const getConnection = () => {
  const connection = 'postgres://sergey:150391@localhost:5432/sergey';
  if (!db) {
    db = pgp(connection);
  }
  
  return db;
};

module.exports = { getConnection };