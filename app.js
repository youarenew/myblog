/**
 * myblog app.js
 */

var path = require('path');
var config = require('./config');
var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var mongoose = require('mongoose');

var urlinfo = require('url').parse(config.host);
config.hostname = urlinfo.hostname || config.host;

var db = mongoose.createConnection(config.db);

var app = express();

// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为‘ejs’
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
// routes(app);

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


// listen server started port 
if (!module.parent) {
	app.listen(config.port, function () {
		console.log('Myblog server listening on port', config.port);
		console.log('You can debug your app with http://' + config.hostname + ':' + config.port);
		console.log('');
	});
};


module.exports = app;
