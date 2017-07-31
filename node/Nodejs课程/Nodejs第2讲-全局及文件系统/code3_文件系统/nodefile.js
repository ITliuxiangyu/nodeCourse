/**
 * Created by qingyun on 16/10/24.
 */
var fs = require('fs');

//fs.readFile(filename,[encoding],[callback(err,data)])是最简 的读取 文件的函数。它接受一个  参数 filename,表示要读取的文件 。第二个参数 encoding 是可 的,表示文件的字符编码。callback 是回调函数,用于接收文件的内容。如果不指定encoding,则callback就是第二个参数。回调函数提供两个参数err和data,err表 示有没有错误发生,data 是文件内容。如果指定了 encoding,data 是一个解析后的字符, 则 data 将会是以 Buffer 形式表示的二进制数据
// fs.readFile('test.txt',function (err,data) {
//     if (!err) {
//         console.log('打开文件成功!');
//         console.log(data);
//     }
// });

//注:nodejs中大部分异步函数是没有返回值的 fs.readFileSync有
// var data = fs.readFileSync('test.txt','utf-8');
// console.log(data);

//写文件
// fs.writeFile('test.txt','hello world!','utf8',function (err,data) {
//     if (err){
//         console.log(err);
//     }else {
//         console.log("写入文件成功!");
//     }
// });
// var err = fs.writeFileSync('test.txt','哈哈','utf8');
// if (err){
//     console.log(err);
// }else {
//     console.log("同步写入文件成功!");
// }

//以追加的方式写文件
fs.appendFile('test.txt','我是个大帅哥!','utf8',function (err,data) {
    if (!err){
        console.log('追加文件成功!');
    }
});
//其同样有个同步方法
// fs.appendFileSync('test.txt','是真的!','utf8');

//删除文件的方法
// fs.unlink('test.txt',function (err) {
//     if(!err){
//         console.log("删除文件成功!");
//     }
// });