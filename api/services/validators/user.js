import { body } from 'express-validator';

import { getUserDBByEmail, getUserDBByUsername } from '../user.js';
import { validateResult } from '../../utils/validations.js';


export const userCreateValidator = [
  body('username')
    .exists()
    .isString()
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
    .notEmpty()
    .custom(async (value, { req }) => {
      if (await getUserDBByEmail(value)) {
        throw new Error('Email is already taken');
      }
    }),
  body('isAdmin')
    .exists()
    .isBoolean(),
  body('password')
    .exists()
    .isString()
    .trim()
    .notEmpty(),
    (req, res, next) => validateResult(req, res, next)
]


export const userUpdateValidator = [
  body('username')
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
    .isEmail()
    .isLength({ max: 50 })
    .trim()
    .notEmpty()
    .custom(async (value, { req }) => {
      if (await getUserDBByEmail(value)) {
        throw new Error('Email is already taken');
      }
    }),
  body('isAdmin')
    .isBoolean(),
  (req, res, next) => validateResult(req, res, next)
];
