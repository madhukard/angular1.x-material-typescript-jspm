var gulp = require('gulp');
var replace = require('gulp-replace');
var conf = require('../../config').copy.development;

/**
 * Copy assets, html, jspm config & index.html from app directory to development directory
 */
gulp.task('copy', function () {
  return gulp
    .src([conf.html, conf.js, conf.assets, conf.css])
    .pipe(replace('"github:*": "target/development/jspm/github/*"', '"github:*": "jspm/github/*"'))
    .pipe(replace('"npm:*": "target/development/jspm/npm/*"', '"npm:*": "jspm/npm/*"'))
    .pipe(gulp.dest(conf.dest));
});