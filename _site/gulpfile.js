var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
	gulp.src('img-src/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img'))
});
