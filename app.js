var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var mongo = require('mongodb');
var mongoose = require('mongoose');
// var monk = require('monk');
// var db = monk('localhost:27017/projectbkwrm');

//models
var User = require('./api/model/userModel');

var index = require('./routes/index');
var users = require('./routes/users');
// var api = require('./routes/api');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.engine('html', require('ejs').renderFile);
// app.use(express.static(path.join(__dirname,'public')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// make db accessible to router
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/projectbkwrm', {useMongoClient: true} );

var routes = require('./api/routes/userRoutes');
routes(app);
// app.use(function(req,res,next){
//   req.db = db;
//   next();
// });

app.use('/', index);
app.use('/users', users);
// app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send((err.status || 500) + ': ' + err.message);
});

module.exports = app;
