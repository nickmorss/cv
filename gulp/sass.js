'use strict';

var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  sassJspm = require('sass-jspm-importer');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  functions: sassJspm.resolve_function('./src/lib/'),
  importer: sassJspm.importer
};

// Compile SASS with sourcemaps + livereload.
gulp.task('sass', function () {
  gulp.src(global.paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(global.paths.css))
    .pipe(connect.reload());
});
