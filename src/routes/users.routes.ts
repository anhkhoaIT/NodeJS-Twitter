import { Router } from 'express'
import { loginValidation, registerValidation } from '~/middlewares/users.middlewares'
import { loginController, registerController } from '~/controllers/users.controllers'
const usersRouter = Router()
usersRouter.post('/login', loginValidation, loginController)
/*
  Description: Register a new user
  Path: /register
  Method: POST
  Body: {name: string, email: string, password: string, date_of_birth: ISO8601, 
    confirm_password: string}
*/
usersRouter.post('/register', registerValidation, registerController)

export default usersRouter
