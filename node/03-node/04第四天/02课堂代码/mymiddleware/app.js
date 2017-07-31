var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression')

var index = require('./routes/index');
var users = require('./routes/users');

//创建一个 Express 应用
var app = express();

// view engine setup
//给一个值设置一个变量
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//全都是中间件:
app.use(compression())

app.use(logger('dev'));//node的日志中间件
app.use(bodyParser.json());
//Node.js 请求响应体中间件
app.use(bodyParser.urlencoded({ extended: false }));

//cookie 解析 middleware
app.use(cookieParser());
//静态处理中间件。
app.use(express.static(path.join(__dirname, 'public')));


//路由
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
//自己写的中间件。
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
//自己写的中间件。处理错误。
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
