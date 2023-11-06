/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getOrderAPI } from '../../../services/api/orderAPI'
import { getProductsAPI } from '../../../services/api/productAPI'
import { BACKEND_URL } from '../../../contants'

export const OrdersDetailAdmin = () => {
  const { orderId } = useParams()
  const [order, setOrder] = useState(null)
  const [products, setProducts] = useState([])

  const loadOrder = async () => {
    const orderData = await getOrderAPI({ orderId })
    if (orderData.data) {
      setOrder(orderData.data)
      await loadProducts(orderData.data.products)
    }
  }

  const loadProducts = async (orderProducts) => {
    const productsList = await getProductsAPI()
    if (productsList.data) {
      const productsIds = orderProducts.map(product => product.productId)
      const _products = []
      productsList.data.forEach(product => {
        if (productsIds.includes(product._id)) {
          _products.push({
            ...product,
            quantity: orderProducts.find(p => p.productId === product._id).quantity
          })
        }
      })
      setProducts(_products)
    }
  }

  useEffect(() => {
    loadOrder()
  }, [])

  return !order
    ? <p>Not Found</p>
    : (
      <section className='w-full flex justify-center items-center'>
        <div className='shadow-xl w-96 rounded-xl'>
          {products.length > 0
            ? products.map(product => {
              return (
                <div className='p-2 flex items-center bg-white hover:bg-zinc-50 cursor-default border-b border-gray-100' key={product._id}>
                  <div className='p-2 w-12'><img src={`${BACKEND_URL}${product.img}`} alt={product.title} /></div>
                  <div className='flex-auto text-sm w-32'>
                    <div className='font-bold'>{product.title}</div>
                    <div className='truncate'>{product.desc.slice(0, 20)}</div>
                    <div className='text-gray-400 py-1 text-center' />
                  </div>
                  <span className='px-5 font-medium'>x {product.quantity}</span>
                </div>
              )
            })
            : null}
          <div className='p-4 justify-center flex'>
            <div
              className='text-base font-medium undefined focus:outline-none flex justify-center px-4 py-2 rounded-2xl text-indigo-500 shadow-lg cursor-default'
            >
              Total ${order?.total}
            </div>
          </div>
        </div>
      </section>
      )
}
