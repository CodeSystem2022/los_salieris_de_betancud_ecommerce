import { Routes, Route } from 'react-router-dom'

import { SignUp } from './SignUp'
import { SignIn } from './SignIn'
import { ProductsLayout } from './ProductsLayout'
import { ProductDetail } from './ProductDetail'
import { Cart } from './Cart'
import { Contact } from './Contact'
import { FilterOnlyCustomerRoutes, Header } from '../../components'

export const PublicPages = () => {
  return (
    <Routes>
      <Route element={<Header><FilterOnlyCustomerRoutes /></Header>}>
        <Route path='/' element={<ProductsLayout />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='shop' element={<ProductsLayout />} />
        <Route path='shop/:productName' element={<ProductDetail />} />
        <Route path='cart' element={<Cart />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}
