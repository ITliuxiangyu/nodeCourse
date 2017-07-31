/**
 * Created by qingyun on 16/11/19.
 */
var fs = require('fs');

fs.watch('www', (event, filename) => {
    console.log(`事件是 is: ${event}`);
    if (filename) {
        console.log(`filename provided: ${filename}`);
    } else {
        console.log('filename not provided');
    }
});