const express = require("express");
const router = express.Router({});
const myFunctions = require("./myFunctions");

const restaurantFunctions = require("./functions/restaurantController");

/* GET home page. */
router.get("/", myFunctions.isLoggedIn, function(req, res, next) {
  const companyId = req.user.id;
  restaurantFunctions.getRestaurants(companyId, function(restaurants) {
    restaurantFunctions.createAddress(restaurants, function(restaurants) {
      res.send({ data: restaurants });
    });

  });
});

router.get("/all", function(req, res, next) {
  const companyId = req.user.id;
  restaurantFunctions.getRestaurantsAll(companyId, function(restaurants) {
    restaurantFunctions.createAddress(restaurants, function(restaurants) {
      res.send({ data: restaurants });
    });

  });
});


router.post("/add", myFunctions.isLoggedIn, function(req, res, next) {
  const companyId = req.user.id;
  restaurantFunctions.addRestaurant(req, companyId, function(formFields) {
    req.flash("restaurantMessage", "Added: " + JSON.stringify(formFields));
    res.redirect("/api/restaurant");
  });
});


router.get("/delete/:id", myFunctions.isLoggedIn, function(req, res, next) {
  const restaurantId = req.params.id;
  const companyId = req.user.id;
  restaurantFunctions.checkOwnerRestaurant(restaurantId, companyId, function(row) {
    if (!row) {
      res.render("action", { data: "You do not own that menu item OR it does not exist." });
    }
    else {
      restaurantFunctions.deleteRestaurant(restaurantId, companyId, function(result) {
        res.redirect("/api/restaurant");
      });
    }
  });
});

router.post("/update/:id", myFunctions.isLoggedIn, function(req, res, next) {
  const restaurantId = req.params.id;
  const companyId = req.user.id;
  restaurantFunctions.checkOwnerRestaurant(restaurantId, companyId, function(row) {
    if (!row) {
      res.render("action", { data: "You do not own that menu item OR it does not exist." });
    }
    else {
      restaurantFunctions.updateRestaurant(req, companyId, function(formFields) {
        res.redirect("/api/restaurant");
      });
    }
  });
});
module.exports = router;

