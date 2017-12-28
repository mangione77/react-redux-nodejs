import express from 'express'
const apiRoutes = express()

import usersController from '../controllers/usersController'

apiRoutes.post("/users", usersController.newUser)

export default apiRoutes