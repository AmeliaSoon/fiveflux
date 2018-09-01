var gulp = require('gulp');
var sass = require('gulp-sass') ;
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('sass',function(){
	gulp.src('src/*.scss').pipe(sass()).pipe(rename({'surfix' : '.min'})).pipe(gulp.dest('css'));
})

gulp.task('default',function(){
	gulp.watch(['src/*.scss'],['sass']);
})

var connect = require('gulp-connect');

gulp.task('server', function(){
	/*
		让文件发生改变以后，自动更新
		并且页面上自动更新

	 */
	connect.server({
		root: 'css', //设置根目录
		port: 8888,
		livereload: true //实时刷新
	})
})


