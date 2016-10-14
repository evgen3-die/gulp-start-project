const config = {
	destPath: 'dest',
	isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
};

export default config;
