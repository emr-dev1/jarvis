const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildOutput = path.resolve(__dirname, '../build');

const nodeModules = path.resolve(process.cwd(), 'node_modules');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.jsx'),

	output: {
		filename: '[name].[hash:8].js',
		path: buildOutput,
		publicPath: '/'
	},

	optimization: {
		splitChunks: {
			name: true,
			cacheGroups: {
				commons: {
					chunks: 'initial',
					minChunks: 2,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					priority: -10
				},
			},
		},
		runtimeChunk: true,
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'react': path.resolve(nodeModules, 'react'),
			'react-dom': path.resolve(nodeModules, 'react-dom'),
			'styled-component': path.resolve(nodeModules, 'styled-component'),
		},
	},

	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					'babel-loader',
					'stylelint-custom-processor-loader',
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
					'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
				],
			},
			{
				test: /\.(ttf)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=font/[hash].[ext]',
				],
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin(
			{
				template: './public/index.html',
			},
		),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	],

	performance: {
		hints: false,
	},
};
