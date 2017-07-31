var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send("欢迎来到小狗之家!!!");
});
router.get('/leg', function (req, res) {
    res.send("喜欢哪条拿去!!!");
});
router.get('/shit', function (req, res) {
    res.send("喜欢闻哪摊, 拿去!!!");
});
module.exports = router;