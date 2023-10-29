import Axios from 'axios'

import { API_URL } from '../contants'
import { getFromStorage } from './localStorage'

export const request = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getFromStorage('accessToken') ? `Bearer ${getFromStorage('accessToken')}` : '',
  },
})
