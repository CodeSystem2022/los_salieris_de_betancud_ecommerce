import React from 'react'
import { useLocation } from 'react-router-dom'
import { BACKEND_URL } from '../../../contants'
import { useCart } from '../../../services/hooks/useCart'
import { useAuth } from '../../../services/hooks'

export const ProductDetail = () => {
  const { user } = useAuth()
  const { addItem } = useCart()
  const { state: { product } } = useLocation()

  const handleClick = () => {
    addItem(product)
  }

  return (
    <section className='flex justify-center gap-20 items-center p-10'>
      <div className='w-1/3 group shadow-md rounded-md relative block overflow-hidden text-center center'>
        <img
          src={`${BACKEND_URL}${product.img}`}
          alt=''
          className='w-full object-contain transition duration-500 hover:scale-105 sm:h-72'
        />
        <div className='relative border border-gray-100 bg-white p-6'>
          <h3 className='mt-4 text-lg font-medium text-gray-900'>{product.title}</h3>
          <p className='mt-1.5 text-sm text-gray-700'>${product.price}</p>
          {!user?.isAdmin && (
            <div className='mt-4 grid place-content-center'>
              <button
                onClick={handleClick}
                className='block rounded-xl shadow-md hover:bg-indigo-500 hover:text-white p-4 text-sm font-medium transition duration-100 active:scale-95'
              >
                Agregar al Carrito
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='w-1/3'>
        <p>{product.desc}</p>
      </div>
    </section>
  )
}
