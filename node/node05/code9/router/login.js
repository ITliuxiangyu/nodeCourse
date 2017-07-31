var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
   res.render("index", {name: "小明", age: 18, gender: "男", tag: "<span>我是span标签</span>"});
});

module.exports = router;