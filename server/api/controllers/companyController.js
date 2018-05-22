const db = require('../config/db');
const bcrypt = require('bcrypt-nodejs');

const company = new db({ tableName: 'companies' });
const Company = db.extend({
  tableName: 'companies'
});

module.exports = {
  create: (req, id, callback) => {
    const payload = req.body;
  },
  validate: (req, callback) => {
    const condition = `id = ${req.user.id}`;
    company.find('first', { where: [condition] }, (err, result) => {
      if (err) throw err;
      return result ? callback(true) : callback(false);
    });
  }
};
