/**
 * Created by qingyun on 16/10/28.
 */
var http = require('http');
//如数据含有不安全字符，则浏览器先将其转换成 16进制的字符再传送，如空格被转成 %20,并且还可以把name=2&age=3转换成对象或把{name:2,age:3}转换成name=2&age=3的模块
var qs = require('querystring');
//get请求是没有请求体的get的请求参数都在接口里  post的所有数据都在请求体里,我们需要使用我们创建的请求者对象去发送请求体 这里是req就是
//http.request需要两个参数一个是options配置项一个是回调函数
/*
* option 是一个关联数组 的对象,表示请求的参数,callback 是请求的回调函数。option 常用的参数如下所示。
 host :请求网站的域 或 IP 地址。
 port :请求网站的端口, 认 80。
 method :请求方法, 认是 GET。
 path:请求的相对于根的路径, 认是 / 。QueryString 应该包含在其中。
 例如 /search?query=byvoid。
 headers:一个关联数组对象,为请求头的内容。
* */
var options  = {
    host:'localhost',
    port:'3000',
    method:'POST',
    path:'/',
    headers:{
        "Content-type":'application/x-www-form-urlencoded; charset=UTF-8'
    }
};
var req = http.request(options,function (res) {//和发送get请求一样我们同样得到一个res响应者对象
    var post_result = '';
    res.setEncoding('utf8');
    res.on('data',function (data) {
        // console.log(data);
        post_result += data;
    });
    res.on('end',function () {
        console.log(post_result);
    })
    
});
var post_data = {
    name:'zaq',
    age:'25'
};
//req发送请求内容是用write
req.write(qs.stringify(post_data),function () {
    //结束请求
    req.end();
});
