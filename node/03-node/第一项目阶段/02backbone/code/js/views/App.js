var tpl = $('#app-tpl').html();
var AppView = Backbone.View.extend({

    tagName: "li",

    className: "document-row",

    template: _.template(tpl),
    events: {
        //
        "click": "open"

    },


    initialize: function () {
        console.log('初始化');

    },


    /*
     *把html显示到页面就叫渲染。
     *
     * **/
    render: function () {

        //判断这个视图是否触发过change事件。

        //编译过得模板字符串。
        var compiledTpl = this.template();
        //this.el代表当前视图对应的dom元素。
        $(this.el).html(compiledTpl);


    }

});
