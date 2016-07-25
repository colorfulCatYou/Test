//1引用gulp
//gulp gulp-imagemin gulp-htmlmin gulp-cssnano gulp-uglify gulp-concat 都需要下载
var gulp=require('gulp');
var imagemin=require('gulp-imagemin');
var htmlmin=require('gulp-htmlmin');
var cssnano=require('gulp-cssnano');
// var concat=require('gulp-concat');
var uglify=require('gulp-uglify')
//task设置任务，后面是任务名称和方法
//如果gulp.task默认名字是default 在命令行中输入gulp会直接找到default
// gulp.task('default',function () {
//     gulp.src(['./computer/images/*.png','./computer/images/*.jpg'])
//     //4pipe管道 相当于承前启后的作用 将前面的数据输送到后面
//         .pipe(imagemin())
//         //5gulp.dest将文件保存
//         .pipe(gulp.dest('./dist/images'));
// });
//
// gulp.task('myGulp',function () {
//     console.log('这是gulp');
// });

//2图片压缩
gulp.task('imagemin',function () {
    //3数据源头
    gulp.src(['./computer/images/*.png','./computer/images/*.jpg'])
        //4pipe管道 相当于承前启后的作用 将前面的数据输送到后面
        .pipe(imagemin())
        //5gulp.dest将文件保存
        .pipe(gulp.dest('./dist/images'));
});
//html压缩
gulp.task('htmlmin', function() {
    return gulp.src('./computer/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,//去掉空格
            minifyJS:true,  //压缩js
            removeComments:true//去掉注释
        }))
        .pipe(gulp.dest('dist'));
});
//css压缩
gulp.task('cssnano',function () {
    gulp.src('./computer/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'));
});
// js合并
//这里不能做到完全自动，需要手动添加js文件引用
// gulp.task('concat',function () {
//     gulp.src('./computer/js/*.js')
//         //全部合起来的js名称
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist/js'));
// });
//缩短js
gulp.task('uglify',function () {
    gulp.src('./computer/js/*.js')
    //全部合起来的js名称
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
})