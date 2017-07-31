//依赖router文件,reset.css文件。
define(['routers/router', 'css!style/reset'], function (router) {
    console.log('run..');
    console.log(router);
    // console.log($("body").eq(0));
    $(".app").on('click', '[data-href]', function (e) {
        console.log("body点解时间");
        var href = $(e.currentTarget).data('href');
        router.navigate(href, {trigger: true, replace: true})
    });
    //
    // $(".app").click(function () {
    //     console.log("jklasd");
    // });

    // document.getElementsByTagName("body").onclick = function () {
    //     console.log("jlasd");
    // }
})