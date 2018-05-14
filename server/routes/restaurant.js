const express = require("express");
const router = express.Router();
const db = require("../config/db");
const myFunctions = require("./myFunctions");
const menuFunctions = require("./menu");


const restaurant = new db({ tableName: "restaurants" });
const Restaurant = db.extend({
  tableName: "restaurants"
});
const food = new db({ tableName: "food" });


/* GET home page. */
router.get("/", myFunctions.isLoggedIn, function(req, res, next) {
  var companyId = req.user.id;
  getRestaurants(companyId, function(restaurants) {
    res.send({ data: restaurants });
  });
});


router.post("/add", myFunctions.isLoggedIn, function(req, res, next) {
  var companyId = req.user.id;
  addRestaurant(req, companyId, function(formFields) {
    req.flash("restaurantMessage", "Added: " + JSON.stringify(formFields));
    res.redirect("/api/restaurant");
  });
});


router.get("/delete/:id", myFunctions.isLoggedIn, function(req, res, next) {
  var restaurantId = req.params.id;
  var companyId = req.user.id;
  checkOwnerRestaurant(restaurantId, companyId, function(row) {
    if (!row) {
      res.render("action", { data: "You do not own that menu item OR it does not exist." });
    }
    else {
      getFoodForRestaurant(restaurantId, function(foods) {

        if (foods.length > 0) {
          foods.forEach(function(food) {
            let foodId = food["id"];
            menuFunctions.getAllergiesForFood(foodId, function(checkedAllergies) {
              menuFunctions.deleteFoodAllergies(foodId, companyId, checkedAllergies, function(result) {
              });
            });
          });
          deleteRestaurant(restaurantId, companyId, function(result) {
          });
        }
        else {
          deleteRestaurant(restaurantId, companyId, function(result) {
          });
        }
      });
      res.redirect("/api/restaurant");
    }
  });
});

router.post("/update/:id", myFunctions.isLoggedIn, function(req, res, next) {
  var restaurantId = req.params.id;
  var companyId = req.user.id;
  checkOwnerRestaurant(restaurantId, companyId, function(row) {
    if (!row) {
      res.render("action", { data: "You do not own that menu item OR it does not exist." });
    }
    else {
      updateRestaurant(req, companyId, function(formFields) {
        res.redirect("/api/restaurant");
      });
    }
  });
});
module.exports = router;

// mysql functions related to register
function updateRestaurant(req, companyId, callback) {
  const formFields = req.body;
  const restaurant = new Restaurant({
    address: formFields.address,
    lat: formFields.lat,
    lon: formFields.lon,
    name: formFields.name,
    company_id: companyId,
    phone_number: formFields.phone_number,
    id: formFields.id
  });
  restaurant.save(function(err, rows, fields) {
    if (err) throw err;
    return callback();
  });
}

function addRestaurant(req, companyId, callback) {
  const formFields = req.body;
  const restaurant = new Restaurant({
    address: formFields.address,
    lat: formFields.lat,
    lon: formFields.lon,
    name: formFields.name,
    company_id: companyId,
    phone_number: formFields.phone_number
  });
  restaurant.save(function(err, rows, fields) {
    if (err) throw err;
    const rowId = rows.insertId;
    return callback();
  });
}


function getRestaurants(companyId, callback) {
  var query = "select * from restaurants where company_id =" + companyId;
  restaurant.query(query, function(err, rows, fields) {
    if (err) throw err;
    callback(rows);
  });
}


function deleteRestaurant(restaurantId, companyId) {
  restaurant.remove("id=" + restaurantId + " and company_id=" + companyId, function(err, res, fields) {
    if (err) throw err;
    return res;
  });
}

function checkOwnerRestaurant(restaurantId, companyId, callback) {
  restaurant.find("first", { where: ["company_id=" + companyId + " and id=" + restaurantId] }, function(err, row, fields) {
    if (err) throw err;
    return callback(row);
  });
}

function getFoodForRestaurant(restaurantId, callback) {
  food.find("all", { where: "restaurant_id=" + restaurantId }, function(err, foods, fields) {
    if (err) throw err;
    return callback(foods);
  });
}
