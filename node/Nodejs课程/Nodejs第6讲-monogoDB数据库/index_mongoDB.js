/**
 * Created by qingyun on 16/10/31.
 */
var mongodb = require('mongodb');
//设置数据库信息 auto_reconnect是否自动连接
var mongodbServer = new mongodb.Server('localhost',27017,{auto_reconnect:true});
//创建mongoDB对象 safe是否使用安全线程
var db = new mongodb.Db('demo',mongodbServer,{safe:true});

//打开数据库
db.open(function (err,db) {
    if(!err){
        console.log("连接数据库成功!");
        //连接数据库表
        db.collection('users',{safe:true},function (err,collection) {
            if(!err){
                console.log("连接数据表成功!");
                //插入数据
                var user = {
                    userName:'zaq',
                    sex:'男'
                };
                collection.insert(user,{safe:true},function (err,result) {
                    if (!err){
                        console.log("插入数据成功!");
                        console.log(result);
                    }
                });
                //删除数据
                // collection.remove({userName:'zaq'},{safe:true},function (err,result) {
                //     if (!err){
                //         console.log("删除数据成功!");
                //         console.log(result.result);
                //     }
                // });

                //更新数据库
                collection.update({userName:'zaq'},{$set:{userName:'zhouaoqi'}},function (err,result) {
                   if (!err){
                       console.log("更改数据库成功!");
                       console.log(result.result);
                   }
                });

                //查询数据集合
                collection.find().toArray(function (errFind,cols) {
                    if(!err){
                        console.log("查询到数据表!");
                        console.log(JSON.stringify(cols));
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