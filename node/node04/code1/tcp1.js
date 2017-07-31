// Net模块可用于创建Socket服务器和Socket客户端. NodeJS的数据通信, 最基础的两个模块就是Http和Net, 前者是基于Tcp的封装, 后者本质还是Tcp层, 只不过做了比较多的数据封装, 我们视为表现层
// Socket: 孔或插座. 通常也叫 "套接字", 用于描述ip和端口, 是一个通信链句柄, 可以用来实现不同虚拟机或不同计算机之间的通信

// Socket服务器端
var net = require('net');
net.createServer(function (socket) {

    console.log("服务器已经建立连接!!!");
    // 编码格式
    socket.setEncoding('utf-8');

    socket.on('data', function (data) {
        console.log(data);
        // 向客户端发送消息
        socket.write("你是帅逼: " + data);
        // 结束连接
        // socket.end();

    });
    socket.on('end', function () {
        console.log("连接关闭!!!");
    });


    
}).listen(3000);

/*
var server = net.createServer();
server.on('connection', function (socket) {
    console.log("链接服务器成功!!!");
    socket.setEncoding('utf-8');
    socket.write("sss");

}).listen(3000);
*/


