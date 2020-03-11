const baseConfig = require('./webpack.config.common.js');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						},
					},
				],
			},
		],
	},
});
