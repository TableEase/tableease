const mysqlModel = require('mysql-model');

const dbConfig = {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'bfdecc39479008',
  password: 'd9d922b1',
  database: 'heroku_150cb394bbf6303'
};

const MyAppModel = mysqlModel.createConnection(dbConfig);

module.exports = MyAppModel;
module.exports.dbConfig = dbConfig;
