var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;

/* GET users listing. */
/*router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});*/


router.get(/.*/, function (req, res, next) {

    var studentList = req.body;
    var dbName = studentList.db;
    dbName = dbName||'man';

    var id = req.url.slice(1);
    console.log(req.url);
    console.log('id:'+id);
    mongoClient.connect('mongodb://localhost:27017/'+dbName, function (err, db) {
        var students = db.collection('man');

        students.find({id:+id}).toArray(function (err, doc) {
            console.log(doc);
            res.json(doc[0]);

        })

    })
})

router.put(/.*/, function (req, res, next) {

    var studentList = req.body;
    var dbName = studentList.db;
    dbName = dbName||'man';

    var id = req.url.slice(1);
    console.log(req.url);
    console.log('请求参数:'+ JSON.stringify(req.body))
    console.log('id:'+id);
    //请求参数
    var data = req.body;
    mongoClient.connect('mongodb://localhost:27017/'+dbName, function (err, db) {
        var students = db.collection('man');

        students.update({id:+id},{$set:data }).toArray(function (err) {
            if(err) {
                return console.log('update error', err);
            }else{
                res.json({msg:'成功更新'});
            }
        })

    })
})

router.delete(/.*/, function (req, res, next) {

    var studentList = req.body;
    var dbName = studentList.db;
    dbName = dbName||'man';

    var id = req.url.slice(1);
    console.log(req.url);
    console.log('请求参数:'+ JSON.stringify(req.body))
    console.log('id:'+id);
    //请求参数
    var data = req.body;
    mongoClient.connect('mongodb://localhost:27017/'+dbName, function (err, db) {
        var students = db.collection('man');

        students.remove({id:+id},function(err) {
            if (err) {
                return console.log('remove error:', err);
            }else{
                res.json({msg:"删除成功"})
            }
        });

    })
})


/*router.all('/isVote', function (req, res, next) {
    var studentList = req.body;
    var dbName = studentList.db;
    dbName = dbName||'man';
    console.log(req.body)
    mongoClient.connect('mongodb://localhost:27017/'+dbName, function (err, db) {
        var students = db.collection('students');
        var records = db.collection('records');

        var openid = studentList.openid;
        var now = Date.now();
        console.log('isVote接口:参数:'+openid)

        var isNotSameDay = false;
        records.find({openid: openid}).toArray(function (err, doc) {

            if (doc.length) {
                var stamp = doc[0].stamp;
                var day = (new Date()).getDate();
                var lastDate = new Date(stamp);
                var lastDay = lastDate.getDate();
                var elapse = now - +stamp;


                if (elapse > 24 * 60 * 60 * 1000 || lastDay != day) {
                    isNotSameDay = true;
                }
                console.log([elapse, lastDay, day, isNotSameDay]);

            }
            if (!doc.length || isNotSameDay) {
                res.json({msg: '未投票', code: 2})

                //第一次或者隔天投票
            }else{
                res.json({msg: '已投票', code: 1})

            }
        })
    })

})

router.all('/add', function (req, res, next) {
    var student = req.body;
    var dbName = student.db;
    dbName = dbName||'voteDB';
    var db = require('mongoskin').db('mongodb://localhost:27017/'+dbName);

    delete student.db;
    db.bind('studentList');
    db.studentList.insert(student, function(err) {
        if (err) {
            res.json({msg:'添加失败',code:1})
        }else{
            res.json({msg:'添加成功',code:0})
        }
    });
});

router.all('/remove', function (req, res, next) {
    var student = req.body;
    var dbName = student.db;
    dbName = dbName||'voteDB';
    var db = require('mongoskin').db('mongodb://localhost:27017/'+dbName);

    db.user.remove({_id: student.id}, function(err) {
        if(err) {
            res.json({msg:'删除失败',code:0})
        }else{
            res.json({msg:'删除成功',info:student,code:1})
        }
    });
});

router.all('/getAll', function (req, res, next) {
    /!*var student = req.body;
    var dbName = student.db;
    dbName = dbName||'voteDB';
    var db = require('mongoskin').db('mongodb://localhost:27017/'+dbName);

    db.bind('studentList');
    db.studentList.find().toArray(function (err, items) {
        res.json(items);
    });*!/
    var student = [
        {id:0,name:'张占峰'},
        {id:1,name:'李明扬'},
        {id:2,name:'范晓东'},
        {id:3,name:'魏坤鹏'},
        {id:4,name:'武国庆'},
    ]
    res.json(student);
});
router.all('/result', function (req, res, next) {
    var studentList = req.body;
    var dbName = studentList.db;
    dbName = dbName||'voteDB';

    var db = require('mongoskin').db('mongodb://localhost:27017/'+dbName);

    var data = req.body;
    //绑定到user,然后对他进行操作。
    db.bind('students');

    //往votes集合添加info
    //foundData:是查询的结果。如果查到就有值,如果没查到就是null。

    db.students.find().toArray(function (err, items) {
        res.json(items);
    });

})*/
module.exports = router;
