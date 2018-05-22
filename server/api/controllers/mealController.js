const db = require('../config/db');
const faController = require('./foodAllergiesController');
const allergyController = require('./allergiesController');

const food = new db({ tableName: 'food' });
const Food = db.extend({ tableName: 'food' });

const setBody = (payload, companyId, params) => {
  body = {
    company_id: companyId,
    name: payload.name,
    description: payload.description,
    price: payload.price,
    restaurant_id: payload.restaurant_id
  };

  if (params) {
    body.id = params;
  }

  return new Food(body);
};

const readQuery = (mealId, restaurantId) => {
  let query = `select f.id as id, f.name, f.description, f.price, f.restaurant_id, 
  GROUP_CONCAT(DISTINCT a.id SEPARATOR ',') AS allergy_ids, 
  GROUP_CONCAT(DISTINCT a.name SEPARATOR ',') AS allergy_names, 
  GROUP_CONCAT(DISTINCT a.active SEPARATOR ',') AS allergy_active 
  from food as f left join food_allergy as fa on f.id = fa.food_id 
  left join allergies as a on fa.allergy_id = a.id`;

  if (mealId) {
    query += ` where f.id = ${mealId}`;
  }

  if (restaurantId) {
    query += ` where f.restaurant_id = ${restaurantId}`;
  }

  query += ' group by f.id';

  return query;
};

module.exports = {
  create: (req, callback) => {
    const companyId = req.user.id;
    const payload = req.body;
    const allergies = payload.checkedAllergies;

    const food = setBody(payload, companyId);

    food.save((err, rows, fields) => {
      if (err) throw err;
      return callback(
        rows,
        faController.addFoodAllergy(rows.insertId, allergies)
      );
    });
  },

  read: (req, callback) => {
    req.params ? (mealId = req.params.id) : (mealId = req);

    const query = readQuery(mealId);

    food.query(query, (err, rows, fields) => {
      if (err) throw err;
      callback(allergyController.parse(rows));
    });
  },

  readAll: (req, callback) => {
    const query = readQuery(null, req.params.id);

    food.query(query, (err, rows, fields) => {
      if (err) throw err;
      callback(allergyController.parse(rows));
    });
  },

  update: (req, callback) => {
    const mealId = req.params.id;
    const companyId = req.user.id;
    const payload = req.body;
    const allergies = faController.update(req);

    const food = setBody(payload, companyId, mealId);

    food.save((err, rows, fields) => {
      if (err) throw err;
      return callback(rows, faController.create(food.id, allergies));
    });
  },

  delete: (req, callback) => {
    const mealId = req.params.id;
    const companyId = req.user.id;

    food.remove(
      `id = ${mealId} and company_id = ${companyId}`,
      (err, res, fields) => {
        if (err) throw err;
        return callback();
      }
    );
  },

  validate: (req, callback) => {
    const mealId = req.params.id;
    const companyId = req.user.id;

    food.find(
      'first',
      { where: [`company_id = ${companyId} and id = ${mealId}`] },
      (err, row, fields) => {
        if (err) throw err;
        return callback(row);
      }
    );
  }
};
