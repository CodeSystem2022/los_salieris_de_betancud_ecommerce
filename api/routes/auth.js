import { Router } from 'express';

import { login, register } from '../controllers/auth.js';
import { userLoginValidator, userRegisterValidator } from '../services/validators/auth.js';

const router = Router();

router.post('/register', userRegisterValidator, register);

router.post('/login', userLoginValidator, login);

export default router;
