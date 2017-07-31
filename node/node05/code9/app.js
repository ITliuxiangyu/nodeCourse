var express = require('express');
var app = express();
var login = require('./router/login');
var path = require('path');
var ejs = require('ejs');

// 设置模板路径
// 第一个参数: views代表模板
// 第二个参数: 模板所在文件夹路径
app.set('views', "views");

// 设置模板引擎
app.set('view engine', 'ejs');
// jade 模板引擎
// app.set('view engine', 'jade');

// 设置让ejs帮主我们变异 .html格式文件
// app.engine(".html", ejs.__express);
// app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, "public")));


// 把路由加载至应用
app.use("/login", login);

app.listen(3000, function (err) {
    if (!err) {
        console.log("服务器已开启, 端口号3000");
    }
});
