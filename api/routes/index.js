import { Router } from "express";

import authRouter from "./auth.js";
import orderRouter from "./order.js";
import productRouter from "./product.js";
import userRouter from "./user.js";
import paymentRouter from "./payment.js";
import fileRouter from "./file.js";

const router = Router();

router.use('/auth', authRouter)
router.use('/orders', orderRouter)
router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/payment', paymentRouter)
router.use('/media', fileRouter)

export default router