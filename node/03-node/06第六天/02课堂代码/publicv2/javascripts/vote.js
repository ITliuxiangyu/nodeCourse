(function(window){
    var data;
    /**
     * 获取投票信息
     * fn:当获取数据成功后,执行的回调。
     * */
    function getData(fn)
    {
        $.ajax({
            //请求的值地址。
            url: '/vote/getAll',
            //设置参数
            // data:{},
            //设置请求类型
            type: 'post',
            //告诉jquery返回的数据类型是json
            dataType: 'json',
            //成功的时候调用
            success: function (res) {
                console.log(res);
                fn(res);
                //window.data = res;
            }
        })
    }

    function generateHtml(items){
        var templateStr,
            templateArr = [];
        //定义一个模板,{}里面是变量
        var template = `<li class="d1 vote-item">
            <img src="../images/01.jpg">
            <span class="span1">{name}</span>
            </li>`;
        $.each(items,function(i,item){
            var str = template.replace(/\{(.*?)\}/,function(machtedAll,m1){
                var d = item[m1];
                return d;
            })
            templateArr.push(str);
            console.log(str);
        })

        templateStr = templateArr.join('');
        //console.log(templateStr)
        //$('.vote-items').replaceWith($(templateStr))
    }

    $(function(){
        getData(function(items){
            generateHtml(items);
        });

    })

    window.data = data;
}(window))