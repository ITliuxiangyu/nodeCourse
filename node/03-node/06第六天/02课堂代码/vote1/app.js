var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/get',function(req,res){
  console.log('get');
  res.end(` //var url = 'http://3g.163.com/touch/jsonp/sy/recommend/140-10.html?hasad=1&loc=%E6%B2%B3%E5%8D%97%E7%9C%81_%E9%83%91%E5%B7%9E%E5%B8%82&miss=10&refresh=A&offset=0&size=10&callback=syrec14';
    //投票结果
    var url = 'http://192.168.8.81:9000/vote/result';
    //投票
    //var url = 'http://localhost:8000/vote';
    $('body').click(function () {
        $.ajax({
            url: 'http://192.168.8.81:8000',
            data: {
                url: url,
                data: {
                    openid: 1,
                    data: [{name: '张三', score: 2},
                        {name: '张三', score: 1}
                    ]
                }
            },
            dataType: 'jsonp',
            success: function (e) {
                console.log(e);
            }
        })
    })
  `);
})

app.use('/', index);
app.use('/users', users);

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
  res.render('error');
});

module.exports = app;
