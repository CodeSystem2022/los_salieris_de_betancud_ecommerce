import { useState, useEffect } from 'react'

import { getOrdersAPI } from '../../../services/api/orderAPI'
import { OrdersTable } from './components/OrdersTable'
import { CrudAdmin } from '../../../components/CrudAdmin'

export const OrdersListAdmin = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const loadOrders = async () => {
    const ordersList = await getOrdersAPI()
    if (ordersList.data) {
      setOrders(ordersList.data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadOrders()
  }, [orders.length])

  return (
    <CrudAdmin
      title='Ordenes Registrados'
      isLoading={isLoading}
      tableComponent={<OrdersTable ordersList={orders} />}
    />
  )
}
