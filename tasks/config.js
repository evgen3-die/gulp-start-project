const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const config = {
	destPath: 'dest',
	isDevelopment
};

export default config;
