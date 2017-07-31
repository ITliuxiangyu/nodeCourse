/**
 * Created by qingyun on 16/10/30.
 */
var express = require('express');
var app = express();
app.get('/',function (req,res) {
    //express的send方法更符合语义,并且其能自动帮助我们结束请求
    res.send('hello world!');
});
app.get('/demo1',function (req,res) {
    //express不用我们设定编码格式会自定帮助我们调整成合适的编码格式
    res.send('进入demo1');
});
app.get('/demo2',function (req,res) {
    res.send('进入demo2');
});
app.post('/post', function (req, res) {
    res.send('post请求成功!');
});
var server = app.listen(3000,function (err) {
    var host = server.address().address;
    var port = server.address().port;
    if (!err){
        console.log("服务开启成功!请访问" + host + port);
    }
});