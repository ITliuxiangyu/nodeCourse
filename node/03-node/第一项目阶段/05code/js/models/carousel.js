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

        }

    });
    var good = new Good();
    return Good;
})