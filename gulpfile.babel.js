import gulp from 'gulp';
import styles from './tasks/styles';
import templates from './tasks/templates';
import images from './tasks/images';
import sprite from './tasks/sprite';
import clean from './tasks/clean';
import scripts from './tasks/scripts';
import github from './tasks/github';
import resources from './tasks/resources';
import server from './tasks/server';

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
	)
);

const dev = gulp.series(
	build,
	gulp.parallel(watch, server)
);

const deploy = gulp.series(
	build,
	github
);

export {build, dev, deploy};
