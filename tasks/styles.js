import gulp from 'gulp';
import config from './config';
import stylus from 'gulp-stylus';

export default function styles(cb) {
	return gulp.src(config.paths.styles.src)
		.pipe(stylus())
		.pipe(gulp.dest(config.paths.styles.dest));
}
