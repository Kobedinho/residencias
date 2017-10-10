const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const mocha = require('gulp-mocha');
const babel = require('babel-core/register');


gulp.task('test', function(argument) {
	return gulp.src(['tests/**/*.js'], {read: false})
		.pipe(mocha({
		 	reporter: 'dot',
			compilers: {
				js: babel
			},
		}));
});

gulp.task('test-debug', function(argument){
	return gulp.src(['tests/**/*.js'], {read: false})
		.pipe(mocha({
		 	reporter: 'dot',
			compilers: {
				js: babel
			},
			debug: true,
		}));
});

gulp.task('build', function(argument) {
	return browserify({
		entries: './src/js/index.js',
		debug: true,
	})
	.transform(babelify, {presets: ["react"]})
	.bundle()
	.pipe(source('index.js'))
	.pipe(gulp.dest('dist'));
});

// copiando los recursos css y js
gulp.task('copy', function (argument) {
	gulp.src('src/css/*.*')
		.pipe(gulp.dest('dist/css'));
	gulp.src('src/js/vendor/*.*')
		.pipe(gulp.dest('dist/js'));
	gulp.src('src/fonts/*.*')
		.pipe(gulp.dest('dist/fonts'));
});

// dafault
gulp.task('default',['copy','build']);
