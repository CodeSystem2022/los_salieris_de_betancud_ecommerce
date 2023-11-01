import { Router } from "express";

import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../controllers/verifyToken.js";
import { createOrder, deleteOrder, getAllOrders, getOrder, getUserOrders, updateOrder } from "../controllers/order.js";

const router = Router();

router.get("/", verifyTokenAndAdmin, getAllOrders)

router.get("/:id", verifyTokenAndAdmin, getOrder)

router.delete("/:id", verifyTokenAndAdmin, deleteOrder)

router.get("/user/:userId", verifyTokenAndAuthorization, getUserOrders)

export default router;