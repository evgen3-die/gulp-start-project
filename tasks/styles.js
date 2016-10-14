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
import jeet from 'jeet';

export default function styles() {
	return gulp.src('src/stylus/style.styl')
		.pipe(plumber({
			errorHandler: notify.onError((error) => {
				return {
					title: 'styles',
					message: error
				}
			})
		}))
		.pipe(gulpIf(config.isDevelopment, sourcemaps.init()))
		.pipe(stylus({
			use: [
				importIfExist(),
				rupture(),
				autoprefixer(),
				jeet()
			],
			paths: [
				'bower_components'
			],
			'include css': true
		}))
		.pipe(gulpIf(!config.isDevelopment, gcmq()))
		.pipe(gulpIf(!config.isDevelopment, nano()))
		.pipe(gulpIf(config.isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest(`${config.destPath}/assets/css`));
}
