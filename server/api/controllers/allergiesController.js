const db = require('../config/db');
const allergy = new db({ tableName: 'allergies' });

module.exports = {
  parse: function(meals) {
    meals.forEach(function(meal) {
      let id = meal.allergy_ids;
      let name = meal.allergy_names;

      meal.allergies = [];
      if (meal.allergy_active === '1') {
        id = id.split(',').map(Number);
        name = name.split(',');
        for (let i = 0; i < id.length; i++) {
          meal.allergies.push({
            id: id[i],
            name: name[i],
            active: 1
          });
        }
      }

      delete meal.allergy_names;
      delete meal.allergy_ids;
      delete meal.allergy_active;
    });
    return meals;
  },
  checkAllergyExists: function(checkedAllergies, foodallergy) {
    for (let i = 0; i < checkedAllergies.length; i++) {
      if (checkedAllergies[i]['id'] === foodallergy['allergy_id']) {
        checkedAllergies.splice(i, 1);
        return true;
      }
    }
    return false;
  },
  getAllergies: function(callback) {
    allergy.find('all', {}, function(err, rows, fields) {
      if (err) throw err;
      return callback(rows);
    });
  }
};
