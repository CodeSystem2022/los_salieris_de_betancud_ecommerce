import { Router } from 'express';

import { verifyTokenAndAdmin } from '../controllers/verifyToken.js';
import { createProduct, deleteProduct, getProduct, getAllProducts, updateProduct } from '../controllers/product.js';
import { productCreateValidator, productUpdateValidator } from '../services/validators/product.js';

const router = Router();

router.post("/", verifyTokenAndAdmin, productCreateValidator, createProduct)

router.put("/:id", verifyTokenAndAdmin, productUpdateValidator, updateProduct)

router.delete("/:id", verifyTokenAndAdmin, deleteProduct)

router.get("/:id", getProduct)

router.get("/", getAllProducts)

export default router;