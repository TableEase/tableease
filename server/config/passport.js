// config/passport.js

// load all the things we need
const LocalStrategy = require("passport-local").Strategy;

// load up the user model
const bcrypt = require("bcrypt-nodejs");
const db = require("./db");

// database models
const company = new db({ tableName: "companies" });
const Company = db.extend({
  tableName: "companies"
});


// expose this function to our app using module.exports
module.exports = function(passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize companies out of session

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    company.find("all", {
      fields: ["name", "email", "address", "id", "phone_number"],
      where: "id = '" + id + "'"
    }, function(err, rows) {
      done(err, rows[0]);
    });
  });

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    "local-signup",
    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, email, password, done) {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        company.find("all", { where: "email = '" + email + "'" }, function(err, rows) {
          if (err)
            return done(err);
          if (rows.length) {
            return done(null, false, req.flash("signupMessage", "That email is already taken."));
          } else {
            const company = new Company({
              email: email,
              password: bcrypt.hashSync(password, null, null),  // use the generateHash function in our user model
              phone_number: req.body.phoneNumber,
              address: req.body.address,
              name: req.body.name
            });

            company.save();
            return done(null, false, company);
          }
        });
      })
  );

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    "local-login",

    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, email, password, done) { // callback with email and password from our form
        company.find("all", { where: "email = '" + email + "'" }, function(err, rows) {
          if (err)
            return done(err);
          if (!rows.length) {
            return done(null, false, req.flash("loginMessage", "No user found.")); // req.flash is the way to set flashdata using connect-flash
          }
          // if the user is found but the password is wrong
          if (!bcrypt.compareSync(password, rows[0].password))
            return done(null, false, req.flash("loginMessage", "Oops! Wrong password.")); // create the loginMessage and save it to session as flashdata

          // all is well, return successful user
          return done(null, rows[0]);
        });
      })
  );
};
