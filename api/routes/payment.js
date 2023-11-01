import { Router } from 'express';

import { verifyToken } from '../controllers/verifyToken.js';
import { createOrder, receiveWebhook } from '../controllers/payment.js';
import { paymentOrderValidator } from '../services/validators/payment.js';

const router = Router();

router.post('/order', verifyToken, paymentOrderValidator, createOrder);

router.post('/webhook', receiveWebhook);

router.post('/success', (req, res) => res.status(200).json({messaje: 'Ok'}));

router.post('/failure', (req, res) => res.status(500).json({messaje: 'Error'}));


export default router;
