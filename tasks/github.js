import gulp from 'gulp';
import config from './config';
import ghPages from 'gulp-gh-pages';

export default function github() {
	return gulp.src('**/*', {cwd: config.destPath})
		.pipe(ghPages());
}
