var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


/*
接口列表:
注册接口
    /users/reg
    请求参数:
    username:用户名(不能重复,包含字母数字),
    emial:邮箱(邮箱地址)
    pwd:密码 (6-16个字符)

    返回参数:
    {msg:'请求成功'|'请求失败'
        code:1 --用户名重复
              2--密码太简单
              3 --其他错误
              4---成功
              5---邮箱已存在
              6---不是正确的邮箱

    }
注册接口


 */

router.post('/reg', function (req, res, next) {

    var user = req.body;
    //.json(obj) 把obj转为json字符串传给客户端。
    var db = require('mongoskin').db('mongodb://localhost:27017/animals');

    db.bind('users');
    //_id这个字段默认是主键。不重复的
    user._id = user.username;

    //新添用户
    db.users.insert(user, function (err) {
        if (err) {
            res.json({msg: '注册失败'});
            console.log('inser error', err);
        } else {
            res.json({msg: '注册成功'});
        }
    });
    /*db.collection('users').find().toArray(function(err, result) {
     if (err) throw err;
     console.log(result);
     });*/

   // res.json({msg: '注册成功'});
});



router.post('/login', function (req, res, next) {

    var user = req.body;
    //.json(obj) 把obj转为json字符串传给客户端。
    var db = require('mongoskin').db('mongodb://localhost:27017/animals');

    db.bind('users');

    //查找数据库中是否存在次用户
    db.users.findOne(user, function (err,found_user) {
        if (found_user) {
            res.json({msg: '登录成功'});
            console.log('inser error', err);
        } else {
            res.json({msg: '登录失败'});
        }
    });

});

module.exports = router;
