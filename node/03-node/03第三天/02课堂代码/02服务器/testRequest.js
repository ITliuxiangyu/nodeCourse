//依赖模块引入进来
const http = require('http');
const fs = require('fs');
const url = require('url');
const queryString = require('querystring');


function proxy(jsonpUrl, proxyQuery, fn) {
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
        console.log(options)
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
            //res.end(`请求${jsonpUrl}超过10s,已经超时`)
        })

        console.log('请求参数：'+proxyQuery)
        proxyQuery = decodeURIComponent(proxyQuery)
        cReq.write(proxyQuery);
        cReq.end();
    } catch (e) {
        console.log(e)
        //res.end(`jsonpUrl:${jsonpUrl} 不存在`)
    }
}


proxy('http://192.168.8.81:9000/vote','openid=2&data%5B0%5D%5Bname%5D=%E5%BC%A0%E4%B8%89&data%5B0%5D%5Bscore%5D=2&data%5B1%5D%5Bname%5D=%E6%9D%8E%E5%9B%9B&data%5B1%5D%5Bscore%5D=1',function(res){
    console.log(res);
})