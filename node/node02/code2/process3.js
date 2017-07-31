// 异常处理事件(捕获异常)
// 注册异常事件的监听
// 当进程中出现异常错误, 会触发这个事件, 执行回调, 如果没有注册异常事件监听, 默认打印堆栈并退出进程
process.on("uncaughtException", function (err) {
    console.log("错误信息:" + err);
});

setTimeout(function () {
    console.log("1s 后关闭");
}, 1000);
// 错误前面的代码包裹回调会继续执行
aa();
console.log("我会执行吗?");






