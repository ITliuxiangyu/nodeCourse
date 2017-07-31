/**
 * Created by qingyun on 16/10/23.
 */
//标准输入输出

process.stdin.setEncoding("utf-8");
process.stdin.on('readable',function () {
    //读取输入的值
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write('data: ' + chunk);
        // process.exit(process.pid);
        // process.stdin.emit('end');
    }
});
process.stdin.on('end', function() {
    process.stdout.write('end');
    console.log("输入和输出全部关闭!");
});