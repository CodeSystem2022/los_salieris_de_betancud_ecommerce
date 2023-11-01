import { body } from 'express-validator';

import { validateResult } from '../../utils/validations.js';

export const paymentOrderValidator = [
  body('items').isArray().notEmpty(),
  body('items.*.id')
    .exists()
    .isString()
    .trim()
    .notEmpty(),
  body('items.*.title')
    .exists()
    .isString()
    .trim()
    .notEmpty(),
  body('items.*.description')
    .exists()
    .isString()
    .trim()
    .notEmpty(),
  body('items.*.picture_url')
    .exists()
    .isString()
    .trim()
    .notEmpty(),
  body('items.*.quantity')
    .exists()
    .isInt(),
  body('items.*.unit_price')
    .exists()
    .isNumeric(),
  (req, res, next) => validateResult(req, res, next),
];
