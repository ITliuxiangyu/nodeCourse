/**
 * Created by qingyun on 16/10/26.
 */
function compileHtml() {
    this.read = readSelfHtml
}
function readSelfHtml(path) {
    var fs = require('fs');
    return fs.readFileSync(path,'utf8');
}
module.exports = compileHtml;