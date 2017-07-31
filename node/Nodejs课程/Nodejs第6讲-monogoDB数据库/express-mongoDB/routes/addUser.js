var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

var mongodbServer = new mongodb.Server('localhost',27017,{auto_reconnect:true});
//创建mongoDB对象 safe是否使用安全线程
var db = new mongodb.Db('demo',mongodbServer,{safe:true});
var userArray;
router.all('/', function(req, res, next) {
  //打开数据库
  db.open(function (err,db) {
    if(!err){
      console.log("打开数据库成功!");
      //连接数据库表
      db.collection('users',{safe:true},function (err,collection) {
        if(!err){
            if (req.query.type == '增加'){
                //增加数据库
                collection.insert(req.query,{safe:true},function (err,result) {
                    if (!err){
                        console.log("插入数据成功!");
                        res.send("插入数据成功!");

                    }
                    db.close();

                });
            }
            if (req.query.type == '更新'){
                //增加数据库
                collection.update(req.query.oldValue,{$set:req.query},function (err,result) {
                    if (!err){
                        res.send("更新数据成功!");
                    }else {
                        console.log(err);
                    }
                    db.close();

                });
            }
            if (req.query.type == '删除'){
                var user = {};
                if (req.query.name){
                    user.name = req.query.name;
                }
                if (req.query.sex){
                    user.sex = req.query.sex;
                }
                if (req.query.age){
                    user.age = req.query.age;
                }
                if (req.query.hobby){
                    user.hobby = req.query.hobby;
                }
                //增加数据库
                collection.remove(user,{safe:true},function (err,result) {
                    if (!err){
                        console.log("删除数据成功!");
                        res.send("删除数据成功!");

                    }
                    db.close();

                });
            }

        }else {
          console.log("连接数据表失败!" + err);
        }
      });
    }else {
      console.log("打开数据库失败!" + err);
    }
  });
});

module.exports = router;

