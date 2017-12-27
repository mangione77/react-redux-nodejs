import path from 'path'

const webpackConfig = {
	entry: path.join(__dirname, '/client/index.js'),
	output: {
		path: '/',
		filename: 'bundle.js'
	},
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