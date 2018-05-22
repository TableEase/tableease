const db = require('../config/db');

const restaurant = new db({ tableName: 'restaurants' });
const Restaurant = db.extend({ tableName: 'restaurants' });

const setBody = (payload, companyId, params) => {
  body = {
    address: payload.address,
    company_id: companyId,
    lat: payload.lat,
    lon: payload.lon,
    name: payload.name,
    phone_number: payload.phone_number
  };

  if (params) {
    body.id = params;
  }

  return new Restaurant(body);
};

const parseAddress = (array) => {
  array.forEach((restaurant) => {
    restaurant['address'] = {
      address: restaurant['address'],
      lat: restaurant['lat'],
      lon: restaurant['lon']
    };

    // The two below will remove a key from the object.
    // Since these two keys are being merged into the address
    // field, we do not need them. They have been removed.
    // Duplicate
    delete restaurant['lat'];
    delete restaurant['lon'];

    // company ID is private. It is equivalent to userId.
    // Only the company should know this. It must be removed.
    delete restaurant['company_id'];
  });
  // return callback(restaurants);
  return array;
};

module.exports = {
  create: (req, callback) => {
    const companyId = req.user.id;
    const payload = req.body;

    const restaurant = setBody(payload, companyId);

    restaurant.save((err, rows, fields) => {
      if (err) throw err;
      return callback(rows);
    });
  },

  // ### TODO
  // This is the original read function. It searched by company_id.
  // This is not needed since getting all restaurants should be allowed
  // by everyone. This isn't something we are interested in limiting.
  // Users will have access to this, no need to regulate it.
  // DELETE THIS.
  // read: (companyId, callback) => {
  //   // var query = 'select * from restaurants where company_id = ' + companyId;
  //   restaurant.query(query, (err, rows, fields) => {
  //     if (err) throw err;
  //     callback(rows);
  //   });
  // },

  read: (req, bool, callback) => {
    if (typeof bool === 'function') {
      callback = bool;
      bool = null;
    }

    // ### TODO:
    // Only active restaurants should be queried. Do not request active: 0
    let query = `select * from restaurants where id = `;
    req.params ? (query += req.params.id) : (query += req);

    if (req.user && bool) {
      query = query + ` and company_id = ${req.user.id}`;
    }

    restaurant.query(query, (err, rows, fields) => {
      if (err) throw err;
      callback(parseAddress(rows));
    });
  },

  readAll: (req, bool, callback) => {
    if (typeof bool === 'function') {
      callback = bool;
      bool = null;
    }

    let query = 'select * from restaurants';
    if (req.user && bool) {
      query = query + ` where company_id = ${req.user.id}`;
    }
    // ### TODO:
    // Only active restaurants should be queried. Do not request active: 0
    restaurant.query(query, (err, rows, fields) => {
      if (err) throw err;
      return callback(parseAddress(rows));
    });
  },

  update: (req, callback) => {
    const companyId = req.user.id;
    const payload = req.body;
    const param = req.params.id;

    const restaurant = setBody(payload, companyId, param);

    restaurant.save((err, result, fields) => {
      if (err) throw err;
      return callback(result);
    });
  },

  delete: (req, callback) => {
    const restId = req.params.id;
    const companyId = req.user.id;

    restaurant.remove(
      'id =' + restId + ' and company_id =' + companyId,
      (err, res, fields) => {
        if (err) throw err;
        return callback();
      }
    );
  },

  validate: (req, callback) => {
    let condition = `company_id = ${req.user.id}`;

    if (req.params.id) {
      condition = condition + ` and id = ${req.params.id}`;
    }

    restaurant.find(
      'first',
      { where: [condition] },
      // { where: ['company_id=' + companyId + ' and id=' + restId] },
      (err, row, fields) => {
        if (err) throw err;
        return callback(row);
      }
    );
  }
};
