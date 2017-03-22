var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var concat = require('gulp-concat');
var svgmin = require('gulp-svgmin');
var run = require('run-sequence');

gulp.task("style", function() {
    return gulp.src("source/less/template_styles.less")
            .pipe(plumber())
            .pipe(less())
            .pipe(postcss([
                autoprefixer({browsers: [
                    "last 2 versions"
                ]})
            ]))
            .pipe(gulp.dest("css"))
});

gulp.task('concat-js', function() {
    return gulp.src([
                'source/js/jquery.js',
                'source/js/**/*!(jquery).js'
            ])
            .pipe(concat('libs.js'))
            .pipe(gulp.dest('js/libs/'));
});


gulp.task('concat-css', function() {
    return gulp.src('source/css/**/*.css')
            .pipe(concat('libs.css'))
            .pipe(gulp.dest('css/libs/'));
});

gulp.task('svg', function () {
    return gulp.src('source/svg/**/*.svg')
            .pipe(svgmin().on('error', function (err) {
                console.log(err);
                this.emit('end');
            }))
            .pipe(gulp.dest('images/svg'));
});

gulp.task("watch", function(){
    gulp.watch([
        "source/css/**/*.css",
        "source/less/**/*.less",
        "js/**/*.js",
        "source/js/**/*.js",
        "templates/*.html"
    ], ['build'])
});


gulp.task('build', function(callback){
    run('style',
        'concat-js',
        'concat-css',
        'svg',
        callback
    );
});

