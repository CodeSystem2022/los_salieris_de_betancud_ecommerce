import { body, check } from 'express-validator';

import { validateResult } from '../../utils/validations.js';
import { getProductDBByTitle } from '../product.js';

export const productCreateValidator = [
  check('title')
    .exists()
    .isString()
    .trim()
    .notEmpty()
    .isLength({ max: 50 })
    .custom(async (value, { req }) => {
      const product = await getProductDBByTitle(value)
      if (product) throw new Error('Product title is already taken');
    }),
  check('desc')
    .exists()
    .isString()
    .trim()
    .notEmpty()
    .isLength({ max: 500 }),
  check('categories')
    .optional()
    .toArray(),
  check('price')
    .exists()
    .isNumeric(),
  check('stock')
    .exists()
    .isInt(),
  (req, res, next) => validateResult(req, res, next),
];

export const productUpdateValidator = [
  body('title')
    .isString()
    .trim()
    .notEmpty()
    .isLength({ max: 50 }),
  body('desc')
    .optional()
    .isString()
    .trim()
    .notEmpty()
    .isLength({ max: 500 }),
  body('categories')
    .optional(),
  body('price')
    .exists()
    .isNumeric(),
  body('stock')
    .isInt(),
  (req, res, next) => validateResult(req, res, next),
];
