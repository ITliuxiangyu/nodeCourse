define(['backbone'],function(Backbone){

    'use strict';

    // Todo Model
    // ----------

    // Our basic **Todo** model has `title`, `order`, and `completed` attributes.
    var Good = Backbone.Model.extend({
        defaults: {
            carousel:[
                {picUrl:'imgs/pangxie.png'},
                {picUrl:'imgs/pangxie.png'},
                {picUrl:'imgs/pangxie.png'}
            ],
            name:'琥珀核桃仁',
            title:'健脑 降低胆固醇 益寿美容',
            price:'38',
            srcPrice:'88',
            freight:6,
            sales:1000,
            "store":100,
            "picUrl":"imgs/cuoural.png",
            size:1,
            isSellout:false,
            unit:'件',
            info: {
                detail: '详情',
                params: '参数',
                detailInfo: '评价',
            }
        },
        url:'api/good-<%=id%>.json',

    });
    var good = new Good();
    return Good;
})