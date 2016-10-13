import gulp from 'gulp';
import styles from './tasks/styles';

const watch = () => {
	gulp.watch('src/stylus/**/*.styl', styles);
};

const build = gulp.series(styles, watch);

export default build;
