import { useContext } from 'react'

import { cartContext } from '../../contexts/CartContext'

export const useCart = () => {
  const { cart, addItem, decreaseItem, removeItem, clearCart } = useContext(cartContext)
  return { cart, addItem, decreaseItem, removeItem, clearCart }
}
