// 进程id
console.log(process.pid);

// 平台信息, 只会显示内核相关信息
console.log(process.platform);

// 内存利用率
// rss: 代表RAM的使用情况
// heapTotal: v8引擎内存分配的大小
// heapUsed: 正在使用的大小
console.log(process.memoryUsage());

// 进程的当前目录
console.log(process.cwd());
setTimeout(function () {
    console.log("11111");
}, 1000);

// 杀死进程
// process.kill(process.pid);
// 退出进程
// process.exit(process.pid);

