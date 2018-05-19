const express = require('express');
const router = express.Router({});
const validate = require('../middleware/validate');
const restaurantController = require('../controllers/restaurantController');

/* IN CRUD FORM */

// move?
// router.get('/', validate.isLoggedIn, (req, res, next) => {
//   const companyId = req.user.id;
//   restaurantController.getRestaurants(companyId, (restaurants) => {
//     restaurantController.createAddress(restaurants, (restaurants) => {
//       // res.send({ data: restaurants });
//       res.status(200).json({ data: restaurants });
//     });
//   });
// });

// CREATE RESTAURANT /api/restaurants/
router.post('/', validate.isLoggedIn, (req, res, next) => {
  restaurantController.create(req, (result) => {
    if (result) {
      restaurantController.read(result.insertId, (rows) => {
        restaurant = restaurantController.parseAddress(rows);
        res.send(200, {
          message: 'Restaurant Created',
          restaurant: restaurant[0]
        });
      });
    }
  });
});

// READ ALL RESTAURANTS /api/restaurants/
router.get('/', (req, res, next) => {
  restaurantController.readAll((rows) => {
    restaurants = restaurantController.parseAddress(rows);
    res.send(200, { restaurants: restaurants });
  });
});

// READ A RESTAURANT /api/restaurants/:id
router.get('/:id', (req, res, next) => {
  restaurantController.read(req.params.id, (rows) => {
    if (rows.length < 1) {
      return res.send(404, { message: 'No Restaurant Found' });
    }
    restaurant = restaurantController.parseAddress(rows);
    res.send(200, { restaurant: restaurant[0] });
  });
});

// UPDATE RESTAURANT /api/restaurants/:id
router.put('/:id', validate.isLoggedIn, (req, res, next) => {
  restaurantController.validate(req, (result) => {
    if (!result) {
      return res.send(404, { message: 'Not Found' });
    }

    restaurantController.update(req, (result) => {
      if (result) {
        restaurantController.read(req.params.id, (rows) => {
          restaurant = restaurantController.parseAddress(rows);
          res.send(200, {
            message: 'Restaurant Updated',
            restaurant: restaurant[0]
          });
        });
      }
    });
  });
});

// DELETE REASTAURANT /api/restaurants/:id
router.delete('/:id', validate.isLoggedIn, (req, res, next) => {
  restaurantController.validate(req, (result) => {
    // ??? Should we delete or deactivate instead?
    // if (!result) {
    if (result.active === 0) {
      return res.send(404, { message: 'Not Found' });
    }

    // ??? Should we delete or deactivate instead?
    restaurantController.delete(req, () => {
      res.send(200, { message: 'Restaurant Deleted' });
    });
  });
});

module.exports = router;
