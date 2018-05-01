const mysqlModel = require("mysql-model");


const dbConfig = {
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "bfdecc39479008",
  password: "d9d922b1",
  database: "heroku_150cb394bbf6303"
};

// var connection = mysql.createPool(dbConfig);
const MyAppModel = mysqlModel.createConnection(dbConfig);

const Company = MyAppModel.extend({
  tableName: "companies"
});
const company = new Company({
  name: "Serenity",
  email: "sa;ld;l@gmail.com",
  phone_number: 8883338845,
  address: "s;lkdjmf",
  password: "s;lkdjmf"
});
company.query("select * from companies", function(err, rows, fields) {
  console.log(rows);
});
