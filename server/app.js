const express = require('express');
const app = express();

const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const options = require('./config/db');

const morgan = require('morgan');
const passport = require('passport');
const flash = require('connect-flash');
const router = express.Router({});

require('./config/passport')(passport); // pass passport for configuration

// MORGAN CONSOLE LOGS
app.use(morgan('dev'));

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());
app.use(cookieParser());

const angularDir = path.join(__dirname, 'public');
app.use(express.static(angularDir));
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

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
// require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// ROUTE IMPORTS
const index = require('.api/routes/index');
const login = require('.api/routes/login')(passport);
const signup = require('.api/routes/signup')(passport);
const logout = require('.api/routes/logout');
const admin = require('.api/routes/admin');
const users = require('.api/routes/users');
const allergies = require('.api/routes/allergies');
const restaurant = require('.api/routes/restaurant');
const menu = require('.api/routes/menu');

// ROUTES
app.use('/api', router);
router.use('/', index);
router.use('/login', login);
router.use('/signup', signup);
router.use('/logout', logout);
router.use('/admin', admin);
router.use('/users', users);
router.use('/allergies', allergies);
router.use('/restaurant', restaurant);
router.use('/menu', menu);

app.get('*', function(req, res, next) {
  res.sendFile(angularDir + '/index.html');
});

// 404 ERROR HANDLER
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
