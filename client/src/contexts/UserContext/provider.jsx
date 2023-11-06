import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { removeFromStorage, storeData, getFromStorage } from '../../utils/localStorage'

const initailState = {
  user: getFromStorage('user'),
  accessToken: localStorage.getItem('accessToken'),
}

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext({
  ...initailState,
  login: ({ userData, accessToken }) => {},
  logout: () => {},
  token: '',
})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initailState.user)
  const navigate = useNavigate()

  const login = ({ userData, accessToken }) => {
    setUser(userData)
    storeData('user', JSON.stringify(userData))
    storeData('accessToken', accessToken)
  }

  const logout = () => {
    removeFromStorage('user')
    removeFromStorage('accessToken')
    setUser(null)
    navigate('/')
  }
  return <userContext.Provider value={{ user, token: initailState.accessToken, login, logout }}>{children}</userContext.Provider>
}
