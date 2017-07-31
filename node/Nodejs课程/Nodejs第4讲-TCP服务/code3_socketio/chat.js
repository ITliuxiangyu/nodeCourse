/**
 * Created by qingyun on 16/10/26.
 */
var http = require('http');
var fs = require('fs');
var io = require('socket.io');
// 虽然我们这里使用了同步的方法，那会阻塞 Node 的事件循环，但是这是合理的，因为 readFileSync() 在程序周期中只执行一次，而且更重要的是，同步方法能够避免异步方法所带来的“与 SocketIO 之间额外同步的问题”。当 HTML 文件读取完毕，而且服务器准备好之后，如此按照顺序去执行就能让客户端马上得到 HTML 内容。
var sockFile = fs.readFileSync('index.html','utf8');
// Socket 服务器还是构建于 HTTP 服务器之上，因此先调用 http.createServer()
var server = http.createServer();
server.on('request', function(req, res){
    // 一般 HTTP 输出的格式
    res.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    // console.log(sockFile);
    res.end(sockFile);

}).listen(3000);

var socket = io.listen(server); // 交由 Socket.io 接管

// Socket.io 真正的连接事件
socket.on('connection', function(client){
    client.on('chatMessage', function(msg){
        //socket把事件传播
        msg = client.id + "说:" + msg;
        socket.emit('chatMessage', msg);
    });
});