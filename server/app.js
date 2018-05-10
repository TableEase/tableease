const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const options = require("./config/db");

const morgan = require("morgan");
const passport = require("passport");
const flash = require("connect-flash");
const router = express.Router({});

require("./config/passport")(passport); // pass passport for configuration
const app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan("dev")); // log every request to the console
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());

const angularDir = path.join(__dirname, "public/js/");
app.use(express.static(angularDir));
const sessionStore = new MySQLStore(options.dbConfig);

app.use(session({
  key: "session_cookie_name",
  secret: "session_cookie_secret",
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
// require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

const index = require("./routes/index");
const login = require("./routes/login")(passport);
const signup = require("./routes/signup")(passport);
const profile = require("./routes/profile");
const menu = require("./routes/menu");
const logout = require("./routes/logout");
const admin = require("./routes/admin");
const users = require("./routes/users");
const allergies = require("./routes/allergies");

app.use("/api", router);

router.use("/", index);
router.use("/login", login);
router.use("/signup", signup);
router.use("/profile", profile);
router.use("/menu", menu);
router.use("/logout", logout);
router.use("/admin", admin);
router.use("/users", users);
router.use("/allergies", allergies);

app.get("/*", function(req, res, next) {
  res.sendFile(angularDir + "/index.html");
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
