/**
 * Created by qingyun on 16/10/30.
 */
var express = require('express');
var path = require('path');
var app = express();
//使用express一句话就能设置静态文件路径 并且不用担心没有问题而报错崩溃
app.use(express.static('public'));
//我们还可以多次使用方法设置多个静态文件目录
app.use('/demo',express.static('demo'));
//path.join拼接路径
app.use(express.static(path.join(__dirname, 'public')));

app.all('/',function (req,res) {
    res.send('hello world!');
});
app.listen(3000,function (err) {
    if (!err){
        console.log("服务开启成功!端口3000");
    }
});