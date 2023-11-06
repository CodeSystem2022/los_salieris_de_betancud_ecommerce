import { Routes, Route } from 'react-router-dom'

import { ProtectedRoutes } from '../../services/authRoutes'
import { AdminSite } from '../../components'
import { Dashboard } from './Dashboard'
import { UsersListAdmin } from './UsersListAdmin'
import { UsersDetailAdmin } from './UsersDetailAdmin'
import { UsersCreateAdmin } from './UsersCreateAdmin'
import { ProductsListAdmin } from './ProductsListAdmin'
import { ProductsDetailAdmin } from './ProductsDetailAdmin'
import { ProductsCreateAdmin } from './ProductsCreateAdmin'
import { ProductsUpdateAdmin } from './ProductsUpdateAdmin'
import { OrdersListAdmin } from './OrdersListAdmin'
import { OrdersDetailAdmin } from './OrdersDetailAdmin'

export const AdminPages = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes forAdmins />}>
        <Route path='admin' element={<AdminSite />}>
          <Route index element={<Dashboard />} />
          <Route path='users'>
            <Route path='' element={<UsersListAdmin />} />
            <Route path=':userId' element={<UsersDetailAdmin />} />
            <Route path='new' element={<UsersCreateAdmin />} />
          </Route>
          <Route path='products'>
            <Route path='' element={<ProductsListAdmin />} />
            <Route path='new' element={<ProductsCreateAdmin />} />
            <Route path=':productId' element={<ProductsDetailAdmin />} />
            <Route path=':productId/update' element={<ProductsUpdateAdmin />} />
          </Route>
          <Route path='orders'>
            <Route path='' element={<OrdersListAdmin />} />
            <Route path=':orderId' element={<OrdersDetailAdmin />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}
