// 文件系统
// fs 模块是文件操作的封装,它提供了文件的读取、写入、更名、删除、遍历目录、链接等 POSIX 文件系统操作。与其他模块不同的是,fs 模块中所有的操作都提供了异步的和 同步的两个版本,例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。我们以几个函数为代表,介绍 fs 常用的功能,并列出 fs 所有函数的定义和功能。

/*
*
* fs.readFile(filename,[encoding],[callback(err,data)])是最简 的读取 文件的函数。它接受一个必选参数 filename,表示要读取的文件 。第 个参数 encoding 是可选的,表示文件的字符编码。callback 是回调函数,用于接收文件的内容。如果不指 定encoding,则callback就是第 个参数。回调函数提供两个参数err和data,err表 示有没有错误发生,data 是文件内容。如果指定了 encoding,data 是一个解析后的字符串, 则 data 将会是以 Buffer 形式表示的而进制数据。
*
* */
var fs = require('fs');
// 异步读取数据
/*
fs.readFile('doc/wy.txt', 'utf-8', function (err, data) {
    if (!err) {
        // console.log(data.toString());
        console.log(data);
    }
});
console.log("666666");
*/

// 同步读取文件内容
/*
var data = fs.readFileSync("doc/wy.txt", 'utf-8');
console.log(data);
console.log(66666);
*/







/*
* fs.open(path, flags, [mode], [callback(err, fd)])是 POSIX open 函数的  装,与 C 语言标准库中的 fopen 函数  。它接受两个  参数,path 为文件的路 , flags 可以是以下值。
 r :以读取模式打开文件。
 r+ :以读写模式打开文件。
 w :以写入模式打开文件,如果文件不存在则创建。
 w+ :以读写模式打开文件,如果文件不存在则创建。
 a :以 加模式打开文件,如果文件不存在则创建。
 a+ :以读取 加模式打开文件,如果文件不存在则创建。
*
* mode文件权限, 默认0666
* 0ABC
* A表示拥有者的权限 B代表同组用户权限 C:其它用户的权限
* r = 4
* w = 2
* x = 1
* -rwxr-xr-- 代表 0754  第一个 - 代表 0, rwx: 4 + 2 + 1 = 7, r-x: 4 + 0 + 1 = 5, r--: 4 + 0 + 0 = 4
*
* */

fs.open('doc/test.txt', "w", function (err, fd) {
    if (!err) {
        console.log("文件打开成功!!");
        console.log(fd);

        // 文件读取方式
        /*
        fs.readFile("doc/wy.txt", 'utf-8', function (err, data) {
            if (!err) {
                console.log(data);
            }
        });
        */

        // 更底层的读取文件内容方式
        // 一 来说,除非必要,否则不要使用这种方式读取文件,因为它要求你 动管理缓冲区 和文件指针, 其是在你不知道文件大小的时候,这将会是一件很  的事 。
        /*
        fs.read(fd, new Buffer(8), 0, 8, null, function (err, bytes, buffer) {
            if (!err) {
                console.log(bytes);
                console.log(buffer.toString());
            }
        });
        */

        // 写入内容
        fs.writeFile('doc/test.txt', "哈哈", 'utf-8', function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("写入内容成功");
            }
            
        });

    }
});









