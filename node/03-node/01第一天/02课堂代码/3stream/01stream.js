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
var readable = fs.createReadStream('sample.txt');
// fs.createWriteStream('sample.txt');

readable.on('data', (chunk) => {
    console.log('----从流里面读出来--')
    console.log(chunk.toString());
});
readable.on('end', () => {
    console.log('数据读完了');
});
