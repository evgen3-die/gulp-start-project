import gulp from 'gulp';
import config from './config';
import gulpIf from 'gulp-if';
import tiny from 'gulp-tinypng-nokey';
import newer from 'gulp-newer';

export default function images() {
	return gulp.src('src/images/**/*.{jpg,gif,svg,png}')
		.pipe(newer(`${config.destPath}/assets/images`))
		.pipe(gulpIf(!config.isDevelopment, tiny()))
		.pipe(gulp.dest(`${config.destPath}/assets/images`));
}
