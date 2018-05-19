const db = require('../config/db');

const restaurant = new db({ tableName: 'restaurants' });
const Restaurant = db.extend({ tableName: 'restaurants' });

module.exports = {
  checkOwnerRestaurant: (restaurantId, companyId, callback) => {
    restaurant.find(
      'first',
      { where: ['company_id=' + companyId + ' and id=' + restaurantId] },
      (err, row, fields) => {
        if (err) throw err;
        return callback(row);
      }
    );
  },

  updateRestaurant: (req, companyId, callback) => {
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
    restaurant.save((err, rows, fields) => {
      if (err) throw err;
      return callback();
    });
  },

  addRestaurant: (req, companyId, callback) => {
    const formFields = req.body;
    const restaurant = new Restaurant({
      address: formFields.address,
      lat: formFields.lat,
      lon: formFields.lon,
      name: formFields.name,
      company_id: companyId,
      phone_number: formFields.phone_number
    });
    restaurant.save((err, rows, fields) => {
      if (err) throw err;
      const rowId = rows.insertId;
      return callback();
    });
  },

  getRestaurants: (companyId, callback) => {
    var query = 'select * from restaurants where company_id = ' + companyId;
    restaurant.query(query, (err, rows, fields) => {
      if (err) throw err;
      callback(rows);
    });
  },

  getRestaurantsAll: (companyId, callback) => {
    var query = 'select * from restaurants';
    restaurant.query(query, (err, rows, fields) => {
      if (err) throw err;
      callback(rows);
    });
  },

  deleteRestaurant: (restaurantId, companyId, callback) => {
    restaurant.remove(
      'id=' + restaurantId + ' and company_id=' + companyId,
      (err, res, fields) => {
        if (err) throw err;
        return callback(res);
      }
    );
  },

  createAddress: (restaurants, callback) => {
    restaurants.forEach((restaurant) => {
      restaurant['address'] = {
        address: restaurant['address'],
        lat: restaurant['lat'],
        lon: restaurant['lon']
      };
    });
    return callback(restaurants);
  }
};
