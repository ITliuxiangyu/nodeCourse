/**
 * Created by qingyun on 16/10/30.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');//body-parser帮助我们监听并接收请求中body的数据的模块
app.use(bodyParser.urlencoded({ extended: true }));//bodyParser.urlencoded 模块用于解析req.body的数据，解析成功后覆盖原来的req.body，如果解析失败则为 {} extended选项允许配置使用querystring(false)或qs(true)来解析数据，默认值是true
app.use(bodyParser.json());
app.use(express.static('public'));
app.all('/',function (req,res) {
    console.log(req.method);//请求类型
    console.log(req.headers);//请求头
    console.log(req.header('user-agent'));
    //查询参数 query
    console.log(req.query);
    console.log(req.query.name);

    //post时的请求体 这里必须应用了 body-parser才行
    console.log(req.body);
    res.send('hello world!');
});
app.listen(3000,function (err) {
    if (!err){
        console.log("服务开启成功,端口为3000!");
    }
});