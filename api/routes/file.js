import { Router } from 'express';

import { getProductImage } from '../controllers/file.js';

const router = Router();

router.get('/products/:name', getProductImage);

export default router;
