const express = require('express');
const router = express.Router({});

const myFunctions = require('../middleware/myFunctions');
const foodController = require('../controllers/foodController');
const allergyController = require('../controllers/allergiesController');
const restaurantController = require('../controllers/restaurantController');
const faController = require('../controllers/foodAllergiesController');

/* IN CRUD FORM */

// Move to new route
router.get('/', myFunctions.isLoggedIn, function(req, res, next) {
  const companyId = req.user.id;
  foodController.getMenu(companyId, function(fullMenu) {
    allergyController.createAllergies(fullMenu, function(fullMenu) {
      res.send({ data: fullMenu });
    });
  });
});

// CREATE MEAL /api/meals/
router.post('/', myFunctions.isLoggedIn, function(req, res, next) {
  const companyId = req.user.id;
  const restaurantId = req.body.restaurant_id;
  restaurantController.checkOwnerRestaurant(restaurantId, companyId, function(
    row
  ) {
    if (!row) {
      res.send({ message: 'You do not own that restaurant.' });
    } else {
      foodController.addFood(req, companyId, function(formFields) {
        req.flash('menuMessage', 'Added: ' + JSON.stringify(formFields));
        res.redirect('/api/meals');
      });
    }
  });
});

// READ ALL MEALS /api/meals/
router.get('/', function(req, res, next) {
  const companyId = req.user.id;
  foodController.getMenuAll(companyId, function(fullMenu) {
    allergyController.createAllergies(fullMenu, function(fullMenu) {
      res.send({ data: fullMenu });
    });
  });
});

// UPDATE MEAL /api/meals/:id
router.put('/:id', myFunctions.isLoggedIn, function(req, res, next) {
  const foodId = req.params.id;
  const companyId = req.user.id;
  const checkedAllergies = req.body.checkedAllergies;
  foodFunctions.checkOwnerFood(foodId, companyId, function(row) {
    if (!row) {
      res.render('action', {
        data: 'You do not own that menu item OR it does not exist.'
      });
    } else {
      faController.updateFoodAllergies(
        foodId,
        companyId,
        checkedAllergies,
        function(result) {
          foodFunctions.updateFood(req, companyId, checkedAllergies, function(
            formFields
          ) {
            res.redirect('/api/meals');
          });
        }
      );
    }
  });
});

// DELETE MEAL /api/meals/:id
router.delete('/:id', myFunctions.isLoggedIn, function(req, res, next) {
  const foodId = req.params.id;
  const companyId = req.user.id;
  foodController.checkOwnerFood(foodId, companyId, function(row) {
    if (!row) {
      res.send({
        message: 'You do not own that menu item OR it does not exist.'
      });
    } else {
      foodController.deleteFood(foodId, companyId, function(result) {
        res.redirect('/api/meals');
      });
    }
  });
});

module.exports = router;
