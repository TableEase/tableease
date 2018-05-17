const express = require("express");
const router = express.Router({});
const myFunctions = require("./myFunctions");

router.get("/", myFunctions.isLoggedIn, function(req, res) {
  req.logout();
  res.send({ message: "success" });
});

module.exports = router;
