var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var onError = function (err) {
  gutil.log(gutil.colors.green(err));
};
var sourcemaps = require('gulp-sourcemaps');

// Default
gulp.task('default', ['lint', 'build']);

gulp.task('build', function() {
  return gulp.src([
  	'./src/base.js',
  	'./src/connect.js', 
  	'./src/growfile.js',
  	'./src/thing.js',
  	'./src/actions.js',
  	'./src/grow-api.js',
  	'./src/export.js'
  ])
    .pipe(concat('grow.js'))
    .pipe(gulp.dest('./dist/'));
});

// Lint JS
gulp.task('lint', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Minify JS
// gulp.task('minify', ['bundle'], function(){
//   var uglifyOptions = {
//       mangle: true,
//       preserveComments : "license"
//   };
//   return gulp.src('dist/grow.js')
//     .pipe(plumber({ errorHandler: onError }))
//     .pipe(rename('grow.min.js'))
//     // .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(uglify(uglifyOptions))
//     // .pipe(sourcemaps.write('./'))
//     .pipe(size({ showFiles: true }))
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('test', function(cb) {
//   mochify('./test/*.js', {
//     reporter: 'spec',
//     transform: 'brfs',
//     "web-security": false,
//     "webSecurityEnabled": false,
//     // "localUrlAccess": true,
//     watch: true,
//     wd: false,
//     debug: false
//   })
//   .bundle();
// });
