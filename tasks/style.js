import gulp from 'gulp';
import config from './config';
import stylus from 'gulp-stylus';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import gcmq from 'gulp-group-css-media-queries';
import nano from 'gulp-cssnano';
import rupture from 'rupture';
import importIfExist from 'stylus-import-if-exist';
import autoprefixer from 'autoprefixer-stylus';
import notify from 'gulp-notify';
import cache from 'gulp-cached';
import progeny from 'gulp-progeny';


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default function style() {
	return gulp.src('src/stylus/style.styl')
		.pipe(cache('style'))
		.pipe(progeny())
		.pipe(plumber({
			errorHandler: notify.onError((error) => {
				return {
					title: 'styles',
					message: error
				}
			})
		}))
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(stylus({
			use: [
				importIfExist(),
				rupture(),
				autoprefixer()
			],
			paths: [
				'bower_components'
			],
			'include css': true
		}))
		.pipe(gcmq())
		.pipe(nano())
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest(`${config.destPath}/css`));
}
