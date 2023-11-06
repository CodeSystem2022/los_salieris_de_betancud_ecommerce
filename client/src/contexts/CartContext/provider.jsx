import { createContext, useState } from 'react'

import { getFromStorage, storeData } from '../../utils/localStorage'
import { BACKEND_URL } from '../../contants'

const initalState = {
  items: getFromStorage('cartItems') || [],
  totalPrice: getFromStorage('cartTotalPrice') || 0,
}

// eslint-disable-next-line react-refresh/only-export-components
export const cartContext = createContext({
  ...initalState,
  addItem: () => {},
  decreaseItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initalState)

  const addItem = (product) => {
    const productId = product._id ? product._id : product.id
    const productPrice = product.price ? product.price : product.unit_price
    const itemIndex = cart.items.findIndex((item) => item.id === productId)
    if (itemIndex !== -1) {
      cart.items[itemIndex].quantity += 1
    } else {
      cart.items.push({
        id: productId,
        title: product.title,
        unit_price: productPrice,
        quantity: 1,
        picture_url: BACKEND_URL + product.img,
        description: product.desc,
      })
    }
    cart.totalPrice += productPrice
    const newCart = { ...cart }
    setCart(newCart)
    storeData('cartItems', JSON.stringify(newCart.items))
    storeData('cartTotalPrice', newCart.totalPrice)
  }

  const decreaseItem = (product) => {
    const productId = product._id ? product._id : product.id
    const productPrice = product.price ? product.price : product.unit_price
    const itemIndex = cart.items.findIndex((item) => item.id === productId)
    if (cart.items[itemIndex].quantity > 1) {
      cart.items[itemIndex].quantity -= 1
    } else {
      cart.items = cart.items.filter((item) => item.id !== productId)
    }
    cart.totalPrice -= productPrice
    const newCart = { ...cart }
    setCart(newCart)
    storeData('cartItems', JSON.stringify(newCart.items))
    storeData('cartTotalPrice', newCart.totalPrice)
  }

  const removeItem = (product) => {
    const productId = product._id ? product._id : product.id
    const productPrice = product.price ? product.price : product.unit_price
    cart.totalPrice -= productPrice * cart.items.find((item) => item.id === productId).quantity
    cart.items = cart.items.filter((item) => item.id !== productId)
    const newCart = { ...cart }
    setCart(newCart)
    storeData('cartItems', JSON.stringify(newCart.items))
    storeData('cartTotalPrice', newCart.totalPrice)
  }

  const clearCart = () => {
    const clearCart = {
      items: [],
      totalPrice: 0,
    }
    setCart(clearCart)
    storeData('cartItems', JSON.stringify(clearCart.items))
    storeData('cartTotalPrice', clearCart.totalPrice)
  }
  return <cartContext.Provider value={{ cart, addItem, decreaseItem, removeItem, clearCart }}>{children}</cartContext.Provider>
}
