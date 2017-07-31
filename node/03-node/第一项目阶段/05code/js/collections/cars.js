define(['backbone', 'models/car','models/carousel','css!style/setting'],
    function (Backbone, Good,Carousel) {

    'use strict';

    // Todo Model
    // ----------

    // Our basic **Todo** model has `title`, `order`, and `completed` attributes.
    var Goods =  Backbone.Collection.extend({
       /* parse: function(attrs,options){
            this.raw = attrs;
            return attrs.result.items;
        },*/
        url:'api/cars.json'
    });

    var goods = new Goods();
    return goods;
})