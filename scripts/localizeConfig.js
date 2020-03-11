const merge = require('webpack-merge');

const devServerConfig = {
	devServer: {
		hot: true,
		port: 9000,
		host: '0.0.0.0',
		historyApiFallback: true,
	},
};

module.exports = (config) => merge(config, devServerConfig);
