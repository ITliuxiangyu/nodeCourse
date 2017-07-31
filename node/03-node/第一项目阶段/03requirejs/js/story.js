
define(['../node_modules/jquery/dist/jquery','People','text!temp/home.html',
'css!style/main'],
    function($,People,homeTpl) {
    var p1 = new People('川普');
    var p2 = new People('希拉里');

    p1.say('我是总统');

    console.log($)
    console.log(homeTpl)
        jQuery('body').html(homeTpl)
});
