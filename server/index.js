require('dotenv').config()
const express = require('express')
const path = require('path')
const basicRoutes = require('./routes/basicRoutes')
const app = express()

app.use("/", basicRoutes)

app.listen(process.env.PORT, () => {
	console.log(`Listening on ${process.env.PORT}`)
})