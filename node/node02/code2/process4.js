// 标准输入输出
// 设置编码格式
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    // 读取输入的值
    var chunk = process.stdin.read();

    if (chunk !== null) {
        process.stdout.write("data: " + chunk);

        // 退出进程
        // process.exit(process.pid);
        // 传播end
        process.stdin.emit('end');
    }

});

process.stdin.on('end', function () {
   process.stdout.write('end!!!');
    console.log("输入和输出全部关闭!!!");
});
