import { BrowserRouter } from 'react-router-dom'

import { AdminPages, PrivatePages, PublicPages } from './pages'
import { UserProvider } from './contexts/UserContext'
import { CartProvider } from './contexts/CartContext'

function App () {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <PublicPages />
          <PrivatePages />
        </CartProvider>
        <AdminPages />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
