/**
 * Created by qingyun on 16/10/26.
 */

//引入net模块来供我们使用
var net = require('net');
//第一个参数是一个配置参数{allowHalfOpen:false} 全开和半开
net.createServer(function (sock) {
    console.log("服务器已经建立了连接!");
    sock.setEncoding("utf8");
    sock.on('data',function (data) {
        console.log(data);
        sock.write(data);
        sock.end();
    });
    sock.on('end',function (data) {//测试close也行
        console.log("连接关闭!");
    });

}).listen(3000);

// var server = net.createServer();
// server.on('connection',function (client) {
//     console.log("服务器已经建立了连接!");
//     client.setEncoding('utf8');
//     client.write("sss");
//     client.end();
// }).listen(3000);