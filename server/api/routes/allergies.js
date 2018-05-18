const express = require('express');
const router = express.Router({});

const controller = require('../controllers/allergiesController');

router.get('/', function(req, res) {
  controller.getAllergies(function(allergies) {
    res.send({ allergies: allergies });
  });
});

module.exports = router;
