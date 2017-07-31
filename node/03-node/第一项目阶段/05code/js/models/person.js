define(['backbone'],function(Backbone){

    'use strict';

    var Good = Backbone.Model.extend({
        defaults: {
            avatar: 'imgs/person.png',
            name:'琥珀核桃仁',
            address:'健脑 降低胆固醇 益寿美容',
            integral:3000
        }
    });
    var good = new Good();
    return good;
})