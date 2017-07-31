/**
 * 流。
 * 流支持事件。
 * 'data'事件:正在读数据
 * 'end'事件:数据接收完毕。
 *
 *
 * 流的pipe方法:
 * 
 * */

var fs = require('fs')
var zlib = require('zlib')

//创建一个可读流
var r = fs.createReadStream('sample.txt');
var z = zlib.createGzip();//压缩的方法
//创建一个可写流
var w = fs.createWriteStream('file.txt.gz');

r.pipe(z).pipe(w);
//r.pipe(w);
