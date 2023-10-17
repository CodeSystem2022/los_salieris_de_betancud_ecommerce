import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const JWT_SEC = process.env.JWT_SEC
export const PASS_SEC = process.env.PASS_SEC
export const SECURE_DOMAIN = process.env.SECURE_DOMAIN
export const MONGO_URL = process.env.MONGO_URL;
export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY;
export const WEBHOOK_NOTIFICATION_URL = `${process.env.SECURE_URL}/api/payment/webhook`;
export const SUCCESS_PAID_URL = `${process.env.SECURE_URL}/api/payment/success`;
export const FAILURE_PAID_URL = `${process.env.SECURE_URL}/api/payment/failure`;
export const TEAM_URL = process.env.TEAM_URL || 'https://github.com/orgs/CodeSystem2022/teams/los-salieris-de-betancudLosSalierisDeBetancud'