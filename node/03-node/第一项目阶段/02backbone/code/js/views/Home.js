/**


 * */



//定义一个视图


//拿到模板字符串
var tpl = $('#home-tpl').html();
var HomeView = Backbone.View.extend({

    tagName: "ul",

    className: "document-row",

    template: _.template(tpl),
    events: {
        //
        "click": "open",

    },


    initialize: function () {
        console.log('初始化');



    },

    data: {items:[{name:'川普'},{name:'希拉里'},{name:'克林顿'}]},


    /*
     *把html显示到页面就叫渲染。
     *
     * **/
    render: function () {

        //判断这个视图是否触发过change事件。

            //编译过得模板字符串。
            var compiledTpl = this.template(this.data);
            //this.el代表当前视图对应的dom元素。
            $(this.el).html(compiledTpl);


    }

});
