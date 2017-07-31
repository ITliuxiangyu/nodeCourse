var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/', function (req, res, next) {

    var studentList = req.body;
    var dbName = studentList.db;
    dbName = dbName||'voteDB';

    mongoClient.connect('mongodb://localhost:27017/'+dbName, function (err, db) {
        var students = db.collection('students');
        var records = db.collection('records');

        var openid = studentList.openid;
        var scores = (studentList.data);
        var now = Date.now();

        var isNotSameDay = false;
        console.log(studentList)
        console.log(scores)
        console.log('openid'+openid+ '投票');
        records.find({openid: openid}).toArray(function (err, doc) {

            if(doc.length){
                var stamp = doc[0].stamp;
                var day = (new Date()).getDate();
                var lastDate = new Date(stamp);
                var lastDay = lastDate.getDate();
                var elapse = now - +stamp;


                if(elapse > 24*60*60*1000|| lastDay != day ){
                    isNotSameDay = true;
                }
                console.log( [elapse,lastDay,day,isNotSameDay] );

            }
            if(!doc.length || isNotSameDay) {//第一次或者隔天投票
                !doc.length? records.insert({openid:openid, stamp:now}):records.updateOne({openid: openid}, {openid: openid,stamp:now});


                console.log(scores)
                scores= JSON.parse(scores);
                scores.forEach(function (student) {
                    students.find({id: student.id}).toArray(function (err, doc) {
                        if (!doc.length) {//not exist:insert
                            students.insert(student);
                        } else {//exist:update
                            doc[0].score += student.score;
                            students.updateOne({id: student.id}, doc[0]);
                        }

                    })
                })

                res.json({msg: '投票成功', code: 1});


            }else{
                res.json({msg: '请明天再来,投票失败', code: 2})
            }
        })

    })
})
router.all('/isVote', function (req, res, next) {
    var studentList = req.body;
    var dbName = studentList.db;
    dbName = dbName||'voteDB';
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
    /*var student = req.body;
    var dbName = student.db;
    dbName = dbName||'voteDB';
    var db = require('mongoskin').db('mongodb://localhost:27017/'+dbName);

    db.bind('studentList');
    db.studentList.find().toArray(function (err, items) {
        res.json(items);
    });*/
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

})
module.exports = router;
