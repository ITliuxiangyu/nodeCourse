/**
 伪代码:
 1.读取文件夹,列出所有的js文件。
 2.遍历每一个文件,用正则把每一个不需要的字符(例如空格,注释)替换掉
 3.写入一个文件。

 var str = "";
 readDir(files)
    files.forEach(function(file){
        read(file,function(content){
            str+= content;
        })
    })
 console.log(str);//所有的内容
 str.replace
 writeFile(filename, str);
 
    readdir--读取目录
    用法:
    fs.readdir(path[, options], callback)
    callback(err,files)--files是文件的列表数组
 */
var fs = require('fs');

var allStr = "";
fs.readdir('./src',function(err,files){
    //console.log(files);
    files.forEach(function(file,i){
        fs.readFile('./src/'+file,function(err,content){
            if(err)
                throw err;
            allStr += content;
            // console.log(content.toString());
            if(i == files.length-1) {
                console.log(allStr);
                allStr = allStr.replace(/\s/g,'');
                fs.writeFile('./dist.js',allStr,function(err){
                    if(err)
                        throw err;
                })
            }
        })
        //console.log(file);
    })
})



