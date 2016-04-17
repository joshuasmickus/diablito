var eslint = require('gulp-eslint');
var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

gulp.task('lintify:src', function () {
	return gulp
		.src('src/**/*.{js,jsx}')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task('lintify:test', function () {
	return gulp
		.src('test/**/*.spec.{js,jsx}')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task('lintify:scss', function () {
	return gulp
		.src('src/styles/**/*.scss')
		.pipe(scsslint());
});
