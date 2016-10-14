import gulp from 'gulp';
import config from './config';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';

export default function images() {
	return gulp.src('src/images/**/*.{jpg,gif,svg,png}')
		.pipe(gulpIf(!config.isDevelopment, imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [
				imageminPngquant()
			]
		})))
		.pipe(gulp.dest(`${config.destPath}/assets/images`));
}
