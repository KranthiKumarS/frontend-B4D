// *************************************
//
//   watch.js
//
// *************************************
//
// Available tasks:
//  'gulp watch'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-watch                 : Watch for and act upon file changes
//
// -------------------------------------


var gulp = require('gulp');
var watch = require('gulp-watch');


// -------------------------------------
//   Task: Watch
// -------------------------------------

gulp.task('watch', function () {
     gulp.watch('src/**/js/**/*.js', ['lint:js', 'js']);
     gulp.watch('src/**/scss/**/*.scss', ['sass', 'copy']);
     gulp.watch('src/**/*.html', ['partials', 'copy']);
});


//gulp.task('watch', ["build", "webserver"]);

