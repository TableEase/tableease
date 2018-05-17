const express = require("express");
const router = express.Router({});

const allergyFunctions = require("./functions/allergiesController");

router.get("/", function(req, res) {
  allergyFunctions.getAllergies(function(allergies) {
    res.send({ allergies: allergies });
  });
});

module.exports = router;
