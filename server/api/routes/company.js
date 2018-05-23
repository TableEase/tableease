const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');
const restaurantController = require('../controllers/restaurantController');
const mealController = require('../controllers/mealController');

// CREATE COMPANY
router.post('/', validate.isLoggedIn, (req, res) => {
  restaurantController.readAll(req, (restaurants) => {
    res.status(200).json({ data: restaurants });
  });
});

// READ COMPANY /api/company/

// UPDATE COMPANY /api/company/
router.put('/:id', validate.isLoggedIn, (req, res) => {
  res.status(200).json({ message: 'ENTER MESSAGE' });
});

// DELETE COMPANY /api/company
router.put('/:id', validate.isLoggedIn, (req, res) => {
  res.status(200).json({ message: 'ENTER MESSAGE' });
});

// READ COMPANY RESTAURANTS /api/company/restaurants/
router.get('/restaurants/', (req, res) => {
  restaurantController.readAll(req, res, true, (restaurants) => {
    res.status(200).json({ restaurants: restaurants });
  });
});

// Possibly do not need
// READ A COMPANY RESTAURANT /api/company/restaurants/:id
router.get('/restaurants/:id', (req, res) => {
  restaurantController.read(req, true, (restaurants) => {
    res.status(200).json({ restaurants: restaurants });
  });
});

// READ COMPANY RESTAURANT MEALS /api/company/restaurants/:id/meals
router.get('/restaurants/:id/meals', (req, res) => {
  mealController.readAll(req, res, (meals) => {
    res.status(200).json({ meals: meals });
  });
});

module.exports = router;
