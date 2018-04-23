const express = require('express');
const router = express.Router();
// const myFuction = require('./myFunctions');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { user: req.user, title: 'TableEase' });
  res.render('index'); // Temp res forward, until we get Auth set up, line above
});

module.exports = router;
