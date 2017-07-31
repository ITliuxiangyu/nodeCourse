var fs = require('fs');
/*
 todo:1:通过命令行添加压缩路径:fixed
 todo:2:动态监测文件变动
 */
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
//process.argv 是一个数组,里面包含,node的路径,当前js的路径,和其他传进来的参数。
var path = process.argv[2];//通过process,拿到压缩路径

function compress(distPath) {
    readContentFromPath(path, function (content) {
        content = content.replace(/\s/g, '');
        content = content.replace(/\/\*[\s\S]*?\*\//g, '');
        fs.writeFile(distPath, content, function (err) {
            if (err)
                throw err;
            console.log('压缩完成。。');
        })

    })
}

fs.watch(path,function(){
    console.log('文件有变化...');
    compress('./dist.js');

})

