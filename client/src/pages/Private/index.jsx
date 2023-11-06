import { Routes, Route } from 'react-router-dom'

import { ProtectedRoutes } from '../../services/authRoutes'
import { UserProfile } from './UserProfile'
import { Header } from '../../components'

export const PrivatePages = () => {
  return (
    <Routes>
      <Route element={<Header><ProtectedRoutes /></Header>}>
        <Route path='/profile' element={<UserProfile />} />
      </Route>
    </Routes>
  )
}
