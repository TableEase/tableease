const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send({ user: req.user, title: "TableEase" });
});

module.exports = router;
