var createError = require("http-errors");
var express = require("express");
var router = express.Router();

const { getConnection } = require("../lib/db");

const db = getConnection();

router.get("/products", function(req, res, next) {
  db.any("SELECT * FROM books")
    .then(function(data) {
      const { _page: page = 1, _limit: limit = 4 } = req.query;
      const response = data.slice((page - 1) * limit, limit * page);
      res.setHeader("X-Total-Count", data.length);
      res.send(response);
    })
    .catch(function(error) {
      console.log("ERROR:", error);
    });
});

router.get("/product/:id", function(req, res, next) {
  db.one(`SELECT * FROM books WHERE "id" = ${req.param("id")}`)
    .then(function(data) {
      data;
      res.send(data);
    })
    .catch(function(error) {
      console.log("ERROR:", error);
    });
});

module.exports = router;
