/**
 * Created by qingyun on 16/10/23.
 */
// console.log(process);

//进程id
console.log(process.pid);
//平台信息
console.log(process.platform);
//内存利用率
console.log(process.memoryUsage());
//VSS - Virtual Set Size 虚拟耗用内存（包含共享库占用的内存
//得到内存利用率,{ rss: 20094976, heapTotal: 7408736,这是堆栈分配内存。 heapUsed: 3930384 堆区使用}

//进程当前目录
console.log(process.cwd());

//杀死进程
// process.kill(process.pid);
//退出进程
process.exit(process.pid);

