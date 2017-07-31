define(['backbone'],
    function (Backbone) {
        'use strict';

        // The Application
        // ---------------

        // Our overall **AppView** is the top-level piece of UI.
        var view = Backbone.View.extend({

            events: {
                'click .back': 'back',
            },
            back:function(){
                history.back();
            }

        });

        return view;
    })
