define(['backbone','collections/joins','text!template/join.html'],function (Backbone,joins,HomeTpl) {
    'use strict';

    // The Application
    // ---------------

    // Our overall **AppView** is the top-level piece of UI.
    var view = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.

        template:_.template(HomeTpl),

        // Delegated events for creating new items, and clearing completed ones.
        events: {
           
        },

        // At initialization we bind to the relevant events on the `Todos`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting todos that might be saved in *localStorage*.
        initialize: function () {
            this.listenTo(joins, 'reset', this.addAll);
            joins.fetch({reset: true});
        },

        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function () {
            this.$el.html(this.template({joins:joins.toJSON()}))
            return this;
        },

        addOne: function (good) {

        },

        // Add all items in the **Todos** collection at once.
        addAll: function () {
            this.render();
        }


    });

    return view;
})
