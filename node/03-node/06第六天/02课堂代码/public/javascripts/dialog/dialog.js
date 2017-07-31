(function () {
    function Dialog(msg) {
        this.msg = msg;
        ++counter
    }

    var counter = 0;
    /***
     * 静态方法:
     * 就是不用实例化,直接通过类.method 就能访问的方法。
     * 实例方法:
     *  通过new实例化出来的对象上面可以调用的方法就是实例方法。
     */
    Dialog.getCount = function () {
        return counter;
    };
    Dialog.prototype = {
        open: function () {
            $('body').append($('<div class="dialog">' + this.msg + '</div>'));
        },
        close: function () {
            $('.dialog').remove();
        }
    }

    /**
     定义一个jquery插件。作为jquery的静态方法。
     * */
    $.dialog = function (msg) {
        var dialog = new Dialog(msg);
        dialog.open();
    }
}())
