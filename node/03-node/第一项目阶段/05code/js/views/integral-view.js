define(['backbone',  './home-view','text!template/integral.html'],
    function (Backbone, HomeView,tpl) {
        'use strict';

        // The Application
        // ---------------

        // Our overall **AppView** is the top-level piece of UI.
        var view = HomeView.extend({

            // Instead of generating a new element, bind to the existing skeleton of
            // the App already present in the HTML.

            template: _.template($(tpl).prop('outerHTML')),


        });

        return view;
    })
