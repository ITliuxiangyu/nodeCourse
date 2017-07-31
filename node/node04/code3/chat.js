var http = require('http');
var fs = require('fs');
var io = require('socket.io');
// 同步读取文件
var sockFile = fs.readFileSync('chat.html', 'utf-8');

// socket服务器构建于http服务器之上, 因此先创建 httpServer
var server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, {
        'Content-Type': "text/html;charset=utf-8"
    });
    res.end(sockFile);
}).listen(3000);

// http服务器交由 Socket.io 接管
var socket = io.listen(server);

socket.on('connection', function (client) {
    client.on('chat', function (msg) {
        msg = client.id + "说: " + msg;
        socket.emit('chat', msg);
    });
});

