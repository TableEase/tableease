const express = require('express');
const routes = express.Router();

// CREATE COMPANY
router.get('/', validate.isLoggedIn, (req, res, next) => {
  const companyId = req.user.id;
  restaurantController.getRestaurants(companyId, (restaurants) => {
    restaurantController.createAddress(restaurants, (restaurants) => {
      // res.send({ data: restaurants });
      res.status(200).json({ data: restaurants });
    });
  });
});

// READ COMPANY /api/company/

// READ COMPANY RESTAURANTS /api/company/restaurants/

// READ COMPANY REASTAURANTS MEALS /api/company/restaurants/:id/meals/

// READ COMPANY RESTAURANTS MEAL /api/company/restaurants/:id/meals/:id

// UPDATE COMPANY /api/company/

// DELETE COMPANY /api/company

module.exports = routes;
