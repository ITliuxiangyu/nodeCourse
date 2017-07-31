/**
 * Created by qingyun on 16/10/28.
 */
var net = require('net');
var clientList = [];
net.createServer(function (socket) {
    // console.log(socket);
    console.log("连接成功!");
    socket.setEncoding('utf8');
    clientList.push(socket);
    var clientName = socket.remoteAddress + socket.remotePort;
    //新加入的客户端直接看到自己加入
    socket.write(clientName + "加入聊天室!\n");
    //遍历所有的连接在他们的屏幕上显示欢迎
    broadcast("欢迎" + clientName + "加入聊天室!\n",socket);
    socket.on('data',function (data) {
        console.log(data);
        broadcast(clientName + "说:" + data,socket);
    });
    socket.on('end',function () {
        console.log(clientName + "关闭");
        broadcast("hi:" + clientName + "离开了!\r\n",socket);
        //如果发现有客户端离开 我们应该把该客户端从列表中移除,否则在调用broadcast方法时还会传播会崩溃
        clientList.splice(clientList.indexOf(socket),1);
    });
    //用方法告诉除了发消息的客户端的其他客户端消息
    function broadcast(msg,client) {
        var cleanup = [];
        for (var i = 0;i < clientList.length;i++){
            if (socket != clientList[i]){
                clientList[i].write(msg);

                //判断当前客户端有没有异常是不是可写对象
                // if (clientList[i].writable){
                //     clientList[i].write(msg);
                // }else {
                //     cleanup.push(clientList[i]);
                //     clientList[i].destroy();//清除客户端socked
                // }

            }
        }
        //如果发现异常对象提出广播列表
        // for (var j = 0; j < cleanup.length;j++){
        //     clientList.splice(clientList.indexOf(cleanup[j]),1);
        // }
    }
}).listen(3000);
console.log("net服务创建成功!端口为3000");