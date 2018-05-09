const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  console.log(req.user);
  res.send({ user: req.user });
});

module.exports = router;
