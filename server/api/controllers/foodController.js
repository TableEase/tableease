const db = require('../../config/db');
const faController = require('./foodAllergiesController');

const food = new db({ tableName: 'food' });
const Food = db.extend({
  tableName: 'food'
});

module.exports = {
  deleteFood: function(foodId, companyId, callback) {
    food.remove('id=' + foodId + ' and company_id=' + companyId, function(
      err,
      res,
      fields
    ) {
      if (err) throw err;
      return callback(res);
    });
  },

  updateFood: function(req, companyId, checkedAllergies, callback) {
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
      return callback(faController.addFoodAllergy(food.id, checkedAllergies));
    });
  },

  addFood: function(req, companyId, callback) {
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
      return callback(faController.addFoodAllergy(rowId, checkedAllergies));
    });
  },

  getMenu: function(companyId, callback) {
    const query =
      'select f.restaurant_id, f.price, f.id as food_id, f.description, f.name, ' +
      "GROUP_CONCAT(DISTINCT a.id SEPARATOR ',') AS allergy_ids, " +
      "GROUP_CONCAT(DISTINCT a.name SEPARATOR ',') AS allergy_names, " +
      "GROUP_CONCAT(DISTINCT a.active SEPARATOR ',') AS allergy_active " +
      'from food as f left join food_allergy as fa on f.id = fa.food_id left join allergies as a on fa.allergy_id =a.id ' +
      'where company_id =' +
      companyId +
      ' group by f.id';
    food.query(query, function(err, rows, fields) {
      if (err) throw err;
      callback(rows);
    });
  },

  getMenuAll: function(companyId, callback) {
    const query =
      'select f.restaurant_id, f.price, f.id as food_id, f.description, f.name, ' +
      "GROUP_CONCAT(DISTINCT a.id SEPARATOR ',') AS allergy_ids, " +
      "GROUP_CONCAT(DISTINCT a.name SEPARATOR ',') AS allergy_names, " +
      "GROUP_CONCAT(DISTINCT a.active SEPARATOR ',') AS allergy_active " +
      'from food as f left join food_allergy as fa on f.id = fa.food_id left join allergies as a on fa.allergy_id =a.id ' +
      'group by f.id';
    food.query(query, function(err, rows, fields) {
      if (err) throw err;
      callback(rows);
    });
  },

  checkOwnerFood: function(foodId, companyId, callback) {
    food.find(
      'first',
      { where: ['company_id=' + companyId + ' and id=' + foodId] },
      function(err, row, fields) {
        if (err) throw err;
        return callback(row);
      }
    );
  }
};
