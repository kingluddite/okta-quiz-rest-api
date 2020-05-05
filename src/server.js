const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes'); // include the routes.js file
require('dotenv').config();

app.use(cors()); // We're telling express to use CORS
app.use(express.json()); // We need to tell server to use JSON as well
app.use(routes); // Tells the server to use the routes in routes.js

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('database connected'));

// tell the app to listen on a given port
app.listen(process.env.PORT, () => {
  console.log('The API is running...');
});
