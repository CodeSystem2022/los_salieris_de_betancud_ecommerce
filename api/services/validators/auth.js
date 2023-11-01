import { body } from 'express-validator';

import { validateResult } from '../../utils/validations.js';
import { getUserDBByEmail, getUserDBByUsername } from '../user.js';
import { verifyHash } from '../hasher.js';

export const userLoginValidator = [
  body('username')
    .exists()
    .isString()
    .isLength({ max: 25 })
    .trim()
    .notEmpty()
    .custom(async (value, { req }) => {
      if (await getUserDBByUsername(value) === null) {
        throw new Error('User not found');
      }
    }),
  body('password')
    .exists()
    .isString()
    .trim()
    .notEmpty()
    .custom(async (value, { req }) => {
      const user = await getUserDBByUsername(req.body.username);
      if (!verifyHash(user.password, req.body.password)) {
        throw new Error('Wrong Password')
      }
    }),
  (req, res, next) => validateResult(req, res, next),
]

export const userRegisterValidator = [
  body('username')
  .exists()
  .isString()
  .isLength({ max: 25 })
  .trim()
  .notEmpty()
  .custom(async (value, { req }) => {
    if (await getUserDBByUsername(value)) {
      throw new Error('Username is already taken');
    }
  }),
  body('email')
  .exists()
  .isEmail()
  .trim()
  .isLength({ max: 50 })
  .notEmpty()
  .custom(async (value, { req }) => {
      if (await getUserDBByEmail(value)) {
          throw new Error('Email is already taken');
      }
  }),
  body('password')
    .exists()
    .isString()
    .trim()
    .notEmpty(),
  body('second_password')
    .exists().withMessage('No existe')
    .isString().withMessage('No es string')
    .trim().withMessage('No trim')
    .notEmpty().withMessage('Esta vacío')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
          throw new Error('Passwords do not match');
      }
      return value
  }),
  (req, res, next) => validateResult(req, res, next),
];