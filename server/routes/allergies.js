const express = require("express");
const router = express.Router();
const db = require("../config/db");

const allergy = new db({ tableName: "allergies" });


router.get("/", function(req, res) {
  getAllergies(function(allergies) {
    res.send({ allergies: allergies });
  });
});

module.exports = router;

function getAllergies(callback) {
  allergy.find("all", {}, function(err, rows, fields) {
    if (err) throw err;
    return callback(rows);
  });
}
