var http = require('http');
// var options = {
//     host: "c.m.163.com",
//     path: "/nc/article/headline/T1348647853363/0-140.html"
// };
http.get("http://c.m.163.com/nc/article/headline/T1348647853363/0-140.html", function (res) {
    var result = "";
    res.on('data', function (chunkData) {
        result += chunkData;
    });
    res.on('end', function () {
        console.log(result);
    });
    
});
