var gulp = require('gulp');
var replace = require('gulp-replace');
var conf = require('../../config').copy.development;

/**
 * Copy assets, html, jspm config & index.html from app directory to development directory
 */
gulp.task('copy', function () {
  gulp
    .src([conf.assets])
    .pipe(gulp.dest(conf.dest + '/assets'));

  return gulp
    .src([conf.js])
    .pipe(gulp.dest(conf.dest));
});
