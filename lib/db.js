// pg-promise
// const pgp = require("pg-promise")();
// let db = false;

// const getConnection = () => {
//   const connection = 'postgres://sergey:150391@localhost:5432/sergey';
//   if (!db) {
//     db = pgp(connection);
//   }

//   return db;
// };

// module.exports = { getConnection };

// ==========bookshel============
var knex = require("knex")({
  client: "pg",
  connection: "postgres://sergey:150391@localhost:5432/sergey"
});

var bookshelf = require("bookshelf")(knex);
bookshelf.plugin("pagination");

var Books = bookshelf.Model.extend({
  tableName: "books"
});

var Users = bookshelf.Model.extend({
  tableName: "users"
});

module.exports = { Books, Users };
