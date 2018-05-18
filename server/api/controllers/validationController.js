module.exports = {
  loginValidation: function(req, res, callback) {
    req.assert("email", "Email is not valid!").isEmail();
    req.assert("password", "Password must be at least 5 characters!").isLength({ min: 5 });
    const errors = req.validationErrors();
    if (errors) {
      let err_msg = [];
      errors.forEach(function(err) {
        err_msg.push(err.msg);
      });
      req.flash("loginMessage", err_msg);
      req.flash("formVals", req.body);
      return res.redirect("/api/login");
    }
    else {
      callback();
    }
  },
  validateCompany: function(req, res, callback) {
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
      callback();
    }
  }
};
