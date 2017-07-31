/**
 * Created by qingyun on 16/10/23.
 */


//包含命令行参数的数组。第一个元素是'node',第二个参数是 JavaScript 文件的名字,第三个参数是任意的命令 行参数
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
    // console.log(array);
});
// process.on('exit',function () {
//     console.log("退出线程" + process.pid);
// });
// console.log("进程开始!");
// setTimeout(function () {
//     console.log("i am timer,execute after 3 seconds");
// },3000);

process.on('SIGINT', function() {
    console.log('收到 SIGINT 信号');
});

console.log('试着按下 ctrl + C');
setTimeout(function() {
    console.log('end');
}, 4000);