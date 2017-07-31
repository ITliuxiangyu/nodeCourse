var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/reg',function(req, res, next){
  var db = require('mongoskin').db('mongodb://localhost:27017/animals');

  var user = req.body;
  //绑定到user,然后对他进行操作。
  db.bind('user');
  user._id = user.username;
  db.user.insert(user, function(err) {
    if (err) {
      res.json({msg:'注册失败'})
    }else{
      res.json({msg:'注册成功'})
    }

  });
})
module.exports = router;
