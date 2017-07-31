var net = require('net');
var host = "127.0.0.1";
var port = 3000;
var client = net.connect(port, host, function () {

    client.setEncoding('utf-8');
    console.log("连接TCP服务器成功!!!");
    console.info();

    process.stdin.setEncoding('utf-8');
    process.stdin.on('readable', function () {

        var chunk = process.stdin.read();
        if (chunk) {
            client.write(chunk);
        }

    });
    process.stdin.on('end', function () {
       console.log("输入输出关闭!!!");
    });

});

client.on('data', function (data) {
   console.log(data);
});

client.on('end', function () {
    console.log('连接关闭!!!');
    client.end();
    process.stdin.emit('end');
});

