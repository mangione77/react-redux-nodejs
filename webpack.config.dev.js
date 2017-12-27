import path from 'path'
import webpack from 'webpack'

const webpackConfig = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js')
	],
	output: {
		path: '/',
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			include: path.resolve(__dirname, 'client'),
			loaders: [ 'babel-loader' ]
		}]
	},
	resolve: {
		extensions: [ '.js' ]
	}	
}

export default webpackConfig