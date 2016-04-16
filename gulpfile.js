var gulp = require('gulp');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleancss = require('gulp-clean-css');

gulp.task('lintify:src', function () {
	return gulp
		.src('src/**/*.{js,jsx}')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task('build:styles', function () {
	return gulp
		.src('src/styles/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleancss())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./public/styles'));
});

gulp.task('default', function() {

});
