'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
// const cssnano = require('gulp-cssnano');
// const uglify = require('gulp-uglify');

function buildStyles() {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
    // .pipe(cssnano())
    .pipe(gulp.dest('./public/css/'));
};



function compressJs() {
    return gulp.src('./src/js/main.js')
    // .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
}



exports.buildStyles = buildStyles;
exports.compressJs = compressJs
exports.watch = function () {
  gulp.watch('./src/scss/', gulp.series('buildStyles'));
  gulp.watch('./src/js/', gulp.series('compressJs'))
};