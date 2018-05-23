const express = require('express');
const router = express.Router({});

const validate = require('../middleware/validate');
const mealController = require('../controllers/mealController');
const restaurantController = require('../controllers/restaurantController');

/* IN CRUD FORM */

// CREATE MEAL /api/meals/
router.post('/', validate.isLoggedIn, (req, res) => {
  mealController.create(req, () => {
    res.status(201).json({ message: 'Meal Created' });
  });
});

// READ ALL MEALS /api/meals/
router.get('/', (req, res) => {
  mealController.readAll(req, (meals) => {
    res.status(200).json({ meals: meals });
  });
});

// READ A MEAL /api/meals/:id
router.get('/:id', (req, res) => {
  mealController.read(req, res, (meal) => {
    res.status(200).json({ meal: meal });
  });
});

// UPDATE MEAL /api/meals/:id
router.put('/:id', validate.isLoggedIn, (req, res) => {
  mealController.validate(req, res, (result) => {
    mealController.update(req, (meal) => {
      res.status(200).json({ message: 'Meal Updated', meal: meal[0] });
    });
  });
});

// DELETE MEAL /api/meals/:id
router.delete('/:id', validate.isLoggedIn, (req, res) => {
  mealController.validate(req, res, (result) => {
    mealController.delete(req, () => {
      res.status(200).json({ message: 'Meal Deleted' });
    });
  });
});

module.exports = router;
