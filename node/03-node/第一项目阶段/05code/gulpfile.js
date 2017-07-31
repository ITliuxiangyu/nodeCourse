var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {

    //src(小图片的路径)
    var spriteData = gulp.src('imgs/icon/*.png').pipe(spritesmith({
        //生成的css,img名字
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }))
    console.log('sprite...')
    //生成的雪碧图路径
    return spriteData.pipe(gulp.dest('./dist/imgs/'));
});

