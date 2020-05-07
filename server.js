// environment variables
// require('dotenv').config();
import 'dotenv/config';
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const question = require('./routes/question.route');
// assign port for prod and dev environments
const PORT = process.env.PORT || 3333;
// set express app to handle data parsing

console.log('Hello Node.js project.');

app.use(cors()); // We're telling express to use CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // also tell server to use JSON as well

// Provides great route logging in our console for debugging
app.use(morgan('dev'));

// set 'public' as static folder
app.use(express.static(path.join(__dirname, 'public')));

// start using the routes
app.use('/questions', question);

// add handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// db connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Global Thermo Nuclear DB War!'));

db.on('error', error => console.log(error));
db.once('open', () => console.log('database connected'));

// Routes
// Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// tell the app to listen on a given port
app.listen(PORT, console.log(`The API is running on port ${PORT}`));
