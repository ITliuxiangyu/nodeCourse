// http模块
var http = require('http');
var qs = require('querystring');

// http://c.m.163.com/nc/article/headline/T1348647853363/0-140.html

/*
var obj = {
    name: "小明",
    age: 18
};
// 将对象转化成字符串, 参数中间用&连接
var str = qs.stringify(obj);
console.log(str);
    */
var str = "/nc/article/headline/T1348647853363/0-140.html";

var options = {
    host: "c.m.163.com",
    path: str,
    method: "GET"
};

// 发送请求
var req = http.request(options, function (clientRes) {
    clientRes.setEncoding('utf-8');
    var result = "";
    clientRes.on('data', function (data) {
        // console.log("~~~~~~");
        console.log(data);
        // console.log("~~~~~~~");
        result += data;
    });
    clientRes.on('end', function () {
        console.log("结束!!");
        console.log(result);
    });
});
// 如果是post
// 发送请求体的内容
/*
var obj = {
    name: "小明",
    age: 18
};
req.write(qs.stringify(obj));
*/

req.end();
