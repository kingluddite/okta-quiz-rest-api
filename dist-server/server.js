"use strict";

require("dotenv/config.js");

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _path = _interopRequireDefault(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _questionRoute = _interopRequireDefault(require("./routes/question.route.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// environment variables
var app = (0, _express["default"])();
// assign port for prod and dev environments
var PORT = process.env.PORT || 3333; // set express app to handle data parsing

console.log('Hello Node.js project.');
console.log(process.env.TEST_DOTENV);
app.use((0, _cors["default"])()); // We're telling express to use CORS

app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json()); // also tell server to use JSON as well
// Provides great route logging in our console for debugging

app.use((0, _morgan["default"])('dev')); // set 'public' as static folder
// since inside server need to go up to parent directory

app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public'))); // start using the routes
// app.use('/questions', question);
// add handlebars
// change view engine to handlebars
// truncate handlebars to hbs

app.set('view engine', 'hbs'); // change the views from the default views to server views

app.set('views', _path["default"].join(process.cwd(), 'server/views')); // use hbs as the handlebar file extension example.hbs (instead of example.handlebars)

app.engine('hbs', (0, _expressHandlebars["default"])({
  defaultLayout: 'main',
  extname: 'hbs' // layoutsDir: 'server/views/layouts',
  // partialsDir: 'server/views/partials',

})); // db connection

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
}); // Routes
// Index route
// set up home route
// app.get('/', (req, res) => res.send('INDEX'));

app.get('/', function (req, res) {
  return res.render('index', {
    layout: 'landing'
  });
}); // app.get('/', (req, res) => res.render('index'));
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// tell the app to listen on a given port

app.listen(PORT, console.log("The API is running on port ".concat(PORT)));