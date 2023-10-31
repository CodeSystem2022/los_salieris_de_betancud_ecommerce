import User from '../models/User.js';


export const createUserDB = async (data) => {
  const user = new User(data);
  return await user.save();
}

export const updateUserDB = async (userId, data) => {
  return await User.findByIdAndUpdate(userId, data, { new: true });
};

export const deleteUserDB = async (userId) => {
  await User.findByIdAndDelete(userId);
};

export const getUserDBById = async (userId) => {
  return await User.findById(userId);
};

export const getUserDBByUsername = async (username) => {
  return await User.findOne({ username });
}

export const getUserDBByEmail = async (email) => {
  return await User.findOne({ email });
}

export const getAllUsersDB = async () => {
    return await User.find().sort({ createdAt: 'desc' });
}