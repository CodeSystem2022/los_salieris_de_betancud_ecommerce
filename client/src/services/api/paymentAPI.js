import { request } from '../../utils/api'
import { getErrorResponse } from '../../utils/errorHandler'

export const initPaymentAPI = async ({ items }) => {
  const resolve = {
    data: null,
    error: null,
  }
  try {
    const response = await request.post('/payment/order', { items })
    resolve.data = response.data
  } catch (error) {
    resolve.error = getErrorResponse(error)
  }
  return resolve
}
