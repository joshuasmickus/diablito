var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lintify', function () {
	return gulp
		.src('src/**/*.{js,jsx}')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task('default', function() {

});
