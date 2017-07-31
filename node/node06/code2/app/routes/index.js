var express = require('express');
var router = express.Router();
var http = require('http');

var mongodb = require('mongodb');
// 设置数据库信息, 连接数据库
// 第一个参数: 主机
// 第二个参数: 端口号
// 第三个参数: auto_reconnect 自动连接
var mongoServer = new mongodb.Server('localhost', 27017, {auto_reconnect: true});

// 创建数据库对象
// safe: 是否使用线程安全 (当多个线程同时访问数据库时会有线程安全问题)
var db = new mongodb.Db('stu', mongoServer, {safe: true});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.all('/', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // post请求body
  // console.log(req.body.name);
  // console.log(req.body.dogs[0]);
  // console.log(req.method);
  // console.log(req.headers);
  // // get请求查询参数
  // console.log(req.query);



  db.open(function (err, db) {
      if (err) return res.send("链接数据库失败!!!");

      console.log("链接数据库成功!!!");

      db.collection('col', {safe: true}, function (err, collection) {
          if (err) return res.send("连接数据表失败!!!");

          console.log("连接数据表成功!!!");

          var query = req.body.query;
          query.age = query.age - 0;
          var update = req.body.update;
          update.$set.age = update.$set.age - 0;
          console.log(query);
        console.log(update);


          collection.updateOne(query, update, {safe: true}, function (err, result) {
            if (err) {
              return res.send("内容修改失败!!!");
            } else {
              res.send("内容修改成功!!!");
            }
            db.close();

          });
      });
    
  });


  // http.get("http://c.m.163.com/nc/article/list/T1348654204705/0-20.html", function (client) {
  //   client.setEncoding('utf-8');
  //   var data = "";
  //   client.on('data', function (result) {
  //     data += result;
  //   });
  //   client.on('end', function () {
  //     res.send(data);
  //   });
  //
  // }).on('error', function (err) {
  //    res.send(err);
  // });



});

module.exports = router;
