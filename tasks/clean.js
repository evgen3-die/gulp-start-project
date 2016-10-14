import gulp from 'gulp';
import config from './config';
import del from 'del';

export default function clean() {
	return del([config.destPath, 'tmp']);
}
