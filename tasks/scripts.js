import gulp from 'gulp';
import config from './config';
import include from 'gulp-include';

export default function scripts() {
	return gulp.src('src/js/main.js')
		.pipe(include({
			includePaths: ['bower_components', 'src/js']
		}))
		.pipe(gulp.dest(`${config.destPath}/assets/js`));
}
