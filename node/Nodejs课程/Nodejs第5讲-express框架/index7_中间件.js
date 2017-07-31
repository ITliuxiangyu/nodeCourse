/**
 * Created by qingyun on 16/10/30.
 */
/*
* 可乐的生成：水  -->  净化  -->  调配  -->  装瓶  -->  质检  -->  饮用可乐
 水到可乐，每一个中间过程都认为是一个中间件
* */
/*
* 在nodejs里，中间件一般是指一个函数队列，你把一堆执行不同操作的函数push到一个队列里，然后每次pop出来执行，直到队列为空，然后说这是中间件，瞬间高大上的感觉
* */
/*
* Express里有个中间件（middleware）的概念。所谓中间件，就是在收到请求后和发送响应之前这个阶段执行的一些函数 它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量
* */
/*
* 中间件在nodejs服务里可以帮助我们在程序的运行过程中(程序没有结束前)帮助我们处理一些东西,但是又不仅仅是这样,因为其还有向下连接的特性即next(),其还可以帮助我们粘合各个模块,从而实现更好的设计模式(MVC等)和代码管理
* */
//应用级中间件
var express = require('express');
var app = express();

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

// 挂载至 / 的中间件，任何指向 / 的请求都会执行它
app.use('/', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// 路由和句柄函数(中间件系统)，处理指向 / 的 GET 请求
app.get('/', function (req, res, next) {
    res.send('world');
});
app.listen(3000,function (err) {
    if (!err){
        console.log("服务开启成功,端口为3000!")
    }
});