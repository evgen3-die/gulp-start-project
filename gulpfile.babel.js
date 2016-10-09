import gulp from 'gulp';
import style from './tasks/style'

const build = gulp.parallel(style);

export default build;
