/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getProductAPI } from '../../../services/api/productAPI'
import { BACKEND_URL } from '../../../contants'

export const ProductsDetailAdmin = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  const loadProduct = async () => {
    const prductData = await getProductAPI({ productId })
    if (prductData.data) {
      setProduct(prductData.data)
    }
  }

  useEffect(() => {
    loadProduct()
  }, [])

  return !product
    ? <p>Not Found</p>
    : (
      <section className='flex flex-col w-full justify-center'>
        <div className='w-full flex justify-center gap-20 items-center p-10'>
          <div className='w-1/3 group shadow-md rounded-md relative block overflow-hidden text-center center'>
            <img
              src={`${BACKEND_URL}${product.img}`}
              alt=''
              className='w-full object-cover transition duration-500 hover:scale-105 sm:h-72'
            />
            <div className='relative border border-gray-100 bg-white p-6'>
              <h3 className='mt-4 text-lg font-medium text-gray-900'>{product.title}</h3>
              <p className='mt-1.5 text-sm text-gray-700'>${product.price}</p>
            </div>
          </div>
          <div className='w-1/3'>
            <p>{product.desc}</p>
          </div>
        </div>
        <div className='w-full text-center p-4'>
          <Link
            to={`/admin/products/${product._id}/update`}
            state={{ product }}
            className='py-2 px-4 shadow-md rounded-xl text-indigo-500 hover:bg-indigo-500 hover:text-white duration-200'
          >Editar
          </Link>
        </div>
      </section>
      )
}
