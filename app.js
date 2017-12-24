
// PACKAGES
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// HELPERS REQUIRED
const response = require('./helpers/response');

// ROUTES REQUIRED
const index = require('./routes/index');

// EXPRESS
const app = express();
dotenv.config();

// MONGOOSE CONFIG
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: [process.env.CLIENT_URL]
}));


// ROUTES
app.use('/', index);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  response.notFound(req, res);
});

// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    response.unexpectedError(req, res, err);
  }
});

module.exports = app;
