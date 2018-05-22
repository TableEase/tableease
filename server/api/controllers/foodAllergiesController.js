const db = require('../config/db');
const foodAllergy = new db({ tableName: 'food_allergy' });
const allergyController = require('./allergiesController');

module.exports = {
  update: (req) => {
    const mealId = req.params.id;
    const companyId = req.user.id;
    const allergies = req.body.allergies;

    if (allergies.length < 1) {
      return allergies;
    }

    foodAllergy.find(
      'all',
      { where: `food_id = ${mealId}` },
      (err, res, fields) => {
        if (res.length < 1) {
          return allergies;
        }
        res.forEach((allergy) => {
          if (!allergyController.checkAllergyExists(allergies, allergy)) {
            foodAllergy.remove(
              `food_id = ${allergy.food_id} and allergy_id = ${
                allergy.allergy_id
              }`
            );
          }
        });
        return res;
      }
    );

    return allergies;
  },

  create: (foodRowId, allergies) => {
    if (!allergies) {
      return allergies;
    }

    if (allergies.length > 0) {
      let foodAllergyQuery =
        'insert into food_allergy (food_id, allergy_id) values ? ';
      let vals = [];
      allergies.forEach((allergy) => {
        vals.push([foodRowId, allergy.id]);
      });
      foodAllergy.query(foodAllergyQuery, [vals], (err, rows, fields) => {
        if (err) throw err;
      });
    }

    return allergies;
  }
};
