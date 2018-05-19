const express = require('express');
const router = express.Router({});
const myFunctions = require('../middleware/myFunctions');
const restaurantController = require('../controllers/restaurantController');

/* IN CRUD FORM */

// move?
// router.get('/', myFunctions.isLoggedIn, (req, res, next) => {
//   const companyId = req.user.id;
//   restaurantController.getRestaurants(companyId, (restaurants) => {
//     restaurantController.createAddress(restaurants, (restaurants) => {
//       // res.send({ data: restaurants });
//       res.status(200).json({ data: restaurants });
//     });
//   });
// });

// CREATE RESTAURANT /api/restaurants/
router.post('/', myFunctions.isLoggedIn, (req, res, next) => {
  const companyId = req.user.id;
  restaurantController.addRestaurant(req, companyId, (formFields) => {
    req.flash('restaurantMessage', 'Added: ' + JSON.stringify(formFields));
    res.redirect('/api/restaurant');
  });
});

// READ ALL RESTAURANTS /api/restaurants/
router.get('/', (req, res, next) => {
  const companyId = req.user.id;
  restaurantController.getRestaurantsAll(companyId, (restaurants) => {
    restaurantController.createAddress(restaurants, (restaurants) => {
      res.status(200).json({ data: restaurants });
    });
  });
});

// UPDATE RESTAURANT /api/restaurants/:id
router.put('/:id', myFunctions.isLoggedIn, (req, res, next) => {
  const restaurantId = req.params.id;
  const companyId = req.user.id;
  restaurantController.checkOwnerRestaurant(restaurantId, companyId, (row) => {
    if (!row) {
      res.render('action', {
        data: 'You do not own that menu item OR it does not exist.'
      });
    } else {
      restaurantController.updateRestaurant(req, companyId, (formFields) => {
        res.redirect('/api/restaurant');
      });
    }
  });
});

// DELETE REASTAURANT /api/restaurants/:id
router.delete('/:id', myFunctions.isLoggedIn, (req, res, next) => {
  const restaurantId = req.params.id;
  const companyId = req.user.id;
  restaurantController.checkOwnerRestaurant(restaurantId, companyId, (row) => {
    if (!row) {
      res.render('action', {
        data: 'You do not own that menu item OR it does not exist.'
      });
    } else {
      restaurantController.deleteRestaurant(
        restaurantId,
        companyId,
        (result) => {
          res.redirect('/api/restaurant');
        }
      );
    }
  });
});

module.exports = router;
