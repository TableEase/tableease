const express = require('express');
const router = express.Router({});

const validate = require('../middleware/validate');
const mealController = require('../controllers/mealController');
const restaurantController = require('../controllers/restaurantController');

/* IN CRUD FORM */

// CREATE MEAL /api/meals/
router.post('/', validate.isLoggedIn, (req, res) => {
  restaurantController.validate(req, (result) => {
    if (result.company_id === req.user.id && result.active === 1) {
      mealController.create(req, (result, allergies) => {
        mealController.read(result.insertId, (meal) => {
          res.status(201).json({ message: 'Meal Created', meal: meal[0] });
        });
      });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
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
  mealController.read(req, (meal) => {
    res.status(200).json({ meal: meal });
  });
});

// UPDATE MEAL /api/meals/:id
router.put('/:id', validate.isLoggedIn, (req, res) => {
  mealController.validate(req, (result) => {
    if (result.length < 1) {
      return res.status(404).json({ message: 'Not Found' });
    }
    mealController.update(req, (result, allergies) => {
      if (result) {
        mealController.read(req, (meal) => {
          res.status(200).json({ message: 'Meal Updated', meal: meal[0] });
        });
      }
    });
  });
});

// DELETE MEAL /api/meals/:id
router.delete('/:id', validate.isLoggedIn, (req, res) => {
  mealController.validate(req, (result) => {
    if (result.length < 1) {
      return res.status(404).json({ message: 'Not Found' });
    }
    mealController.delete(req, () => {
      res.status(200).json({ message: 'Meal Deleted' });
    });
  });
});

module.exports = router;
