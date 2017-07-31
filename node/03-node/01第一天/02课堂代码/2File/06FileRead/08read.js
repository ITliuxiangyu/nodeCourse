/**
 * Created by qingyun on 16/11/19.
 */
var fs = require('fs');
//var Buffer = require('buffer');

/*

buffer:处理二进制文件的类;

 */
//fd:文件描述符。指向一个文件。
//file的二进制描述:abcde
//buf:00000
fs.open('e.txt', 'a+', (err,fd)=>{
    var buf = new Buffer(5);
    fs.read(fd, buf, 0, 3, 1, (err)=>{
        if (err)
        throw err;
        console.log(buf.toString());

    });
})
