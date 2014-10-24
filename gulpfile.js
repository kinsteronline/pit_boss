'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var es6transpiler = require('gulp-es6-transpiler');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var del = require('del');

var bowerFiles = require('main-bower-files');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('scripts', function() {
  return gulp.src('game/scripts/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(es6transpiler())
    .pipe(concat('craps.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(reload({ stream: true }));
});

gulp.task('libs', function() {
  return gulp.src(bowerFiles({ debugging: true }))
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
  return gulp.src('./game/styles/*.styl')
    .pipe(stylus())
    .pipe(concat('craps.css'))
    .pipe(gulp.dest('dist/'))
    .pipe(reload({ stream: true }));
});

gulp.task('html', function() {
  return gulp.src('./game/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function(cb) {
  return del([ 'dist/*.js' ], cb);
});

gulp.task('bs', function() {
  browserSync({
    browser: [ 'firefox', 'safari' ],
    server: {
      baseDir: './dist/',
    }
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', [ 'css', 'scripts', 'html', 'bs' ], function() {
  gulp.watch('game/scripts/*.js', ['scripts']);
  gulp.watch('game/*.html', [ 'html', 'bs-reload' ]);
});

