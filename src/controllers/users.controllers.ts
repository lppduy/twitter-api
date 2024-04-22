import { Request, Response, NextFunction } from "express";


export const loginController = (req: Request,res: Response) => {

  const {email,password} = req.body

  if (email === "duy@gmail.com" 
  && password === "duy123") {
    return res.json({
      msg:'Login success'
    })
  }
  
  return res.status(400).json({
    error: 'Login failed'
  })
}

