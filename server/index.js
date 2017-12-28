import express from 'express'
import path from 'path'
import basicRoutes from './routes/basicRoutes'
import apiRoutes from './routes/apiRoutes'
const app = express()

import bodyParser from 'body-parser'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev'
import webpackHotMiddleware from 'webpack-hot-middleware'

const compiler = webpack(webpackConfig)

app.use(bodyParser.json())
app.use("/", basicRoutes)
app.use("/api", apiRoutes)
app.use(webpackMiddleware(compiler, {
	hot:true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}))
app.use(webpackHotMiddleware(compiler))

app.listen(3000, () => {
	console.log(`Listening on port 3000`)
})