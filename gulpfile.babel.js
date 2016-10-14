import gulp from 'gulp';
import styles from './tasks/styles';
import templates from './tasks/templates';
import images from './tasks/images';
import sprite from './tasks/sprite';
import clean from './tasks/clean';

const watch = () => {
	gulp.watch('src/stylus/**/*.styl', styles);
	gulp.watch('src/pug/**/*.pug', templates);
	gulp.watch('src/images/**/*.{jpg,gif,svg,png}', images);
	gulp.watch('src/sprite/*.png', gulp.series(sprite, styles));
};

const build = gulp.series(
	clean,
	gulp.parallel(
		gulp.series(sprite, styles),
		templates,
		images
	),
	watch
);

export default build;
