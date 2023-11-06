import { useContext } from 'react'

import { userContext } from '../../contexts/UserContext'

export const useAuth = () => {
  const { user, login, logout, accessToken } = useContext(userContext)
  return { user, token: accessToken, login, logout }
}
