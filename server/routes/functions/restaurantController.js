const db = require("../../config/db");
const food = new db({ tableName: "food" });
const restaurant = new db({ tableName: "restaurants" });

module.exports = {
  checkOwnerRestaurant: function(restaurantId, companyId, callback) {
    restaurant.find("first", { where: ["company_id=" + companyId + " and id=" + restaurantId] }, function(err, row, fields) {
      if (err) throw err;
      return callback(row);
    });
  }
};
