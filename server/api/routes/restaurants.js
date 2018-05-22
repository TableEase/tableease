const express = require('express');
const router = express.Router({});
const validate = require('../middleware/validate');
const restaurantController = require('../controllers/restaurantController');
const companyController = require('../controllers/companyController');

/* IN CRUD FORM */

// CREATE RESTAURANT /api/restaurants/
router.post('/', validate.isLoggedIn, (req, res, next) => {
  companyController.validate(req, (result) => {
    if (result) {
      restaurantController.create(req, (result) => {
        if (result.insertId) {
          restaurantController.read(result.insertId, (restaurant) => {
            res.status(200).json({
              message: 'Restaurant Created',
              restaurant: restaurant[0]
            });
          });
        }
      });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  });
});

// READ ALL RESTAURANTS /api/restaurants/
router.get('/', (req, res, next) => {
  restaurantController.readAll(req, (restaurants) => {
    if (restaurants.length < 1) {
      return res.status(404).json({ message: 'No Restaurants Found' });
    }
    res.status(200).json({ restaurant: restaurants });
  });
});

// READ A RESTAURANT /api/restaurants/:id
router.get('/:id', (req, res, next) => {
  restaurantController.read(req, (restaurant) => {
    if (restaurant.length < 1) {
      return res.status(404).json({ message: 'No Restaurant Found' });
    }
    res.status(200).json({ restaurant: restaurant[0] });
  });
});

// UPDATE RESTAURANT /api/restaurants/:id
router.put('/:id', validate.isLoggedIn, (req, res, next) => {
  companyController.validate(req, (result) => {
    if (result) {
      restaurantController.validate(req, (result) => {
        if (!result) {
          return res.status(404).json({ message: 'Not Found' });
        }
        restaurantController.update(req, (result) => {
          if (result) {
            restaurantController.read(req.params.id, (restaurant) => {
              res.status(200).json({
                message: 'Restaurant Updated',
                restaurant: restaurant[0]
              });
            });
          }
        });
      });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  });
});

// DELETE REASTAURANT /api/restaurants/:id
router.delete('/:id', validate.isLoggedIn, (req, res, next) => {
  companyController.validate(req, (result) => {
    restaurantController.validate(req, (result) => {
      // ??? Should we delete or deactivate instead?
      // if (!result) {
      if (result.active === 0) {
        return res.status(404).json({ message: 'Not Found' });
      }

      // ??? Should we delete or deactivate instead?
      restaurantController.delete(req, () => {
        res.status(200).json({ message: 'Restaurant Deleted' });
      });
    });
  });
});

module.exports = router;
