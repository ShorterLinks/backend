import { Router } from "express";

import { router as userRouter } from "./user";

const router = Router();


router.get('/', (req, res) => res.end('Success, welcome to test home page on backend.'));

router.use('/user', userRouter);

export { router };