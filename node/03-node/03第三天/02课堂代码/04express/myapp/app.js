var express = require('express');
var app = express();
/**
 * 路由（Routing）是由一个 URI（或者叫路径）和一个特定的 HTTP 方法（GET、POST 等）组成的，
 * 涉及到应用如何响应客户端对某个网站节点的访问
 *
 * */

//所有的请求和相应都经过这里进行处理。
app.use(function (req, res, next) {
    console.log('当前时间:', Date.now());
    //往下继续走。
    res.end('中间件屏蔽了')
    //next();
});

app.get('/', function (req, res) {
    res.send('你请求的是get的/');
});

app.get('/a', function (req, res) {
    res.send('你请求的是a的get方法/');
});

app.post('/', function (req, res) {
    res.send('你请求的是post的/');
});

app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
});

app.get(/.*fly$/, function(req, res) {
    res.send('/.*fly$/');
});


app.get('/example/b', function (req, res, next) {
    console.log('response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B!');
});

//public文件夹下面的文件内容是静态资源。
app.use(express.static('public'));

//引进这个模块
var book = require('./router/book');

//use(和all一样)所有的方法都走的路由,
//无论get,post还是其他的方法请求/book都走book模块进行处理。
app.use('/book', book);




var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});