const express = require('express')
const basicRoutes = express()

const helloWorld = require('../controllers/helloWorld')

basicRoutes.get("/", helloWorld.get)

module.exports = basicRoutes