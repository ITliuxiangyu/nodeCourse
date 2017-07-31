var http = require('http');
var url = require('url');
var qs = require('querystring');
http.createServer(function (req, res) {

    // 响应头
    res.writeHead(200, {
        "Content-Type" : "text/html;charset=utf-8"
    });

    /*
    console.log(req.url);
    var obj = url.parse(req.url);
    // 查询参数
    var query = obj.query;
    console.log(obj);
    // console.log(query);
    query = qs.parse(query);
    console.log(query);
    */


    // 如果第二个参数为true, 其属性对应的内容一会被解析成对象
    
    var obj = url.parse(req.url, true);
    var query = obj.query;
    console.log(query.username);
    console.log(query.password);
    console.log(obj);

    // 必须写, 结束响应
    res.end(JSON.stringify(query));

}).listen(3000, function (err) {
    if (!err) {
        console.log("服务器启动成功!!!");
    }
});