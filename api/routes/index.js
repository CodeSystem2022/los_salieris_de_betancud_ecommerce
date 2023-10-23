import { Router } from "express";

import fileRouter from "./file.js";

const router = Router();

router.use('/media', fileRouter)

export default router