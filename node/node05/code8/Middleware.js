// 中间件
/*
* Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。

 中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

 中间件的功能包括：

 执行任何代码。
 修改请求和响应对象。
 终结请求-响应循环。
 调用堆栈中的下一个中间件。

 如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。

 Express 应用可使用如下几种中间件：

 应用级中间件
 路由级中间件
 错误处理中间件
 内置中间件
 第三方中间件

 使用可选则挂载路径，可在应用级别或路由级别装载中间件。另外，你还可以同时装在一系列中间件函数，从而在一个挂载点上创建一个子中间件栈。
*
* */

var express = require('express');
var app = express();
// 应用级中间件绑定到 app 对象 使用 app.use() 和 app.METHOD()， 其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写
// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
    console.log("6666");
    // 将控制权交给下个中间件
    next();
});

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use("/user/:name/:password", function (req, res, next) {
    console.log(req.params.name);
    res.send(req.params.name + ", " + req.params.password);
});

app.get("/test/:num", function (req, res, next) {
    if (req.params.num == 100) next('route');
    else next();
}, function (req, res) {
    res.send("不等于100");
});

app.get("/test/:num", function (req, res) {
    res.send("等于100");
});






app.listen(3000, function (err) {

    if (!err) {
        console.log("服务器已经响应, 端口号3000");
    }

});




