var gulp = require('gulp');
var conf = require('../../config').copy.development;

/**
 * Copy assets, html, jspm config & index.html from app directory to development directory
 */
gulp.task('copy', function () {
  return gulp
    .src([conf.html, conf.js, conf.assets, conf.css])
    .pipe(gulp.dest(conf.dest));
});
