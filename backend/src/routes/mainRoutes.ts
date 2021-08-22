import { Router } from "express";
const router = Router();

router.get('/', (req, res) => res.end('Success, welcome to test home page on backend.'));

export { router };