/**
 DRY:don't repeat yourself
 不要重复自己。
 **/
var fs = require('fs');
/*
    封装:
        把重用的功能提取出来。
        举个例子:重用的功能封装在函数里面,给函数设置参数。
    把path下面的所有文件,读取出来,拼接到一块传递给fn。
**/
function readContentFromPath(path,fn){
    var allStr = "";
    fs.readdir(path,function(err,files){
        //console.log(files);
        files.forEach(function(file,i){
            fs.readFile(path+'/'+file,function(err,content){
                if(err)
                    throw err;
                allStr += content;
                // console.log(content.toString());
                if(i == files.length-1) {
                     fn(allStr);
                }
            })
            //console.log(file);
        })
    })
}

/*
 .:除了换行之外的所有字符
 [\s\S]:所有字符。
 ^,$:一个字符串的开始或结尾
 贪婪模式:*?阻止贪婪。
 */
readContentFromPath('./src',function(content){
    content = content.replace(/\s/g,'');
    content = content.replace(/\/\*[\s\S]*?\*\//g,'');
    fs.writeFile('./dist.js',content,function(err){
        if(err)
            throw err;
        console.log('压缩完成。。');
    })
})
/*this is a ***/function a(){
    console.log('a');
}/*this is a ***/
var a= 1;//hello
function b(){
    console.log('a');
}
