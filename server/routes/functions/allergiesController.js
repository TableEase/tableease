const db = require("../../config/db");

module.exports = {
  createAllergies: function(fullMenu, callback) {
    fullMenu.forEach(function(item) {
      item["allergies"] = [];
      if (item["allergy_active"] === "1") {
        item["allergy_ids"] = item["allergy_ids"].split(",").map(Number);
        item["allergy_names"] = item["allergy_names"].split(",");
        for (let i = 0; i < item["allergy_ids"].length; i++) {
          item["allergies"].push({ id: item["allergy_ids"][i], name: item["allergy_names"][i], active: 1 });
        }
      }
    });
    callback(fullMenu);
  },
  checkAllergyExists: function(checkedAllergies, foodallergy) {
    for (let i = 0; i < checkedAllergies.length; i++) {
      if (checkedAllergies[i]["id"] === foodallergy["allergy_id"]) {
        checkedAllergies.splice(i, 1);
        return true;
      }
    }
    return false;
  }
};
