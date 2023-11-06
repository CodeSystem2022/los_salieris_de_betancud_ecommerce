import { request } from '../../utils/api'
import { getErrorResponse } from '../../utils/errorHandler'

export const getProductsAPI = async () => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const resoponse = await request.get('/products')
    resolve.data = resoponse.data
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}

export const getProductAPI = async ({ productId }) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const resoponse = await request.get(`/products/${productId}`)
    resolve.data = resoponse.data
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}

export const createProductAPI = async (data) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const resoponse = await request.post('/products', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    resolve.data = resoponse.data
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}
export const updateProductAPI = async ({ productId, data }) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const resoponse = await request.put(`/products/${productId}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    resolve.data = resoponse.data
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}
