import gulp from 'gulp';
import config from './config';

export default function resources() {
	return gulp.src('src/resources/**/*')
		.pipe(gulp.dest(`${config.destPath}`));
}
