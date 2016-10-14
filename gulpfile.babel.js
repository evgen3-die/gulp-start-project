import gulp from 'gulp';
import styles from './tasks/styles';
import templates from './tasks/templates';
import images from './tasks/images';

const watch = () => {
	gulp.watch('src/stylus/**/*.styl', styles);
	gulp.watch('src/pug/**/*.pug', templates);
	gulp.watch('src/images/**/*.{jpg,gif,svg,png}', images);
};

const build = gulp.series(
	gulp.parallel(
		styles,
		templates,
		images
	),
	watch
);

export default build;
