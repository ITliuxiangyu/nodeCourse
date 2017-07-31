/**
 * Created by qingyun on 16/10/30.
 */
/*
* Nodejs支持的模板引擎有jade、ejs、Handlebars、Hogan.js等
* 常用的有jade ejs
* */

var express = require('express');
var app = express();
var ejs = require('ejs');
app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
// //单独设置为ejs引擎 set设置的只有下面的生效
// app.set('view engine','ejs');
//设置让ejs帮助我们编译.html格式的文件
app.engine('.html', ejs.__express);
//然后把引擎模板设置为html
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render('index1', { title: 'hello', message: '我会使用模板了!'});
});
app.listen(3000,function (err) {
    if (!err){
        console.log('服务开启成功,端口为3000!');
    }
});