/**
 * Created by qingyun on 16/10/26.
 */
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 3000;
var client = net.connect(PORT,HOST,function () {
    client.setEncoding('utf8');
    console.log("连接TCP服务成功!");
    process.stdin.setEncoding("utf-8");
    process.stdin.on('readable',function () {
        //读取输入的值
        var chunk = process.stdin.read();
        if (chunk !== null) {
            // process.stdout.write('data: ' + chunk);
            // process.exit(process.pid);
            // process.stdin.emit('end');
            client.write(chunk);
        }
    });
    process.stdin.on('end', function() {
        process.stdout.write('end');
        console.log("输入和输出全部关闭!");
    });
});
client.on('data',function (data) {
    console.log(data);

});
client.on('end',function () {
    console.log("连接结束!");
});