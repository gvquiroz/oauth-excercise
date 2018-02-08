let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let auth = require('./routes/auth');
let health = require('./routes/health');

// valid routes go here
app.use('/auth',auth);
app.use('/health',health);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;