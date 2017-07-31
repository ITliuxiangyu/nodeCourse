define(['backbone', 'collections/goods', 'views/home/good-view', 'widget/carousel/view',
        'routers/router',
        'text!template/home.html', 'require','css!style/home'],
    function (Backbone, goods, GoodView, CarouselView, router, HomeTpl, require) {
        'use strict';

        // The Application
        // ---------------

        // Our overall **AppView** is the top-level piece of UI.
        var view = Backbone.View.extend({

            // Instead of generating a new element, bind to the existing skeleton of
            // the App already present in the HTML.

            template: _.template($(HomeTpl).prop('outerHTML')),

            // Delegated events for creating new items, and clearing completed ones.
            events: {
                'click .good': 'showDetail',
            },

            // At initialization we bind to the relevant events on the `Todos`
            // collection, when items are added or changed. Kick things off by
            // loading any preexisting todos that might be saved in *localStorage*.
            initialize: function () {
                this.$tpl = $(this.template());
                this.$view = this.$tpl.find('.goodsContainer');
                this.$carousel = this.$tpl.find('.Carousel');
                this.listenTo(goods, 'reset', this.addAll);
                this.listenTo(goods, 'add', this.addAll);
                goods.fetch({reset: true});
            },

            showDetail: function (e) {
                var id = $(e.currentTarget).data('id')
                router = require('routers/router');
                router.gotoDetail(id);
            },
            // Re-rendering the App just means refreshing the statistics -- the rest
            // of the app doesn't change.
            render: function () {
                this.$el.html(this.$tpl)

                return this;
            },

            // Add a single todo item to the list by creating a view for it, and
            // appending its element to the `<ul>`.
            addOne: function (good) {
                if (!this.isInitCarousel) {
                    var carouselView = new CarouselView(goods.raw.result.carousel);
                    this.$carousel.html(carouselView.render().el);
                }
                var view = new GoodView({model: good});
                this.$view.append(view.render().el);
                this.isInitCarousel = true;
            },

            // Add all items in the **Todos** collection at once.
            addAll: function () {
                this.$view.html('');
                goods.each(this.addOne, this);
            }

        });

        return view;
    })
