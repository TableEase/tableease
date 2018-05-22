const express = require('express');
const router = express.Router({});
const validate = require('../middleware/validate');
const restaurantController = require('../controllers/restaurantController');
const companyController = require('../controllers/companyController');

/* IN CRUD FORM */

// CREATE RESTAURANT /api/restaurants/
router.post('/', validate.isLoggedIn, (req, res, next) => {
  restaurantController.create(req, (result) => {
    res.status(200).json({
      message: 'Restaurant Created',
      restaurant: restaurant[0]
    });
  });
});

// READ ALL RESTAURANTS /api/restaurants/
router.get('/', (req, res, next) => {
  restaurantController.readAll(req, res, (restaurants) => {
    res.status(200).json({ restaurant: restaurants });
  });
});

// READ A RESTAURANT /api/restaurants/:id
router.get('/:id', (req, res, next) => {
  restaurantController.read(req, res, (restaurant) => {
    res.status(200).json({ restaurant: restaurant[0] });
  });
});

// UPDATE RESTAURANT /api/restaurants/:id
router.put('/:id', validate.isLoggedIn, (req, res, next) => {
  restaurantController.validate(req, res, (result) => {
    restaurantController.update(req, (restaurant) => {
      res.status(200).json({
        message: 'Restaurant Updated',
        restaurant: restaurant[0]
      });
    });
  });
});

// DELETE REASTAURANT /api/restaurants/:id
router.delete('/:id', validate.isLoggedIn, (req, res, next) => {
  companyController.validate(req, res, (result) => {
    restaurantController.validate(req, res, (result) => {
      // ??? Should we delete or deactivate instead?
      restaurantController.delete(req, () => {
        res.status(200).json({ message: 'Restaurant Deleted' });
      });
    });
  });
});

module.exports = router;
