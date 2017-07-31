/**
 * Created by qingyun on 16/12/9.
 */
define([],
    function () {
        function People(name) {
            this.name = name;
        }
        People.prototype.say = function(word){
            console.log(this.name+'说:'+word)
        }

        return People;

    });