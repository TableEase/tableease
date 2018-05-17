const express = require("express");
const router = express.Router({});

const myFunctions = require("./myFunctions");
const foodFunctions = require("./functions/foodController");
const allergyFunctions = require("./functions/allergiesController");
const restaurantFunctions = require("./functions/restaurantController");
const foodAllergiesFunctions = require("./functions/foodAllergiesController");

/* GET home page. */
router.get("/", myFunctions.isLoggedIn, function(req, res, next) {
  const companyId = req.user.id;
  foodFunctions.getMenu(companyId, function(fullMenu) {
    allergyFunctions.createAllergies(fullMenu, function(fullMenu) {
      res.send({ data: fullMenu });
    });
  });
});

router.get("/all", function(req, res, next) {
  const companyId = req.user.id;
  foodFunctions.getMenuAll(companyId, function(fullMenu) {
    allergyFunctions.createAllergies(fullMenu, function(fullMenu) {
      res.send({ data: fullMenu });
    });
  });
});

router.post("/add", myFunctions.isLoggedIn, function(req, res, next) {
  const companyId = req.user.id;
  const restaurantId = req.body.restaurant_id;
  restaurantFunctions.checkOwnerRestaurant(restaurantId, companyId, function(row) {
    if (!row) {
      res.send({ message: "You do not own that restaurant." });
    }
    else {
      foodFunctions.addFood(req, companyId, function(formFields) {
        req.flash("menuMessage", "Added: " + JSON.stringify(formFields));
        res.redirect("/api/menu");
      });
    }
  });
});


router.get("/delete/:id", myFunctions.isLoggedIn, function(req, res, next) {
  const foodId = req.params.id;
  const companyId = req.user.id;
  foodFunctions.checkOwnerFood(foodId, companyId, function(row) {
    if (!row) {
      res.send({ message: "You do not own that menu item OR it does not exist." });
    }
    else {
      foodFunctions.deleteFood(foodId, companyId, function(result) {
        res.redirect("/api/menu");
      });
    }
  });
});


router.post("/update/:id", myFunctions.isLoggedIn, function(req, res, next) {
  const foodId = req.params.id;
  const companyId = req.user.id;
  const checkedAllergies = req.body.checkedAllergies;
  foodFunctions.checkOwnerFood(foodId, companyId, function(row) {
    if (!row) {
      res.render("action", { data: "You do not own that menu item OR it does not exist." });
    }
    else {
      foodAllergiesFunctions.updateFoodAllergies(foodId, companyId, checkedAllergies, function(result) {
        foodFunctions.updateFood(req, companyId, checkedAllergies, function(formFields) {
          res.redirect("/api/menu");
        });
      });
    }
  });
});

module.exports = router;
