import { NextFunction, Request, Response } from 'express';

export async function register(req: Request, res: Response, next: NextFunction) {
  console.log(req.body);

  return res.status(200).json({ msg: 'Welcome to register endpoint!' });
}
