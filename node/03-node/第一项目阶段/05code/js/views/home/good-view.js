define(['backbone',  'text!template/home/good.html', 'css!style/home'], function (Backbone, goodTpl) {
    'use strict';

    // The Application
    // ---------------

    // Our overall **AppView** is the top-level piece of UI.
    var view = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.

        template: _.template(goodTpl),

        // Delegated events for creating new items, and clearing completed ones.
        events: {

        },

        initialize: function () {

        },

        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function () {
            this.setElement($(this.template(this.model.toJSON())));
            return this;
        }



    });

    return view;
})
