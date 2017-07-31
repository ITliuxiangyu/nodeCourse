const http = require('http');

const fs = require('fs');


/*
* 请求一个地址。拿到所有图片地址。
* http.get:获取某个地址的数据。相当于创建一个客户端。
* http.get(res)
* res:是服务器对客户端的响应(流)。
* 通过.data来拿到流里面的数据
* 通过end判断流读取结束。
*
*
*
* */

http.get('http://www.sina.com.cn/', function (res) {

    var htmls = [];
    res.on('data',function(data){
        //console.log(data.toString());
        htmls.push(data);
    })
    res.on('end',function(){
        var html = htmls.join('');
        //console.log(html);
        var imgs=[];
        var imgReg = /<img.*src="(.+?)".*?>/g
        html.replace(imgReg, function (a, b) {
            imgs.push(b);
        })

        downloadImg(imgs)
        //console.log(imgs.join(','));
        console.log('请求结束')
    })


}).on('error', function (e) {
    console.log(`Got error: ${e.message}`);
});

/***
 * 下载imgs数组里面的所有图片
 * @param imgs
 */
function downloadImg(imgs){
     imgs.forEach(function(url){
         var filename = url.match(/[^\/]+$/)[0];

         //对图片进行请求
         http.get(url,function(res){
             //res:服务器响应的数据。

             res.on('data',function(data){
                fs.appendFile('./imgs/'+filename,data);
             })
             res.on('end',function(){
                console.log(filename+'请求完成');
             })
         })
     })
}