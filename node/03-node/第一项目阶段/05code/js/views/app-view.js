define(['backbone','text!template/app.html',
        'routers/router','require',
    'css!style/base',
    'css!style/app','css!style/sprite',],
    function (Backbone,AppTpl,router,require) {
    'use strict';

    // The Application
    // ---------------

    // Our overall **AppView** is the top-level piece of UI.
    return Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.

        // Our template for the line of statistics at the bottom of the app.
        //statsTemplate: _.template($('#stats-template').html()),
        template:_.template(AppTpl),
        
        events: {
            'click ':'navHandler'
        },

        // At initialization we bind to the relevant events on the `Todos`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting todos that might be saved in *localStorage*.
        initialize: function () {

            this.el = $(this.template());
        },


        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function () {
            $('.app').append (this.el);
        },

        // Add a single todo item to the list by creating a view for it, and
        // appending its element to the `<ul>`.
        setView: function (view,isFull) {
            if(true){
                $('.app').html(view.render().el)
            }else {
                var containerView = $(this.el).eq(0);
                containerView.html('');
                containerView.append(view.render().el);
            }
        },
        navHandler:function(e){
            router = require('routers/router');
            var href = $(e.currentTarget).data('href');

            router.navigate('href',{trigger: true,replace: true})
        }

    });
});
