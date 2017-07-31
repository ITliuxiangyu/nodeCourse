function CompileHtml() {
    this.read = readHtml;
}

function readHtml(path, func) {
    var fs = require('fs');
    fs.readFile(path, 'utf-8', function (err, data) {
        if (!err) {
            func(data);
        }
    });
    // return fs.readFileSync(path, 'utf-8');
}
module.exports = CompileHtml;