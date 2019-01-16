'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('./_include/scss/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('./_include/css'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: './'
      },
    })
})

gulp.task('watch', ['browserSync','sass'], function(){
    gulp.watch('./_include/scss/**/*.scss', ['sass']); 
    gulp.watch('./**/*.html', browserSync.reload); 
    gulp.watch('./_include/js/**/*.js', browserSync.reload); 
    // gulp.watch('./images/**/*.svg', browserSync.reload); 
})