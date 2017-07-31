var CompileHtml = require('./module');
var cHtml = new CompileHtml();
cHtml.read("index.html", function (data) {
    console.log(data);
});
