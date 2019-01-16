var express = require("express");

const manager = require("../manager/auth");

var router = express.Router();

/* GET users listing. */
router.post("/register", (req, res, next) => {
  manager
    .createUser({ ...req.body })
    .then(() => {
      res.send("completed successfully");
    })
    .catch(error => {
      next(error);
    });
});

router.get("/login", (req, res, next) => {
  const { email, pass } = req.body;
  manager
    .login(email)
    .then(data => {
      if (data.pass === pass) {
        req.session.valid = true;
        res.send("completed successfully");
      } else {
        res.send("Wrong password");
      }
    })
    .catch(error => {
      next(error);
    });
});

router.get("/logaut", (req, res, next) => {
  manager
    .logaut(req.body.email)
    .then(() => {
      req.session.valid = false;
      res.send("completed successfully");
    })
    .catch(error => {
      next(error);
    });
});

router.get("/secretpage", (req, res, next) => {
  console.log(req.session.valid)
  if (req.session.valid) {
    res.send("Hellow World");
  } else {
    res.send("401");
  }
});

module.exports = router;
