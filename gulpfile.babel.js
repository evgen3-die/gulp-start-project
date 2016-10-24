import gulp from 'gulp';
import styles from './tasks/styles';
import templates from './tasks/templates';
import images from './tasks/images';
import sprite from './tasks/sprite';
import clean from './tasks/clean';
import scripts from './tasks/scripts';
import deploy from './tasks/deploy';
import resources from './tasks/resources';
import server from './tasks/server';

gulp.task(deploy);

const watch = () => {
	gulp.watch('src/stylus/**/*.styl', styles);
	gulp.watch('src/pug/**/*.pug', templates);
	gulp.watch('src/images/**/*.{jpg,gif,svg,png}', images);
	gulp.watch('src/sprite/*.png', gulp.series(sprite, styles));
	gulp.watch('src/js/**/*.js', scripts);
	gulp.watch('src/resources/**/*', resources);
};

const build = gulp.series(
	clean,
	gulp.parallel(
		gulp.series(sprite, styles),
		templates,
		images,
		scripts,
		resources
	),
	gulp.parallel(watch, server)
);

export default build;
