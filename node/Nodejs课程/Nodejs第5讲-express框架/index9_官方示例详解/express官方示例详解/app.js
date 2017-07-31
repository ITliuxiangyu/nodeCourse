var express = require('express');
//path 内置模块是 node 用于整理、转换、合并路径，只要是路径问题，都可以交给它处理。但它仅仅是处理路径字符串，而不会去坚持或处理文件
var path = require('path');
//请求网页logo的中间件
var favicon = require('serve-favicon');
//morgan 是nodejs的一个日志模块，由 express 团队维护
var logger = require('morgan');
//编译Cookie的中间件
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// path.join 拼接路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
/*
morgan(format, options);
其中 format 表示日志的格式， morgan预定义了一些日志格式，用常量字符串表示，如’combined’, ‘common’, ‘short’, ‘dev’等；options表示选项，比如将日志输出到终端或者文件，这个参数是可选的
*/
app.use(logger('common'));
//使用bodyParser接收请求数据的body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//编译Cookie
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
