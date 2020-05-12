"use strict";

require("dotenv/config.js");

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _path = _interopRequireDefault(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// environment variables
// import regeneratorRuntime from 'regenerator-runtime';
// import question from './routes/question.route.js';
// Run some test logs to make sure stuff is working
console.log('Hello Node.js project.');
console.log(process.env.TEST_DOTENV); // Create global app object

var app = (0, _express["default"])();
app.use((0, _cors["default"])()); // We're telling express to use CORS
// Assign port for prod and dev environments

var PORT = process.env.PORT || 3333; // Normal express config defaults
// Set express app to handle data parsing

app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json()); // also tell server to use JSON as well
// Provides great route logging in our console for debugging

app.use((0, _morgan["default"])('dev')); // set 'public' as static folder
// since inside server need to go up to parent directory

app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
/**
 * Database: MongoDB
 */
// DB connection

_mongoose["default"].connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = _mongoose["default"].connection;
db.on('error', console.error.bind(console, 'Global Thermo Nuclear DB War!'));
db.on('error', function (error) {
  return console.log(error);
});
db.once('open', function () {
  return console.log('database connected');
});
/**
 * VIEW ENGINE: Handlebars
 */
// add handlebars
// change view engine to handlebars
// truncate handlebars to hbs
// app.set('view engine', 'hbs');
// change the views from the default views to server views
// app.set('views', path.join(process.cwd(), 'server/views'));
// use hbs as the handlebar file extension example.hbs (instead of example.handlebars)
// app.engine(
//   'hbs',
//   exphbs({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     // layoutsDir: 'server/views/layouts',
//     // partialsDir: 'server/views/partials',
//   })
// );

/**
 * MODELS
 */

/**
 * ROUTES
 */
// app.use('/questions', question);
// Index route
// set up home route
// app.get('/', (req, res) => res.send('INDEX'));
// BRING THIS BOTTOM LINE BACK
// app.get('/', (req, res) => res.render('index', { layout: 'landing' }));
// app.get('/', (req, res) => res.render('index'));

app.get('/users', function (req, res) {
  return res.send('GET HTTP method on user resource');
});
app.post('/users', function (req, res) {
  return res.send('POST HTTP method on user resource');
});
app.put('/users/:userId', function (req, res) {
  return res.send("PUT HTTP method on user/".concat(req.params.userId, " resource"));
});
app["delete"]('/users/:userId', function (req, res) {
  return res.send("DELETE HTTP method on user/".concat(req.params.userId, " resource"));
});
/**
 * Catch 404 and forward to error handler
 */
// app.use(function(req, res, next) {
//   next(createError(404));
// });

/**
 * error handler
 */
// app.use(function(err, req, res, next) {
//   // Set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // Nender the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

/**
 *  Finally, let's start our server...
 */
// tell the app to listen on a given port

app.listen(PORT, console.log("The API is running on port ".concat(PORT)));