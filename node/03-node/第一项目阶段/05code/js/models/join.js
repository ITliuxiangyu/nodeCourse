define(['backbone'],function(Backbone){

    'use strict';

    var Good = Backbone.Model.extend({
        defaults: {
            picUrl: 'imgs/join1.png',
            name:'琥珀核桃仁',
            address:'健脑 降低胆固醇 益寿美容',
            phone:'037145454'
        }
    });
    var good = new Good();
    return good;
})