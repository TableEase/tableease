const db = require('../config/db');
const foodAllergy = new db({ tableName: 'food_allergy' });
const allergiesFunctions = require('./allergiesController');

module.exports = {
  updateFoodAllergies: function(foodId, companyId, checkedAllergies, callback) {
    foodAllergy.find('all', { where: 'food_id=' + foodId }, function(
      err,
      res,
      fields
    ) {
      res.forEach(function(foodallergy) {
        if (
          !allergiesFunctions.checkAllergyExists(checkedAllergies, foodallergy)
        ) {
          foodAllergy.remove(
            'food_id=' +
              foodallergy['food_id'] +
              ' and allergy_id=' +
              foodallergy['allergy_id']
          );
        }
      });
      return callback(checkedAllergies);
    });
  },
  addFoodAllergy: function(foodRowId, checkedAllergies) {
    if (checkedAllergies.length > 0) {
      let foodAllergyQuery =
        'insert into food_allergy (food_id, allergy_id) values ? ';
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
};
