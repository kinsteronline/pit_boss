'use strict';

var del = require('del');

var gulp = require("gulp");
var concat = require("gulp-concat");
var six2five = require("gulp-6to5");
var stylus = require('gulp-stylus');

var browserSync = require("browser-sync");
var reload = browserSync.reload;

var dirs = {
  dist: "public",
  client: "client",
  server: "server"
};

gulp.task("client-js", function() {
  return gulp.src(dirs.clientSrc + "/**/*.js")
    .pipe(six2five())
    .pipe(concat("craps.js"))
    .pipe(gulp.dest(dirs.dist))
    .pipe(reload({ stream: true }));
});

gulp.task("client-lint", function() {
});

gulp.task('css', function() {
  return gulp.src(dirs.clientSrc + "/styles/*.styl")
    .pipe(stylus())
    .pipe(concat('craps.css'))
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('html', function() {
  return gulp.src(dirs.clientSrc + "/*.html")
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('clean', function(cb) {
  return del([ dirs.dist + "/*.*" ], cb);
});

gulp.task('bs', function() {
  browserSync({
    server: {
      baseDir: dirs.dist,
    }
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', [ 'client-js', 'html' ], function() {
  gulp.watch(dirs.clientSrc + '/*.js', [ 'client-js' ]);
  gulp.watch(dirs.clientSrc + '/*.html', [ 'html' ]);
});

