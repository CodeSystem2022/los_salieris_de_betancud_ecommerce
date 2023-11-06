import { useState, useEffect } from 'react'

import { getProductsAPI } from '../../../services/api/productAPI'
import { ProductsTable } from './components/ProductsTable'
import { CrudAdmin } from '../../../components/CrudAdmin'

export const ProductsListAdmin = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const loadProducts = async () => {
    const productsList = await getProductsAPI()
    if (productsList.data) {
      setProducts(productsList.data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [products.length])

  return (
    <CrudAdmin
      title='Productos Registrados'
      createButtonName='Nuevo producto'
      createButtonPath='/admin/products/new'
      isLoading={isLoading}
      tableComponent={<ProductsTable productsList={products} />}
    />
  )
}
