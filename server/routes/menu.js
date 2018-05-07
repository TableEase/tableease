const express = require("express");
const router = express.Router();
const db = require("../config/db");
const myFunctions = require("./myFunctions");
const async = require("async");


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
  addFood(req, companyId, function(formFields) {
    req.flash("menuMessage", "Added: " + JSON.stringify(formFields));
    // res.send({ messages: req.flash("menuMessage") });
    res.redirect("/api/menu");
  });
});


router.get("/delete/:id", myFunctions.isLoggedIn, function(req, res, next) {
  var companyId = req.user.id;
  var foodId = req.params.id;
  checkOwnerFood(foodId, companyId, function(row) {
    if (!row) {
      res.render("action", { data: "You do not own that menu item OR it does not exist." });
    }
    else {
      deleteFoodAllergies(foodId, companyId, function(result) {
        res.redirect("/menu/edit");
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
        updateFood(req, companyId, function(formFields) {
          res.redirect("/api/menu");
        });
      });
    }
  });
});


router.get("/:id", myFunctions.isLoggedIn, function(req, res, next) {
  var companyId = req.user.id;
  var foodId = req.params.id;
  async.waterfall([
    async.apply(getMenuItem, companyId, foodId),
    getAllergiesFood,
    function(row) {
      getAllergies(function(allergies) {
        res.render("food", { allergies: allergies, data: row });
      });
    }
  ], function(err, row) {
    res.render("action", { data: err });
  });
});
module.exports = router;


// mysql functions related to register

function createAllergies(fullMenu, callback) {
  fullMenu.forEach(function(item) {
    if (item["allergy_ids"]) {
      item["allergy_ids"] = item["allergy_ids"].split(",");
      item["allergy_names"] = item["allergy_names"].split(",");
    }
    else {
      item["allergy_ids"] = ["none"];
      item["allergy_names"] = ["none"];
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

function updateFood(req, companyId, callback) {
  const formFields = req.body;
  const food = new Food({
    company_id: companyId,
    name: formFields.name,
    description: formFields.description,
    price: formFields.price,
    id: formFields.food_id
  });

  food.save(function(err, rows, fields) {
    if (err) throw err;
    const rowId = rows.insertId;
    return callback(addFoodAllergy(food.id, formFields));
  });
}


function addFood(req, companyId, callback) {
  const formFields = req.body;
  const food = new Food({
    company_id: companyId,
    name: formFields.name,
    description: formFields.description,
    price: formFields.price
  });
  food.save(function(err, rows, fields) {
    if (err) throw err;
    const rowId = rows.insertId;
    return callback(addFoodAllergy(rowId, formFields));
  });
}

function addFoodAllergy(foodRowId, formFields, callback) {
  const checkedAllergies = formFields.checkedAllergies;
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
  return formFields;
}

function getMenu(companyId, callback) {
  var query = "select f.price, f.id as food_id, f.description, f.name, " +
    "GROUP_CONCAT(DISTINCT a.id SEPARATOR ',') AS allergy_ids, " +
    "GROUP_CONCAT(DISTINCT a.name SEPARATOR ',') AS allergy_names " +
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
  allergy.find("fist", { field: ["name"], where: "id =" + allergyId }, function(err, name, fields) {
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


function updateFoodAllergies(foodId, companyId, checkedAllergies, callback) {
  foodAllergy.find("all", { where: "food_id=" + foodId }, function(err, res, fields) {
    res.forEach(function(foodallergy) {
      foodAllergy.remove("food_id=" + foodallergy['food_id'] + " and allergy_id=" + foodallergy['allergy_id']);
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
