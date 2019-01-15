// const { getConnection } = require("../lib/db");

const Books = require("../lib/db");

// const db = getConnection();

function getBooks(page, limit) {
  return Books.query('orderBy', 'id', 'ASC').fetchPage({ page: page, pageSize: limit});
}

// function getBooks(page, limit) {
//   return db.any(`SELECT * FROM books ORDER BY id LIMIT $1 OFFSET $2;`, [
//     limit,
//     page - 1
//   ]);
// }

function getTotalBooks() {
  return db.one(`SELECT COUNT(*) FROM "public"."books"`);
}

function getBookById(id) {
  return db.one(`SELECT * FROM books WHERE "id" = $1`, [id]);
}

function postBook(body) {
  return db.one(
    `INSERT INTO "public"."books"
    ( "author_id", "currency", "description", "img", "price", "title") 
    VALUES ( $1, $2, $3, $4, $5, $6 );`,
    [
      body.author_id,
      body.currency,
      body.description,
      body.img,
      body.price,
      body.title
    ]
  );
}



// function updateBook(id, body) {
//   return db.one(
//     `UPDATE "public"."books" 
//     SET "currency" = <currency>, "description" = <description> 
//     WHERE "id" = <id>;`
//   );
// }

module.exports = { getBooks, getBookById, getTotalBooks, postBook };
