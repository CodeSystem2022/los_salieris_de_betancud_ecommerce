import { request } from '../../utils/api'
import { getErrorResponse } from '../../utils/errorHandler'

export const getUserOrdersAPI = async ({ userId }) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const response = await request.get(`/orders/user/${userId}`)
    resolve.data = response.data
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}

export const getOrdersAPI = async (params) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const response = await request.get('/orders', { params })
    resolve.data = response.data
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}

export const getOrderAPI = async ({ orderId }) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const response = await request.get(`/orders/${orderId}`)
    resolve.data = response.data
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}
