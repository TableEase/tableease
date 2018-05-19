const db = require('../config/db');
const company = new db({ tablename: 'companies' });
const Company = db.extend({
  tablename: 'companies'
});

module.exports = {
  create: (req, id, callback) => {
    const payload = req.body;
  }
};
