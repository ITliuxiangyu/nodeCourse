var fs = require('fs');
/*
fs.unlink('js/test.txt', function (err) {
    if (!err) {
        console.log("删除目录成功!!");
    }
});

// 删除文件夹
// 只能删除空目录
fs.rmdir('js', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("删除成功!!!");
    }
});
*/

/*
fs.rename('doc/test.js', 'model.js', function (err) {
    if (!err) {
        console.log("文件夹移动命名成功!!!");
    }
});
*/

// 判断文件是否存在
/*
fs.exists("model.js", function (exists) {
    if (exists) {
        console.log("存在该文件!!");
    } else {
        console.log("不存在该文件!!!");
    }
});
*/


// 读取文件夹中文件的方法
fs.readdir('doc', function (err, files) {
    if (!err) {
        console.log(files);
    }
});











