import express from 'express'
const basicRoutes = express()

import helloWorld from '../controllers/helloWorld'

basicRoutes.get("/", helloWorld.get)

export default basicRoutes