import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
	devtool: 'inline-source-map',
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		// Create HTML file that includes reference to bundle.js
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			debug: true,
			options: {
				noInfo: true
			}
		})
	],
	module: {
		rules: [
			{test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader']},
			{test: /\.css$/, use: ['style-loader', 'css-loader']}
		]
	}
}
