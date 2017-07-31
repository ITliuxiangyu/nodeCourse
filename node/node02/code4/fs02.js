var fs = require('fs');
// 删除文件
fs.unlink('doc/test.txt', function (err) {
    if (!err) {
        console.log("文件删除成功!!!");
    }
});

// 创建目录 fs.mkdir(path, [mode], [callback(err)])
fs.mkdir('js', function (err) {
    if (!err) {
        console.log("文件夹创建成功!!!");

    }
});

fs.open('js/test.txt', 'w+', function (err) {
    if (!err) {
        console.log("文件创建成功");
    }
});

// 更改权限
fs.chmod("js/test.txt", 0444, function (err) {
    if (!err) {
        console.log("修改权限成功!!!");
    }
});
fs.writeFile("js/test.txt", "haha", 'utf-8', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("写入成功!!!");
    }
});

// 以最佳的方式写文件
fs.appendFile('doc/wy.txt', ', 张增光是个大帅哥!!!', 'utf-8', function (err) {
    if (!err) {
        console.log("拼接成功");
    }
});

fs.readFile('doc/test.js', 'utf-8', function (err, data) {
    if (!err) {
        var reg = /\s/g;
        data = data.replace(reg, function (a, b) {
            console.log(a);
            console.log(b);
            return "";
        });
        fs.writeFile('doc/test.js', data, "utf-8", function (err) {
            if (!err) {
                console.log("写入成功!!!");
            }
        });
    }
});


