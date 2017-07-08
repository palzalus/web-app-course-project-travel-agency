var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

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

});

gulp.task('cssInject', ['css'] ,function() {
	return gulp.src('./app/temp/styles.css')
		.pipe(browserSync.stream());
});