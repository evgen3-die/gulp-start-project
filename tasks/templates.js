import gulp from 'gulp';
import config from './config';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

export default function templates() {
	return gulp.src('src/pug/*.pug')
		.pipe(plumber({
			errorHandler: notify.onError((error) => {
				return {
					title: 'templates',
					message: error
				}
			})
		}))
		.pipe(pug({
			pretty: !config.isDevelopment
		}))
		.pipe(gulp.dest(`${config.destPath}`));
}
