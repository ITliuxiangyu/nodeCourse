/**
 视图的定义:页面上看到的一部分直观的内容。
 需要通过model数据和模板混合生成。
 Backbone.View是backbone的内置对象,上面有很多字段。
 每个字段代表不同含义。

 Backbone.View

 el:所有的视图都拥有一个 DOM 元素.视图对应的dom元素
 events:他是一个hash值(键值对)。视图根据它里面的内容进行事件绑定。
 events: {
        //这个视图上面的点击事件绑定open方法。
        "click":"open",
        "click .button.edit":   "openEditDialog",
        "click .button.delete": "destroy"
    }
 initialize:如果视图定义了一个initialize初始化函数， 首先创建视图时，它会立刻被调,new 视图的时候,系统自动调用。
 *
 *
 *
 *
 var p = new PersonView();
 //1.申请一个内存空间--{}
 2.把this指向这个空间 =this={}
 3.调用构造函数体,对这个this进行初始化。 this.name = this.age=
 4.返回这个this。

 * */



//定义一个视图


//拿到模板字符串
var tpl = $('#person-tpl').html();
var PersonView = Backbone.View.extend({

    tagName: "li",

    className: "asdfg",

    template: _.template(tpl),
    events: {
        //
        "click": "open",
        "click img": "imgHandler",
        "click .button.delete": "destroy"
    },

    open: function () {
        console.log('打开。。。');
    },
    imgHandler: function () {
        console.log('你点击头像了。。。');
    },
    initialize: function () {
        console.log('初始化');

        this.model.fetch();
        //监听model的change事件,然后调用渲染。
        this.listenTo(this.model, "change", this.render);
    },

    model: new PersonModel(),


    /*
     *把html显示到页面就叫渲染。
     *
     * **/
    render: function () {

        //判断这个视图是否触发过change事件。
        if(this.model.hasChanged()) {
            //编译过得模板字符串。
            var compiledTpl = this.template(this.model.toJSON());
            //this.el代表当前视图对应的dom元素。
            $(this.el).html(compiledTpl);
        }

    }

});
