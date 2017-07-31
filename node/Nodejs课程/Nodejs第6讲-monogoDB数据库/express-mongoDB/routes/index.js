var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

var mongodbServer = new mongodb.Server('localhost',27017,{auto_reconnect:true});
//创建mongoDB对象 safe是否使用安全线程
var db = new mongodb.Db('demo',mongodbServer,{safe:true});
var userArray;
router.get('/', function(req, res, next) {
  //打开数据库
  db.open(function (err,db) {
    if(!err){
      console.log("连接数据库成功!");
      //连接数据库表
      db.collection('users',{safe:true},function (err,collection) {
        if(!err){
          console.log("连接数据表成功!");
          //查询数据集合
          collection.find().toArray(function (errFind,cols) {
            if(!errFind){
              console.log("查询到数据表!");
              console.log(JSON.stringify(cols));
              userArray = cols;
              db.close();//关闭数据库
              res.render('index1', {userArray: userArray});
            }else {
              console.log("查询失败!");
            }
          });
          //查询方式二 collection.find({userName:'zaq'}).toArray()
          //查询方式三 collection.findOne({userName:'zaq'},function(err,cols){
          // });

        }else {
          console.log("连接数据表失败!" + err);
        }
      });
    }else {
      console.log("连接数据库失败!" + err);
    }
  });
});

module.exports = router;
