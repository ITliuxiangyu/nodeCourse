// 引入http模块
var http = require('http');

// 创建服务器
var server = http.createServer(function (request, response) {

    // 给请求者发送内容
    response.end("Hello, world!");

});

// 监听端口号
server.listen(3000, function (error) {
   if (!error) {
       console.log("服务器已经启动, 端口号3000!!!");
   }
});

// killall node 杀死所有node开启的服务器
// ls  list 目录列表
// cd 进入到哪个路径
// node  ...js 在服务端运行js文件
// sudo 获取管理员权限
// npm install -g 全局安装, 一般需要获取最高权限
// npm uninstall -g 卸载
