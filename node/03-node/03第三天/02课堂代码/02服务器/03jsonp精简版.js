//依赖模块引入进来
const http = require('http');
const fs = require('fs');
const url = require('url');
const queryString = require('querystring');
/*
 形如下面的字符串:
 name=zs&pwd=zs
 就叫查询字符串。
 创建一个服务器:
 http.createServer这个api函数接收一个函数当参数。
 这个函数有两个参数,这两个参数是node服务器传给他的。
 http里面:请求和响应都分三部分:请求行、请求头,请求体。
 分别是:request,response.---他们两个都是流。
 request:客户端(浏览器)对服务器的请求对象。里面包含请求信息。可以通过他获取客户端的很多请求信息(
 url:request.url --浏览器里面的请求路径
 headers: request.headers --浏览器里面的请求头
 request.on('data',fn),request.on('end',fn)----拿到的请求体
 )
 response: 服务器对客户端(浏览器)的响应。(
 response.write --向客户端写入信息
 response.end() --向客户端写入信息,写完之后,结束这个流。
 response.setHeaders ---
 response.statusCode --
 )
 */
const server = http.createServer(function (req, res) {
    var filename = req.url;
    //url.parse:解析路径成对象。(很想location对象)
    var query = url.parse(filename).query;
    //查询字符串,把一组查询字符串解析成对象。
    var cb = queryString.parse(query).callback;
    var proxyUrl = queryString.parse(query).url;
    var proxyQuery = queryString.parse(query).query;
    proxyQuery = decodeURIComponent(proxyQuery);
    console.log('代理:' + proxyUrl);
    //代理请求数据,请求成功,相应给客户端
    proxy(proxyUrl, proxyQuery, res,function (data) {
        res.end(cb + '(' + data + ')')
    })
});

/*
 * 代理方法
 * @param url
 * @param fn
 */
function proxy(jsonpUrl, proxyQuery,res, fn) {
    try {
        var toReqUrl = url.parse(jsonpUrl);
        var options = {
            hostname: toReqUrl.hostname,
            path: toReqUrl.path,
            port:toReqUrl.port,
            method: 'POST',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Host': toReqUrl.host,
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36'


            }
        };
        var cReq = http.request(options, function (res) {
            var content = "";
            res.on('data', function (data) {
                console.log(`正在获取${jsonpUrl}的数据...`)
                content += data;
            })
            res.on('end', function () {
                fn(content);
            })
        })

        cReq.setTimeout(10000, function () {
            res.end(`请求${jsonpUrl}超过10s,已经超时`)
        })

        console.log('请求参数：'+proxyQuery)
        cReq.write(proxyQuery);
        cReq.end();
    } catch (e) {
        console.log(e)
        res.end(`jsonpUrl:${jsonpUrl} 不存在`)
    }
}
var port = 8000;
server.listen(port, function () {
    console.log('监听在' + port)
});
