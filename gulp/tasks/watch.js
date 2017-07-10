var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
webpack = require('webpack');

gulp.task('watch', function() {
	watch('./app/assets/styles/**', function() {
		gulp.start('cssInject');
	});

	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});

	watch('./app/**', function() {
		browserSync.reload();
	});

	watch('.app/**', function() { 
		gulp.start('scripts');
	}); 
});

gulp.task('cssInject', ['css'] ,function() {
	return gulp.src('./app/temp/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scripts',['modernizr'], function(callback) {
	webpack(require('../../webpack.config.js'), function(err, stats) {
		if(err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();

	});
});

