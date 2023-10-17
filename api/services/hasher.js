import CryptoJS from 'crypto-js';

import { PASS_SEC } from '../config/constants.js';

export const createHash = (plainText) => {
    return CryptoJS.AES.encrypt(plainText, PASS_SEC).toString()
}

export const verifyHash = (hash, plainText) => {
    return CryptoJS.AES.decrypt(hash, PASS_SEC).toString(CryptoJS.enc.Utf8) === plainText;
}