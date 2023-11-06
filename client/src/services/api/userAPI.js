import { request } from '../../utils/api'
import { getErrorResponse } from '../../utils/errorHandler'

export const signUp = async (data) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const response = await request.post('/auth/register', data)
    if (response.status === 201) {
      resolve.data = response.data
    }
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}

export const signIn = async (data) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const response = await request.post('/auth/login', data)
    if (response.status === 200) {
      resolve.data = response.data
    }
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}

export const getUsersAPI = async () => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const response = await request.get('/users')
    if (response.status === 200) {
      resolve.data = response.data
    }
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}

export const getUserAPI = async ({ userId }) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const response = await request.get(`/users/${userId}`)
    if (response.status === 200) {
      resolve.data = response.data
    }
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}

export const createUserAPI = async (data) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const response = await request.post('/users', data)
    if (response.status === 201) {
      resolve.data = response.data
    }
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}
