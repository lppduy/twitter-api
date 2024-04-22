import { Request, Response, NextFunction } from 'express'
import userService from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body

  if (email === 'duy@gmail.com' && password === 'duy123') {
    return res.json({
      message: 'Login success'
    })
  }

  return res.status(400).json({
    error: 'Login failed'
  })
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const result = await userService.register({ email, password })

    return res.json({
      message: 'Register success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      error: 'Register failed'
    })
  }
}
