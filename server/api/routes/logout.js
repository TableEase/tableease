const express = require('express');
const router = express.Router({});
const validate = require('../middleware/validate');

router.get('/', validate.isLoggedIn, function(req, res) {
  req.logout();
  res.send({ message: 'success' });
});

module.exports = router;
