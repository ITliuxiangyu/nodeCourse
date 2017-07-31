define(['backbone'],function(Backbone){

    'use strict';

    var Good = Backbone.Model.extend({
        defaults: {
            picUrl: 'imgs/join1.png',
            name:'琥珀核桃仁',
            title:'健脑 降低胆固醇 益寿美容',
            price:100,
            size:1
        }
    });
    var good = new Good();
    return good;
})