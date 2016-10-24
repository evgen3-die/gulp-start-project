import gulp from 'gulp';
import config from './config';
import newer from 'gulp-newer';

export default function resources() {
	return gulp.src('src/resources/**/*')
		.pipe(newer(`${config.destPath}`))
		.pipe(gulp.dest(`${config.destPath}`));
}
