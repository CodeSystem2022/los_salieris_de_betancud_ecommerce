import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../services/hooks'

export const FilterOnlyCustomerRoutes = () => {
  const { user } = useAuth()
  const location = useLocation()
  const onlyCustomerRoutes = ['/cart']

  if (user && user.isAdmin && onlyCustomerRoutes.includes(location.pathname)) {
    return <Navigate to='/' />
  }
  return <Outlet />
}
