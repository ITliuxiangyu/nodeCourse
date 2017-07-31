define(['backbone', 'models/good','models/carousel'], function (Backbone, Good,Carousel) {

    'use strict';

    // Todo Model
    // ----------

    // Our basic **Todo** model has `title`, `order`, and `completed` attributes.
    var Goods =  Backbone.Collection.extend({
        parse: function(attrs,options){
            this.raw = attrs;
            return attrs.result.items;
        },
        url:'api/goods.json'
    });

    var goods = new Goods();
    return goods;
})