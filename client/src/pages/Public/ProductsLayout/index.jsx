/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { ProductCard } from './components/ProductCard'
import { getProductsAPI } from '../../../services/api/productAPI'
import { useCart } from '../../../services/hooks/useCart'
import { Loader } from '../../../components'

export const ProductsLayout = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const { clearCart } = useCart()

  const loadProducts = async () => {
    const productsList = await getProductsAPI()
    if (productsList.data) {
      setProducts(productsList.data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
    if (searchParams.get('collection_id')) {
      clearCart()
    }
  }, [products.length])

  return (
    <section>
      {isLoading
        ? <Loader />
        : products.length === 0
          ? (
            <div className='w-full pt-10'>
              <p className='p-10 bg-white rounded-xl font-medium text-center text-gray-600'>No hay productos</p>
            </div>
            )
          : (
            <div className='max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8'>
              <ul className='grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4'>
                {
                  products.map(product => {
                    return (product.stock <= 0) ? null : <ProductCard product={product} key={product._id} />
                  })
                }
              </ul>
            </div>
            )}
    </section>
  )
}
