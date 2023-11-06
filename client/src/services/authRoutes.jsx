import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from './hooks'

export const ProtectedRoutes = ({ redirectTo = '/', forAdmins = false }) => {
  const { user } = useAuth()

  if (!user) return <Navigate to={redirectTo} />

  if (forAdmins) {
    return user.isAdmin ? <Outlet /> : <Navigate to={redirectTo} />
  }
  return <Outlet />
}
