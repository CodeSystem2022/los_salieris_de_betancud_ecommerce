import jwt from 'jsonwebtoken'

import { JWT_SEC } from '../config/constants.js'
import { createUserDB, getUserDBByUsername } from '../services/user.js'
import { createHash } from '../services/hasher.js'

export const register = async (req, res) => {
  try {
    await createUserDB({
      username: req.body.username,
      email: req.body.email,
      password: createHash(req.body.password),
    })
    res.status(201).json({
      message: 'Successful register',
    })
  } catch (err) {
    res.status(500).json(err)
  }
}

export const login = async (req, res) => {
  try {
    const user = await getUserDBByUsername(req.body.username)

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      JWT_SEC,
      { expiresIn: '3d' }
    )

    const { password, ...others } = user._doc
    return res.status(200).json({ ...others, accessToken })
  } catch (err) {
    return res.status(500).json(err)
  }
}
