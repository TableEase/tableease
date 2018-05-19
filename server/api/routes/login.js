const express = require('express');
const router = express.Router({});

const controller = require('../controllers/validationController');

module.exports = function(passport) {
  router.get('/', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.send({
      formVals: req.flash('formVals')[0] || [],
      messages: req.flash('loginMessage')
    });
  });

  router.post('/', function(req, res) {
    controller.loginValidation(req, res, function() {
      passport.authenticate('local-login', {
        successRedirect: '/api/login', // redirect to the secure profile section
        failureRedirect: '/api/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
      })(req, res),
        function(req, res) {
          if (req.body.remember) {
            req.session.cookie.maxAge = 1000 * 60 * 3;
          } else {
            req.session.cookie.expires = false;
          }
        };
    });
  });
  return router;
};
