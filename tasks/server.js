import config from './config';
import browserSync from 'browser-sync';

export default function server() {
	const server = browserSync.create();

	server.init({
		server: `./${config.destPath}`
	});

	server.watch(`${config.destPath}/**/*`).on('change', server.reload);
}
