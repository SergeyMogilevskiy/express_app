var express = require("express");

const manager = require("../manager/books");

var router = express.Router();

router.get("/products", (req, res, next) => {
  const { _page: page, _limit: limit } = req.query;
  manager
    .getBooks(Number(page), Number(limit))
    .then(function(data) {
      res.setHeader("X-Total-Count", 14);
      res.send(data);
    })
    .catch(function(error) {
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
  manager
    .postBook({ ...req.body })
    .then(function() {
      res.send("completed successfully");
    })
    .catch(function(error) {
      next(error);
    });
});

router.use("/delete", (req, res, next) => {
  manager
    .deleteBook(req.body.id)
    .then(function() {
      res.send("completed successfully");
    })
    .catch(function(error) {
      next(error);
    });
});

router.use("/update", (req, res, next) => {
  console.log('====asd===')
  manager
    .updateBook({ ...req.body })
    .then(function() {
      res.send("completed successfully");
    })
    .catch(function(error) {
      next(error);
    });
});

module.exports = router;
