const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt-nodejs");
const myFunctions = require("./myFunctions");
const companies = new db({ tableName: "companies" });
const Company = db.extend({
  tableName: "companies"
});

module.exports = function(passport) {
  /* GET home page. */
  router.get("/", function(req, res, next) {
    console.log(req.user);
    res.send({ formVals: req.flash("formVals")[0] || {}, messages: req.flash("signupMessage") });
  });

  router.post("/", function(req, res, next) {
    // validateCompany(req, res, function() {
    passport.authenticate("local-signup", {
      successRedirect: "/api/signup", // redirect to the secure profile section
      failureRedirect: "/api/signup/1", // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    }, function(req) {
      next();
    })(req, res, next);
    // });
  });
  return router;
};

router.post("/update", function(req, res, next) {
  validateCompany(req, res, function() {
    const company = new Company({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, null, null),  // use the generateHash function in our user model
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      name: req.body.name,
      id: req.user.id
    });
    company.save();
    res.send({ user: req.user, message: req.flash("signupMessage") });

  });

});

router.get("/restaurant/:id", function(req, res, next) {
  var id = req.params.id;
  getRestaurant(id, function(rows) {
    res.render("action", { data: JSON.stringify(rows) });
  });
});

function getRestaurant(id, callback) {
  var query = "select * from companies where id =" + id;
  db.query(query, function(err, rows, fields) {
    if (err) throw err;
    return callback(rows);
  });
}

function validateCompany(req, res, callback) {
  req.assert("name", "Name is a required field!").notEmpty();
  req.assert("email", "Email is not valid!").isEmail();
  req.assert("password", "Password must be at least 5 characters!").isLength({ min: 5 });
  req.assert("confirmPassword", "Please make sure your passwords match!").equals(req.body.password);
  req.assert("phoneNumber", "Phone number must be 10 digits!").isLength(10);
  var errors = req.validationErrors();
  if (errors) {
    var err_msg = [];
    errors.forEach(function(err) {
      err_msg.push(err.msg);
    });
    req.flash("signupMessage", err_msg);
    req.flash("formVals", req.body);
    return res.redirect("/api/signup");
  }
  else {
    return callback();
  }
}
