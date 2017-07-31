var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

//静态资源文件中间件。
app.use(express.static('public'));

//当客户端连接上来的时候。
io.on('connection', function(socket){
    //当监听到char message 这个事件。
        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
        });
    console.log('hi')
    
});



http.listen(3000, function(){
    console.log('listening on *:3000');
});