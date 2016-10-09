import gulp from 'gulp';
import styles from './tasks/styles'

const build = gulp.parallel(styles);

export default build;
