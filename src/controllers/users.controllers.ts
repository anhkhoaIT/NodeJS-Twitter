import { Request, Response } from 'express'
import usersService from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import User from '~/models/schemas/User.schema'
import { RegisterReqBody } from '~/models/schemas/Users.requests'
export const loginController = (req: Request, res: Response) => {
  // console.log(req.body)
  const { email, password } = req.body
  if (email === 'anhkhoa14@gmail.com' && password === '123456') {
    res.json({
      message: 'Login successfully'
    })
  } else {
    res.status(401).json({
      message: 'Login failed'
    })
  }
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  // console.log(req.body)
  try {
    const result = await usersService.register(req.body)
    return res.json({
      message: 'Register successfully',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Register failed'
    })
  }
}
