const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const passport = require('passport');
// const flash = require('connect-flash');
require('./config/passport')(passport); // pass passport for configuration

const appRoutes = require('./routes/app');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'src'));
// app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/js')));

// app.use(session({
//     secret: 'vidyapathaisalwaysrunning',
//     resave: true,
//     saveUninitialized: true
// })); // session secret

var options = {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'bfdecc39479008',
  password: 'd9d922b1',
  database: 'heroku_150cb394bbf6303'
};

const sessionStore = new MySQLStore(options);

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
// app.use(flash()); // use connect-flash for flash messages stored in session
// require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // const err = new Error('Not Found');
  // err.status = 404;
  // next(err);
  return res.render('index');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
