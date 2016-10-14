import gulp from 'gulp';
import config from './config';
import spritesmith from 'gulp.spritesmith';
import merge from 'merge-stream';

export default function sprite() {
	const spriteData = gulp.src('src/sprite/*.png').pipe(spritesmith({
		algorithm: 'binary-tree',
		padding: 8,
		imgPath: '../images/sprite.png',
		imgName: 'sprite.png',
		retinaImgPath: '../images/sprite@2x.png',
		retinaImgName: 'sprite@2x.png',
		retinaSrcFilter: '**/*@2x.png',
		cssName: 'sprite.styl'
	}));

	const imgStream = spriteData.img.pipe(gulp.dest(`${config.destPath}/assets/images`));
	const styleStream = spriteData.css.pipe(gulp.dest('tmp'));

	return merge(imgStream, styleStream);
}
