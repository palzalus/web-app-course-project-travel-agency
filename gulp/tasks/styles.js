var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
imp = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('css', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([
				imp,
				mixins,
				cssvars,
				nested,
				autoprefixer
			]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});