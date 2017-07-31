/*global Backbone */

/**
 define:两个参数。
 第一个参数:依赖文件的列表
 第二个参数:模块定义函数,这个函数的参数都是模块。
 *
 * */
define(['views/app-view','views/home-view','views/home/detail-view',
    'views/integral-view','views/join-view','views/setting-view'
,'views/home/car-view'],
    function(AppView,HomeView,DetailView,
             IntegralView,JoinView,SettingView,
             CarView){
    'use strict';

    // Todo Router
    // ----------
    var TodoRouter = Backbone.Router.extend({
        initialize:function(){
            this.appView = new AppView();
            this.runningObj = {};
            this.currentView =null;
            Backbone.history.start();
        },

        /**
         * 路由:
         *
         * */
        routes: {
            //'*app': 'app',
            "/": 'some',
            'home':'home',//----home意味着#home对应home 处理参数。
            'detail/:id(/*type)':'detail',
            'integral':'integral',
            'join':'join',
            'setting':'setting',
            'car':'car'

        },
        some:function(){
          console.log('some')
        },
        processAll:function(){
            console.log('all')
        },
        app: function (param) {
            
            var view = new AppView();
            view.render();
        },
        home:function(){


            var view = new HomeView();
            this.currentView = view;
            this.appView.setView(view);
            this.appView.render();
        },

        detail:function(id,type){

           // this.runningObj['detail'] =  new DetailView(id,type);
            var view = this.runningObj['detail'];
            //第一次渲染
            if(!view||this.currentView != view ) {

               setTimeout(function(){
                   this.trigger('route','detail',[id,type])
               }.bind(this),0)
                this.runningObj['detail'] =  new DetailView(id,type);
                view = this.runningObj['detail'];
                this.appView.setView(view,true);
               // this.appView.render();
                
            }else{
                this.currentView.renderInfo();
            }

            this.currentView = this.runningObj['detail'];
        },
        integral:function(){
            var view = new IntegralView();
            this.currentView = view;
            this.appView.setView(view);
            this.appView.render();
        },
        join:function(){
            var view = new JoinView();
            this.appView.setView(view);
            this.appView.render();
        },
        setting:function(){
            var view = new SettingView();
            this.appView.setView(view);
            this.appView.render();
        },

        car:function(){
            var view = new CarView();
            this.appView.setView(view);
            this.appView.render();
        },
        gotoDetail:function(id,type){
            var url = type? id+'/'+type: id;
            this.navigate("detail/" + url,{trigger: true,replace: true});
        }
    });


    //app.TodoRouter =
    var router = new TodoRouter();


        router.on("route", function(page,params) {
            //detail route
            if(params&&params[1]){
                page = params[1]
            }
            console.log(arguments)
            console.log(page)
            var navBar = $('[data-href*="'+page+'"]');
            $('[data-href]').removeClass('checked');
            navBar.addClass('checked');
            console.log('router')
        });
    return router
});
