import { Router } from 'express';

import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../controllers/verifyToken.js';
import { createUser, deleteUser, getAllUser, getUser, updatedUser } from '../controllers/user.js';
import { userCreateValidator, userUpdateValidator } from '../services/validators/user.js';

const router = Router();

router.post('/', verifyTokenAndAdmin, userCreateValidator, createUser);

router.put('/:id', verifyTokenAndAuthorization, userUpdateValidator, updatedUser);

router.delete('/:id', verifyTokenAndAdmin, deleteUser);

router.get('/:id', verifyTokenAndAuthorization, getUser);

router.get('/', verifyTokenAndAdmin, getAllUser);

export default router;
