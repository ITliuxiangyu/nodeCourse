/**
 * Created by qingyun on 16/11/19.
 */
var fs = require('fs');
fs.watchFile('e.txt', (curr, prev) => {
    console.log(`the current 修改时间(mtime) is: ${curr.mtime}`);
console.log(`the previous mtime was: ${prev.mtime}`);
});