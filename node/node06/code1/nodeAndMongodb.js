var mongodb = require('mongodb');
// 设置数据库信息, 连接数据库
// 第一个参数: 主机
// 第二个参数: 端口号
// 第三个参数: auto_reconnect 自动连接
var mongoServer = new mongodb.Server('localhost', 27017, {auto_reconnect: true});

// 创建数据库对象
// safe: 是否使用线程安全 (当多个线程同时访问数据库时会有线程安全问题)
var db = new mongodb.Db('stu', mongoServer, {safe: true});

// 打开数据库
db.open(function (err, db) {

    if (err) return console.log("连接数据库失败!!!");

    console.log("连接数据库成功!!!");

    // 第一个参数: 集合名称
    // 第二个参数: 线程安全
    // 第三个参数: 回调
    db.collection('col', {safe: true}, function (err, collection) {
        if (err) return console.log("连接数据表失败!!!");

        console.log("连接数据表成功!!!");


        // 插入数据
        var stu1 = {name: "王三狗", age: 23, gender: "男"};
        var stu2 = {name: "王四狗", age: 24, gender: "男"};
        // 插入一条数据
        // collection.insertOne(stu1, {safe: true}, function (err, result) {
        //     if (!err) {
        //         console.log("插入数据成功!!!");
        //         // 关闭数据库
        //
        //     }
               // db.close();
        // });

        // 插入多条数据
        /*
        collection.insertMany([stu1, stu2], {safe: true}, function (err, result) {
                if (!err) {
                    console.log("插入多条数据成功!!!");

                    // 关闭数据库

                }
                // db.close();
        });
        */
        // 删除数据
        /*
        collection.removeOne({name: "王三狗"}, {safe: true}, function (err, result) {
            if (!err) {
                console.log("删除成功!!!");
                // console.log(result);

            }
            // db.close();
        });
        */
        // 删除多条数据
        /*
        collection.removeMany({$or: [{name: "王二狗"}, {name: "王四狗"}]}, {safe: true}, function (err, result) {
           //  console.log(err);
           if (!err) {
                console.log("删除多条数据成功!!!");
               // 关闭数据库

           }
          // db.close();
        });
        */

        // 修改

        // collection.updateOne({age: {$lt: 33}}, {$set: {name: "小刚"}}, function (err, result) {
        //     if (!err) {
        //         console.log("修改成功!!!");
        //
        //     }
                // db.close();
        // });

        /*
        collection.updateMany({age: {$lt: 33}}, {$set: {name: "小刚"}}, function (err, result) {
            console.log(err);
            if (!err) {
                console.log("修改成功!!!");

            }
            db.close();
        });
        */

        // 如果没有就插入一条新数据
        /*
        collection.updateOne({name: "小王"}, {$set: {age: 20, gender: "男"}}, {upsert: true, safe: true}, function (err, result) {
            if (!err) {
                console.log("更新成功!!!");
            }
            db.close();
        })
        */

        // 查询数据
        // 集合中的所有数据
        /*
        collection.find().toArray(function (err, cols) {

            if (!err) {
                console.log(cols);

            } else {
                console.log("查询失败!!!");

            }
            db.close();

        });
        */

        /*
        collection.find({name: "小王"}).toArray(function (err, cols) {
           if (!err) {
               // cols是一个数组
               console.log(cols);
               db.close();
           }
        });
        */

        collection.findOne({name: "小刚"}, function (err, document) {
            if (!err) {
                console.log(document);
                // 操作完毕, 必须关闭数据库
                db.close();
            }
        });





        
    });

});