var express = require("express");
const { books } = require("../lib/db");

var router = express.Router();

const manager = require("../manager/books");

router.get("/products", (req, res, next) => {
  console.log('=========123========')
  const { _page: page, _limit: limit } = req.query;
  manager
    .getBooks( Number(page), Number(limit))
    .then(function(data) {
      console.log(data);

      res.setHeader("X-Total-Count", 14);
      res.send(data);
    })
    .catch(function(error) {
      console.log(error);
      next(error);
    });
});

router.get("/product/:id", (req, res, next) => {
  manager
    .getBookById(req.param("id"))
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      next(error);
    });
});

router.post("/post", (req, res, next) => {
  const data = { ...req.body };
  manager
    .postBook(data)
    .then(function() {
      res.send("completed successfully");
    })
    .catch(function(error) {
      next(error);
    });
});

router.post("/update", (req, res, next) => {
  const body = { ...req.body };
  const data = [];
  console.log(body);
  
  // manager
  //   .updateBook(data)
  //   .then(function() {
  //     res.send("completed successfully");
  //   })
  //   .catch(function(error) {
  //     next(error);
  //   });
});

module.exports = router;
