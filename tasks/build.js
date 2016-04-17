var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var cleancss = require('gulp-clean-css');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:scss', function () {
	return gulp
		.src('src/styles/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleancss())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./public/styles'));
});

gulp.task('build:src', function () {
	return gulp
		.src('src/**/*.{js,jsx}')
		.pipe(babel())
		.pipe(gulp.dest('./lib'));
});