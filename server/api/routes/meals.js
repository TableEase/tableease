const express = require('express');
const router = express.Router({});

const validate = require('../middleware/validate');
const mealsController = require('../controllers/mealsController');
const allergyController = require('../controllers/allergiesController');
const restaurantController = require('../controllers/restaurantController');
const faController = require('../controllers/foodAllergiesController');

/* IN CRUD FORM */

// Move to new route
// router.get('/', validate.isLoggedIn, function(req, res, next) {
//   const companyId = req.user.id;
//   mealsController.getMenu(companyId, function(fullMenu) {
//     allergyController.createAllergies(fullMenu, function(fullMenu) {
//       res.send({ data: fullMenu });
//     });
//   });
// });

// CREATE MEAL /api/meals/
router.post('/', validate.isLoggedIn, (req, res, next) => {
  const companyId = req.user.id;
  const restaurantId = req.body.restaurant_id;
  restaurantController.validate(restaurantId, companyId, (row) => {
    if (!row) {
      res.send({ message: 'You do not own that restaurant.' });
    } else {
      mealsController.createMeal(req, companyId, (formFields) => {
        req.flash('menuMessage', 'Added: ' + JSON.stringify(formFields));
        res.redirect('/api/meals');
      });
    }
  });
});

// READ ALL MEALS /api/meals/
router.get('/', (req, res, next) => {
  const companyId = req.user.id;
  mealsController.readMeals(companyId, (fullMenu) => {
    allergyController.createAllergies(fullMenu, (fullMenu) => {
      res.send({ data: fullMenu });
    });
  });
});

// UPDATE MEAL /api/meals/:id
router.put('/:id', validate.isLoggedIn, (req, res, next) => {
  const foodId = req.params.id;
  const companyId = req.user.id;
  const checkedAllergies = req.body.checkedAllergies;
  foodFunctions.checkOwnerFood(foodId, companyId, (row) => {
    if (!row) {
      res.render('action', {
        data: 'You do not own that menu item OR it does not exist.'
      });
    } else {
      faController.updateFoodAllergies(
        foodId,
        companyId,
        checkedAllergies,
        (result) => {
          foodFunctions.updateFood(
            req,
            companyId,
            checkedAllergies,
            (formFields) => {
              res.redirect('/api/meals');
            }
          );
        }
      );
    }
  });
});

// DELETE MEAL /api/meals/:id
router.delete('/:id', validate.isLoggedIn, (req, res, next) => {
  const foodId = req.params.id;
  const companyId = req.user.id;
  mealsController.validate(foodId, companyId, (row) => {
    if (!row) {
      res.send({
        message: 'You do not own that menu item OR it does not exist.'
      });
    } else {
      mealsController.deleteMeal(foodId, companyId, (result) => {
        res.redirect('/api/meals');
      });
    }
  });
});

module.exports = router;
