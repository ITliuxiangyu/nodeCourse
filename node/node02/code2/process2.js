// 包含命令行参数的数组
// 第一元素: "node"
// 第二个元素: 当前js文件
// process.argv.forEach(function (val, index, arr) {
//     console.log(index + ": " + val + "----" + arr);
// });

// 监听进程退出
// process.on("exit", function () {
//    console.log("退出进程" + process.pid);
// });
//
// console.log("进程开始!!!");
// setTimeout(function () {
//     console.log("I am a timer");
// }, 3000);
// // 监听信号情报
process.on("SIGINT", function (e) {
   console.log("收到SIGINT信号, 按下control+c" , e);
});
setTimeout(function () {
    console.log("end!!!");
}, 6000);

