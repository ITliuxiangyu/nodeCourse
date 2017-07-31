/**
 * Created by qingyun on 16/12/8.
 */
/**
 *
 * 路由意思:
 * 简单理解就是:一个url对应一个app状态
 * /#home --对应首页
 * /#person --对应个人中心。
 *
 * web应用程序通常需要为应用的重要位置提供可链接，可收藏，可分享的 URLs。 直到最近， 猫点（hash）片段（#page）可以被用来提供这种链接， 同时随着 History API 的到来，猫点已经可以用于处理标准 URLs （/page）。 Backbone.Router 为客户端路由提供了许多方法，并能连接到指定的动作（actions）和事件（events）。
 * 对于不支持 History API 的旧浏览器，路由提供了优雅的回调函数并可以透明的进行 URL 片段的转换。
 * */

//定义一个路由
var ShopRouter = Backbone.Router.extend({

    routes: {

        "home": "home",    // #help
        "person": "person"
    },

    initialize:function(){
        this.appView = new AppView();
        this.appView.render();
        this.viewContainer = this.appView.$el.find('#app');
        $('body').append(this.appView.el);
    },


    home: function () {
       var homeView = new HomeView();
        homeView.render();
        this.viewContainer.append(homeView.$el);
    },

    person: function (query, page) {
        var homeView = new PersonView();
        homeView.render();
        console.log('person view')
        this.viewContainer.html(homeView.$el);
    }



});


var shopRouter = new  ShopRouter();

Backbone.history.start();