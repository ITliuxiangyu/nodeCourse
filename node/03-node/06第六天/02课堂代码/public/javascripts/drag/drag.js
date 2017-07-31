/*
定义一个jquery插件。


* **/
$.fn.drag = function(){
    $(this).mousedown(function(){
        console.log('down..')
        $(this).css({left:'0',top:'0'});
        $(this).mousemove(function(e){

            //拿到原生的事件对象。
            var x= e.originalEvent.movementX;
            var y = e.originalEvent.movementY;
            var top = parseInt($(this).css('top'));
            var left = parseInt($(this).css('left'));
            console.log(`move:${x},Y:${y}`)
            $(this).css({position:'relative',top:top+y,left:left+x});
        });
        $(this).mouseup(function(){
            console.log('up..')
            $(this).off('mousemove');
        })
    })
}
