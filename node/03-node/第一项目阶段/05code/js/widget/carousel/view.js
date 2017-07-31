define(['backbone', 'carousel', 'text!./tpl.html', 'css!style/home','css!carouselCss','css!carouselThemeCss','css!./css.css'],
    function (Backbone, carousel, Tpl) {
    'use strict';

    // The Application
    // ---------------

    var Item = Backbone.Model.extend({
        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            picUrl: 'imgs/pangxie.png',
            name: '琥珀核桃仁',
            title: '健脑 降低胆固醇 益寿美容',
            price: '38',
            isSellout: false,
            unit: '件'
        }
    });

    var Items = Backbone.Collection.extend({
        model: Item,

    });

    // Our overall **AppView** is the top-level piece of UI.
    var view = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.

        template: _.template(Tpl),

        // Delegated events for creating new items, and clearing completed ones.
        events: {
            'keypress .new-todo': 'createOnEnter',
            'click .clear-completed': 'clearCompleted',
            'click .toggle-all': 'toggleAllComplete'
        },

        // At initialization we bind to the relevant events on the `Todos`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting todos that might be saved in *localStorage*.
        initialize: function (data) {
            this.data = data;
            this.setElement(_.template(Tpl)({items:this.data}));
            $(this.$el).slick({
                /*slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots: true,
                centerMode: true,
                focusOnSelect: true*/
                autoplay:true,
                autoplaySpeed:3000,
                dots: true,
                mobileFirst:true,
                arrows:false
            });
            return this;
        },

        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function () {
            //this.$el.html(this.template())
            return this;
        }
    });

    return view;
})
