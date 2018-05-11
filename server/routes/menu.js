const express = require("express");
const router = express.Router();
const db = require("../config/db");
const myFunctions = require("./myFunctions");

const restaurant = new db({ tableName: "restaurants" });
const allergies = new db({ tableName: "allergies" });
const Allergy = db.extend({
  tableName: "allergies"
});
const food = new db({ tableName: "food" });
const Food = db.extend({
  tableName: "food"
});
const foodAllergy = new db({ tableName: "food_allergy" });
const FoodAllergy = db.extend({
  tableName: "food_allergy"
});

/* GET home page. */
router.get("/", myFunctions.isLoggedIn, function(req, res, next) {
  var companyId = req.user.id;
  getMenu(companyId, function(fullMenu) {
    createAllergies(fullMenu, function(fullMenu) {
      res.send({ data: fullMenu });
    });
  });

});


router.post("/add", myFunctions.isLoggedIn, function(req, res, next) {
  var companyId = req.user.id;
  var restaurantId = req.body.restaurant_id;
  checkOwnerRestaurant(restaurantId, companyId, function(row) {
    if (!row) {
      res.send({ message: "You do not own that restaurant." });
    }
    else {
      addFood(req, companyId, function(formFields) {
        req.flash("menuMessage", "Added: " + JSON.stringify(formFields));
        res.redirect("/api/menu");
      });
    }
  });
});


router.get("/delete/:id", myFunctions.isLoggedIn, function(req, res, next) {
  var foodId = req.params.id;
  var companyId = req.user.id;
  checkOwnerFood(foodId, companyId, function(row) {
    if (!row) {
      res.send({ message: "You do not own that menu item OR it does not exist." });
    }
    else {
      getAllergiesForFood(foodId, function(checkedAllergies) {
        deleteFoodAllergies(foodId, companyId, checkedAllergies, function(result) {
          res.redirect("/api/menu");
        });
      });

    }

  });
});


router.post("/update/:id", myFunctions.isLoggedIn, function(req, res, next) {
  var foodId = req.params.id;
  var companyId = req.user.id;
  var checkedAllergies = req.body.checkedAllergies;
  checkOwnerFood(foodId, companyId, function(row) {
    if (!row) {
      res.render("action", { data: "You do not own that menu item OR it does not exist." });
    }
    else {
      updateFoodAllergies(foodId, companyId, checkedAllergies, function(result) {
        updateFood(req, companyId, checkedAllergies, function(formFields) {
          res.redirect("/api/menu");
        });
      });
    }
  });
});

module.exports = router;


// mysql functions related to register

function createAllergies(fullMenu, callback) {
  fullMenu.forEach(function(item) {
    item["allergies"] = [];
    if (item["allergy_active"] === "1") {
      item["allergy_ids"] = item["allergy_ids"].split(",").map(Number);
      item["allergy_names"] = item["allergy_names"].split(",");
      for (let i = 0; i < item["allergy_ids"].length; i++) {
        item["allergies"].push({ id: item["allergy_ids"][i], name: item["allergy_names"][i], active: 1 });
      }
    }
  });
  callback(fullMenu);
}


function getAllergiesMenu(companyId, rows, callback) {
  var jsonReturn = [];

  rows.forEach(function(row, callback1) {
    getAllergiesFood(row, function(err, allergyRow) {
      //       jsonReturn.push(allergyRow);
      //       callback1();
    });

    //
    // }, function(err) {
    //   callback(err, jsonReturn);
  });
  callback(rows);
}


function setAllergyList(allergies, row, callback) {
  var allergyList = [];
  var allergyIds = [];

  allergies.forEach(function(allergy) {
    // console.log(allergy)
    convertIdAllergy(allergy.allergy_id, function(name) {
      //   allergyList.push(name);
      //   allergyIds.push(allergy.allergy_id);
      //   callback1();
    });
  }, function(err) {
    row.allergyNames = allergyList;
    row.allergyIds = allergyIds;
    callback();
  });
}

function getAllergiesFood(row, callback) {
  var foodId = row.id;
  getAllergiesForFood(foodId, function(allergies) {
    setAllergyList(allergies, row, function() {
      callback(row);
    });
  });
}

function updateFood(req, companyId, checkedAllergies, callback) {
  const formFields = req.body;
  const food = new Food({
    company_id: companyId,
    name: formFields.name,
    description: formFields.description,
    price: formFields.price,
    id: formFields.food_id,
    restaurant_id: formFields.restaurant_id
  });

  food.save(function(err, rows, fields) {
    if (err) throw err;
    return callback(addFoodAllergy(food.id, checkedAllergies));
  });
}


function addFood(req, companyId, callback) {
  const formFields = req.body;
  const checkedAllergies = formFields.checkedAllergies;
  const food = new Food({
    company_id: companyId,
    name: formFields.name,
    description: formFields.description,
    price: formFields.price,
    restaurant_id: formFields.restaurant_id
  });
  food.save(function(err, rows, fields) {
    if (err) throw err;
    const rowId = rows.insertId;
    return callback(addFoodAllergy(rowId, checkedAllergies));
  });
}

function addFoodAllergy(foodRowId, checkedAllergies) {
  if (checkedAllergies.length > 0) {
    let foodAllergyQuery = "insert into food_allergy (food_id, allergy_id) values ? ";
    let vals = [];
    checkedAllergies.forEach(function(allergy) {
      vals.push([foodRowId, allergy.id]);
    });
    foodAllergy.query(foodAllergyQuery, [vals], function(err, rows, fields) {
      if (err) throw err;
    });
  }
  return checkedAllergies;
}

function getMenu(companyId, callback) {
  var query = "select f.restaurant_id, f.price, f.id as food_id, f.description, f.name, " +
    "GROUP_CONCAT(DISTINCT a.id SEPARATOR ',') AS allergy_ids, " +
    "GROUP_CONCAT(DISTINCT a.name SEPARATOR ',') AS allergy_names, " +
    "GROUP_CONCAT(DISTINCT a.active SEPARATOR ',') AS allergy_active " +
    "from food as f left join food_allergy as fa on f.id = fa.food_id left join allergies as a on fa.allergy_id =a.id " +
    "where company_id =" + companyId + " group by f.id";
  food.query(query, function(err, rows, fields) {
    if (err) throw err;
    callback(rows);
  });
}

function getMenuItem(companyId, foodId, callback) {
  food.find("first", { where: "company_id =" + companyId + " and id=" + foodId }, function(err, row, fields) {
    if (err) throw err;
    callback(null, row[0]);
  });
}

function getAllergiesForFood(foodId, callback) {
  foodAllergy.find("all", { where: "food_id=" + foodId }, function(err, allergies, fields) {
    if (err) throw err;
    return callback(allergies);
  });
}

function convertIdAllergy(allergyId, callback) {
  allergies.find("fist", { field: ["name"], where: "id =" + allergyId }, function(err, name, fields) {
    if (err) throw err;
    return callback(name[0].name);
  });
}

function deleteFood(foodId, companyId) {
  food.remove("id=" + foodId + " and company_id=" + companyId, function(err, res, fields) {
    if (err) throw err;
    return res;
  });
}

function checkAllergyExists(checkedAllergies, foodallergy) {
  for (let i = 0; i < checkedAllergies.length; i++) {
    if (checkedAllergies[i]["id"] === foodallergy["allergy_id"]) {
      checkedAllergies.splice(i, 1);
      return true;
    }
  }
  return false;
}

function updateFoodAllergies(foodId, companyId, checkedAllergies, callback) {
  foodAllergy.find("all", { where: "food_id=" + foodId }, function(err, res, fields) {
    res.forEach(function(foodallergy) {
      if (!checkAllergyExists(checkedAllergies, foodallergy)) {
        foodAllergy.remove("food_id=" + foodallergy["food_id"] + " and allergy_id=" + foodallergy["allergy_id"]);
      }
    });
    return callback(checkedAllergies);
  });
}


function deleteFoodAllergies(foodId, companyId, checkedAllergies, callback) {
  if (checkedAllergies.length > 0) {
    foodAllergy.remove("food_id=" + foodId, function(err, name, fields) {
      if (err) throw err;
      return callback(deleteFood(foodId, companyId));
    });
  }
  else {
    return callback(deleteFood(foodId, companyId));
  }
}

function checkOwnerFood(foodId, companyId, callback) {
  food.find("first", { where: ["company_id=" + companyId + " and id=" + foodId] }, function(err, row, fields) {
    if (err) throw err;
    return callback(row);
  });
}

function checkOwnerRestaurant(restaurantId, companyId, callback) {
  restaurant.find("first", { where: ["company_id=" + companyId + " and id=" + restaurantId] }, function(err, row, fields) {
    if (err) throw err;
    return callback(row);
  });
}
