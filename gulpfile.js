var gulp = require('gulp');
var requiredir = require('require-dir');
var tasks = requiredir('./tasks');

gulp.task('build', [ 'build:src', 'build:scss']);

gulp.task('lintify', [ 'lintify:src', 'lintify:test', 'lintify:scss' ]);

gulp.task('default', [ 'lintify', 'build' ]);
