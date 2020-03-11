module.exports = {
	presets: [
		'@babel/preset-react',
		[
			'@babel/preset-env', {
				'useBuiltIns': 'usage',
				'corejs': 3
			},
		],
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-syntax-dynamic-import',
		[
			'babel-plugin-styled-components',
			{
				fileName: true,
			}
		]
	]
}
