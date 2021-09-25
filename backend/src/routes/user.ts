import express, { Router } from 'express';

import { Validator } from "./routeMiddlewares/validator";

import { passwordVerificationPattern } from "../helpers/verifyPatternsRegexp";

const router = Router();

import { register } from "../controllers/user"

const validatorString = new Validator('string', 'password');

const passwordErrorMsg = `Password must contain at least one small and big character, one digit and one special character and minimum 8 characters, maximum 64. Allowed special characters ! @ # $ % ^ & * ( )`;

router.post("/register",
    express.json(),
    // validatorString.verifyRegexp({regexp: passwordVerificationPattern, msg: passwordErrorMsg}).go(),
    validatorString.verifyType(),
    register);

// router.post("/login",
//     passport.authenticate('local', { session: false, }),
//     userCon.login);

export { router };