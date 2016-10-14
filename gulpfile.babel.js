import gulp from 'gulp';
import styles from './tasks/styles';
import templates from './tasks/templates';

const watch = () => {
	gulp.watch('src/stylus/**/*.styl', styles);
	gulp.watch('src/pug/**/*.pug', templates);
};

const build = gulp.series(
	gulp.parallel(
		styles,
		templates
	),
	watch
);

export default build;
