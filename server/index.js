import express from 'express'
import path from 'path'
import basicRoutes from './routes/basicRoutes'
const app = express()

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev'

app.use("/", basicRoutes)
app.use(webpackMiddleware(webpack(webpackConfig)))

app.listen(3000, () => {
	console.log(`Listening on port 3000`)
})