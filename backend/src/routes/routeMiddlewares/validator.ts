import { NextFunction, Request, Response } from 'express';

interface ValidationRegexp {
  regexp: RegExp,
  msg?: string
}


export class Validator {

  constructor(protected readonly type: string, protected readonly property: string) {
    this.type = type;
    this.property = property;
  }

  public go() {
    return (req: Request, res: Response, next: NextFunction) => {
      next();
    }
  }

  public verifyType() {
    return (req: Request, res: Response, next: NextFunction) => {

      const toValidationPropertyValue: string = req.body[this.property];

      if(typeof toValidationPropertyValue != this.type){
        return res.status(400).json({ msg: `Wrong type of property ${this.property}` });
      }
      return this;

    }
  }

  public verifyRegexp({regexp, msg}: ValidationRegexp) {

    if(!msg) msg = `Wrong value in property ${this.property}.`;
  
    return (req: Request, res: Response, next: NextFunction) => {

      const toValidPropertyValue: string = req.body[this.property];
  
      const doesValid: boolean = !!toValidPropertyValue.match(regexp);
      if(doesValid){
        console.log(this);
        next()
      }
      else return res.status(400).json({ msg });
    }
  }
  

}