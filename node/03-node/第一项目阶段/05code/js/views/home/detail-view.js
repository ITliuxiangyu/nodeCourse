define(['backbone','views/WrapedView', 'models/goodDetail',
    'text!template/home/detail.html','text!template/home/comments.html',
    'routers/router','require',
    'widget/carousel/view', 'css!style/detail'],
    function (Backbone,WrapedView, goodDetail, goodTpl, commentsTpl,router, require,  CarouselView) {
        'use strict';

        // The Application
        // ---------------

        // Our overall **AppView** is the top-level piece of UI.
        var view = WrapedView.extend({

            // Instead of generating a new element, bind to the existing skeleton of
            // the App already present in the HTML.



            template: _.template(goodTpl),

            // Delegated events for creating new items, and clearing completed ones.
            events: {
                'click .bar': 'setShowType',
                'click .size': 'showIncrement',
                'click .shadow': 'showIncrement',
                'click .back': 'back',
            },

            initialize: function (id,type) {
                this.model = new goodDetail();
                this.id = id;
                this.showType = type;
                this.$tpl = $(this.template(this.model.toJSON()));
                this.$carousel = this.$tpl.find('.Carousel');
                this.$infoContainer = this.$tpl.find('.infoContainer');
                this.model.url = _.template(this.model.url)({id: id});
                this.listenTo(this.model, 'sync', this.change);
                this.model.fetch(function () {
                    console.log('fff')
                });

            },

            // Re-rendering the App just means refreshing the statistics -- the rest
            // of the app doesn't change.
            render: function () {

                this.$el.html(this.$tpl);
                return this;
            },
            setShowType:function (e) {
                //var type = $(e.currentTarget).data('type');
                var type = $(e.currentTarget).find('a').data('type');
                this.showType = type;
                router = require('routers/router');
                router.gotoDetail(this.id,type);
                return false;
                
            },
            renderInfo:function(){

                this.$infoContainer = this.$tpl.find('.infoContainer');
                if(this.showType=='detail'){
                    this.$infoContainer.html(this.json.info.detail);
                }else if(this.showType=='params'){
                    this.$infoContainer.html(this.json.info.params);
                }else{
                    this.renderComments();
                }

            },
            renderComments:function(){

                this.$commentsTpl = _.template(commentsTpl)({comments:this.json&&this.json.info.comments});
                this.$infoContainer.html(this.$commentsTpl);
            },
            change: function (good) {

                this.good = good||this.good;

                var json = this.model.toJSON();
                this.json = json;
                this.$tpl = $(this.template(json));
                this.$carousel = this.$tpl.find('.Carousel');


                this.renderInfo();
                if (!this.isInitCarousel) {
                    var carouselView = new CarouselView(this.good.attributes.carousel);
                    this.$carousel.html(carouselView.render().el);
                }
                this.render();

            },

            showIncrement:function(){
                this.good.set({size:1})
                $('.increment-dialog').toggle();
            },
            back:function(){
                router = require('routers/router');
                router.navigate('home',{trigger: true,replace: true});
            }


        });

        return view;
    })
