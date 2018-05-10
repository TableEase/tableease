const express = require('express');
const app = express();
const router = express.Router({});
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const cookieParser = require('cookie-parser'); // While a cookie is fine, storing needed data on local storage would be better.
app.use(cookieParser()); // cookie middleware
const flash = require('connect-flash'); // this should be handled on the client side, not the server side

// THIS SHOUDL BE REMOVED. FLASH MESSAGES SHOULD BE HANDLED BY CLIENT
app.use(flash()); // use connect-flash for flash messages stored in session
// require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// PASSPORT MIDDLEWARE
require('./config/passport')(passport); // pass passport for configuration
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// ROUTE IMPORTS
const index = require('./routes/index');
const login = require('./routes/login')(passport);
const signup = require('./routes/signup')(passport);
const profile = require('./routes/profile');
const menu = require('./routes/menu');
const logout = require('./routes/logout');
const admin = require('./routes/admin');
const users = require('./routes/users');

// MORGAN CONSOLE LOGS
app.use(morgan('dev')); // log every request to the console

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public/js')));

// VALIDATOR MIDDLEWARE
app.use(expressValidator());

// DATABASE CONNECTION
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const options = require('./config/db');
const sessionStore = new MySQLStore(options.dbConfig);
app.use(
  session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
);

// ROUTES
app.use('/api', router);
router.use('/', index);
router.use('/login', login);
router.use('/signup', signup);
router.use('/profile', profile);
router.use('/menu', menu);
router.use('/logout', logout);
router.use('/admin', admin);
router.use('/users', users);

// WILDCARD ROUTE
app.get('*', (req, res, next) => {
  res.sendfile(path.join(__dirname, './public/js/index.html'));
});

// 404 FORWARD TO ERROR HANDLER
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ERROR HANDLER
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
