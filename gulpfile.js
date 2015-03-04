var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var del = require('del');

paths = {
  js: ['src/**/*.js']
}

gulp.task('default', ['babel:compile', 'watch'], function(){});

gulp.task('clean', function(callback) {
  return del(['lib/**'], callback);
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['babel:compile']);
});

gulp.task('babel:compile', function () {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel({modules: 'umd', comments: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('lib'));
});
