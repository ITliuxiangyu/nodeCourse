define(['backbone'],function(Backbone){

    'use strict';

    // Todo Model
    // ----------

    // Our basic **Todo** model has `title`, `order`, and `completed` attributes.
    var Good = Backbone.Model.extend({
        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            picUrl: 'imgs/pangxie.png',
            name:'琥珀核桃仁',
            title:'健脑 降低胆固醇 益寿美容',
            price:'38',
            isSellout:false,
            unit:'件'
        },

        // Toggle the `completed` state of this todo item.
        toggle: function () {
            this.save({
                completed: !this.get('completed')
            });
        }
    });
    var good = new Good();
    return good;
})