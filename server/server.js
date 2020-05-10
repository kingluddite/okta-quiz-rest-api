// environment variables
import 'dotenv/config.js';
import regeneratorRuntime from 'regenerator-runtime';
import express from 'express';
const app = express();
import exphbs from 'express-handlebars';
import path from 'path';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from 'cors';
import question from './routes/question.route.js';
// assign port for prod and dev environments
const PORT = process.env.PORT || 3333;
// set express app to handle data parsing

console.log('Hello Node.js project.');
console.log(process.env.TEST_DOTENV);
app.use(cors()); // We're telling express to use CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // also tell server to use JSON as well

// Provides great route logging in our console for debugging
app.use(logger('dev'));

// set 'public' as static folder
// since inside server need to go up to parent directory
app.use(express.static(path.join(__dirname, '../public')));

// start using the routes
// app.use('/questions', question);

// add handlebars
// change view engine to handlebars
// truncate handlebars to hbs
app.set('view engine', 'hbs');

// change the views from the default views to server views
app.set('views', path.join(process.cwd(), 'server/views'));

// use hbs as the handlebar file extension example.hbs (instead of example.handlebars)
app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    extname: 'hbs',
    // layoutsDir: 'server/views/layouts',
    // partialsDir: 'server/views/partials',
  })
);

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
// set up home route
// app.get('/', (req, res) => res.send('INDEX'));
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));
// app.get('/', (req, res) => res.render('index'));

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
app.listen(PORT, console.log(`The API is running on port ${PORT}`));
