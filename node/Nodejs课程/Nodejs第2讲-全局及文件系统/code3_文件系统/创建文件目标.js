/**
 * Created by qingyun on 16/10/24.
 */
var fs = require('fs');

//创建文件夹的方法
// fs.mkdir('test',function (err) {
//     if (!err){
//         console.log("创建文件夹成功");
//     }
// });
//同步创建文件的方法
// fs.mkdirSync('test');

//读取目录的方法
// fs.readdir('test',function (err,files) {
//     if (!err){
//         console.log(files[0]);
//     }
// });
// var resultFiles = fs.readdirSync('test');
// console.log(resultFiles);


//查看文件或者文件信息
// fs.stat('test.txt',function (err,stats) {
//     if(!err){
//         console.log(stats);
//     }
// });
// var stat = fs.statSync('test.txt');

//判断文件是否存在
// fs.exists('test.txt',function (exists) {
//     //exists为true为存在false为不存在
//     console.log(exists);
// });
// fs.existsSync('test.txt');

//修改文件的访问时间与修改时间
//path 文件路径 atime新的访问时间 mtime新的修改时间
//fs.utimes(path,atime,mtime,callback);
// fs.utimes('test.txt',new Date(),new Date(),function (err) {
//     if (!err){
//         console.log(fs.statSync('test.txt'));
//     }
// });
// fs.utimesSync('test.txt',new Date(),new Date());
//修改文件的操作权限
/*
* r=4
 w=2
 x=1
 只读文件的权限为r--,即数字4
 ABC（比如777）各个数字的含义：
 A表示拥有者的权限，B示用户所在群组其他人的权限，C表示群组以外其他人的权限
* */
//fs.chmod(path,mode,callback);mode权限 8进制
// fs.chmod('test.txt','0666',function (err) {
//     if(!err){
//         console.log("修改文件权限成功!");
//         console.log(fs.statSync('test.txt'));
//     }
// });
// fs.writeFile('test.txt','修改权限成功!','utf8',function (err) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("写入文件成功!");
//     }
// });
// fs.chmodSync('test.txt','0666');

//移动或重命名文件
// fs.rename(oldPath,newPath,callback);
// fs.rename('test.txt','test/test.txt',function (err) {
//     if (err){
//         console.log(err);
//     }else {
//         console.log("移动或者重命名文件成功!");
//     }
// });
// fs.renameSync('test.txt','test/test.txt');

//删除空目录
// fs.rmdir('test',function (err) {
//     if(err){
//         console.log(err,"目录不为空,或者目录不存在!");
//     }else {
//         console.log("删除目录成功!")
//     }
// });
// fs.rmdirSync('test');
//监视文件
//s.watchFile(filename, [options], listener)
/*
*  * filename, 完整路径及文件名；

 * [options], persistent true表示持续监视，不退出程序；interval 单位毫秒，表示每隔多少毫秒监视一次文件

 * listener, 文件发生变化时回调，有两个参数：curr为一个fs.Stat对象，被修改后文件，prev,一个fs.Stat对象，表示修改前对象
* */
fs.watchFile('test.txt',{interval:500},function (curr,prev) {
    console.log(curr);
    console.log(prev);
});
// setTimeout(function () {
//     fs.unwatchFile('test.txt',function (curr, prev) {
//         console.log(curr,prev);
//     })
// },3000);

