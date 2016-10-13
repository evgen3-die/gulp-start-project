import gulp from 'gulp';
import style from './tasks/style';

const watch = () => {
	gulp.watch('src/stylus/**/*.styl', style);
};

const build = gulp.series(style, watch);

export default build;
