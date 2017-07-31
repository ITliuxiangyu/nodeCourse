var net = require('net');

// 存放聊天人员的数组
var clientList = [];

net.createServer(function (client) {

    console.log("链接成功!!!");
    client.setEncoding('utf-8');

    // 把链接到服务器的人加入到数组中
    clientList.push(client);

    // 用客户的ip和端口作为用户名
    var clientName = client.remoteAddress + client.remotePort;

    // 让新加入的用户自己能看到加入聊天室
    client.write(clientName + "加入聊天室!!!");

    // 在屏幕上显示欢迎信息
    broadcast("欢迎" + clientName + "加入聊天室!!!\n", client);

    // 监听客户端发来的消息
    client.on('data', function (data) {
        console.log(data);
        broadcast(clientName + "说: " + data, client);
    });

    client.on('end', function () {

        console.log(clientName + "关闭!!!");
        broadcast("hi: " + clientName + "离开聊天室!!!\n", client);

        // 把离开的人从数组中删除
        clientList.splice(clientList.indexOf(client), 1);

    });



    // 广播消息, 把消息发送给除了自己的其他人
    function broadcast(msg, client) {
        var cleanUp = [];

        for (var i = 0; i < clientList.length; i++) {
            if (client != clientList[i]) {
                // clientList[i].write(msg);

                // 判断当前客户端有没有异常, 是不是可写对象
                if (clientList[i].writable) {
                    clientList[i].write(msg);
                } else {
                    cleanUp.push(clientList[i]);
                    clientList[i].destroy(); // 清除客户端Socket
                }

            }
        }

        // 把异常客户从广播列表中删除
        for (var j = 0; j < cleanUp.length; j++) {
            clientList.splice(clientList.indexOf(cleanUp[j]), 1);
        }


    }


}).listen(3000);
