import CryptoJS from 'crypto-js';
import { PASS_SEC } from '../config/constants.js';
import { createUserDB, deleteUserDB, getAllUsersDB, getUserDBById, updateUserDB } from '../services/user.js';


export const createUser = async (req, res) => {
  try {
    req.body.password = CryptoJS.AES.encrypt(req.body.password, PASS_SEC).toString();
    const { username, email, isAdmin, password } = req.body;
    const newUser = await createUserDB({ username, email, isAdmin, password });
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export const updatedUser = async (req, res) => {
  try {
    const { username, email, isAdmin } = req.body;
    const updatedUser = await updateUserDB(req.params.id, { $set: { username, email, isAdmin } });
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await deleteUserDB(req.params.id);
    return res.status(200).json('User has been deleted...');
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getUserDBById(req.params.id);
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await getAllUsersDB();
    return res.status(200).json(
      users.map((user) => {
        const { password, ...others } = user._doc;
        return others;
      })
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};
