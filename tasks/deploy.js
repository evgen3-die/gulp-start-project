import gulp from 'gulp';
import config from './config';
import ghPages from 'gulp-gh-pages';

export default function deploy() {
	return gulp.src('**/*', {cwd: 'dest'})
		.pipe(ghPages());
}
