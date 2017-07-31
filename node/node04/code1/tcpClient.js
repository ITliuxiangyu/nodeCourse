// 客户端Socket (QQ)
var net = require('net');

// 192.168.3.85
// 主机
var host = "127.0.0.1";
// 端口号
var port = 3000;

var client = net.connect(port, host, function () {
    client.setEncoding('utf-8');
    console.log("链接TCP服务器成功!!!");
    process.stdin.setEncoding('utf-8');
    process.stdin.on('readable', function () {

        // 读取输入的内容
        var chunk = process.stdin.read();
        if (chunk) {
            // 将内容发送给服务器
            client.write(chunk);
        }
    });
    process.stdin.on('end', function () {
        process.stdout.write("end!!!");
        console.log("输入输出全部关闭!!!");
    });

});

// 监听服务器发送过来的消息
client.on('data', function (data) {
    console.log(data);
});

// 监听链接关闭
client.on('end', function () {
   console.log("连接结束!!!");
});