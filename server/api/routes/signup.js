const express = require("express");
const router = express.Router({});
const db = require("../config/db");

const validationFunctions = require("./functions/validationController");

const bcrypt = require("bcrypt-nodejs");
const myFunctions = require("./myFunctions");
const Company = db.extend({ tableName: "companies" });

module.exports = function(passport) {
  /* GET home page. */
  router.get("/", function(req, res, next) {
    res.send({ formVals: req.flash("formVals")[0] || {}, messages: req.flash("signupMessage") });
  });

  router.post("/", function(req, res, next) {
    validationFunctions.validateCompany(req, res, function() {
      passport.authenticate("local-signup", {
        successRedirect: "/api/signup", // redirect to the secure profile section
        failureRedirect: "/api/signup", // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
      })(req, res);
    });
  });
  return router;
};

router.post("/update", myFunctions.isLoggedIn, function(req, res, next) {
  validationFunctions.validateCompany(req, res, function() {
    const company = new Company({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, null, null),  // use the generateHash function in our user model
      phone_number: req.body.phoneNumber,
      name: req.body.name,
      id: req.user.id
    });
    company.save(function(err, result) {
      res.redirect("/api/signup");
    });
  });
});
