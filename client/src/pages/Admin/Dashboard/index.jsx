import { useState, useEffect } from 'react'

import { getOrdersAPI } from '../../../services/api/orderAPI'
import { Loader } from '../../../components'

export const Dashboard = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const loadOrders = async () => {
    const ordersList = await getOrdersAPI({ toDay: true })
    if (ordersList.data) {
      setOrders(ordersList.data)
      setIsLoading(false)
    }
  }

  const calculateOrdersPrice = () => {
    return orders.reduce((acc, order) => acc + order.total, 0)
  }

  useEffect(() => {
    loadOrders()
  }, [])

  return (
    <div className='bg-gray-200 lg:flex w-full'>
      <div className='lg:w-full px-6 py-8'>
        <div className='lg:flex gap-4 items-stretch'>
          <div className='bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]'>
            <div className='flex justify-center items-center space-x-5 h-full'>
              <div>
                <p>Ventas</p>
                <h2 className='text-4xl font-bold text-gray-600'>${calculateOrdersPrice()}</h2>
              </div>
              <img src='https://www.emprenderconactitud.com/img/Wallet.png' alt='wallet' className='h-24 md:h-20 w-38' />
            </div>
          </div>
          <div className='bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]'>
            <div className='flex flex-wrap justify-between h-full'>
              <div className='flex-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2'>
                <i className='fas fa-hand-holding-usd text-white text-4xl' />
              </div>

              <div className='flex-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2'>
                <i className='fas fa-exchange-alt text-white text-4xl' />
              </div>
              <div className='flex-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2'>
                <i className='fas fa-qrcode text-white text-4xl' />
              </div>
            </div>
          </div>
        </div>
        {isLoading
          ? <Loader />
          : orders.length === 0
            ? (
              <div className='w-full pt-10'>
                <p className='p-10 bg-white rounded-xl font-medium text-center text-gray-600'>Aún no se ha realizado compras hoy</p>
              </div>
              )
            : (
              <div className='bg-white rounded-lg p-4 shadow-md my-4'>
                <table className='table-auto w-full'>
                  <thead>
                    <tr>
                      <th className='px-4 py-2 text-left border-b-2 w-full'>
                        <h2 className='text-ml font-bold text-gray-600'>Compras</h2>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orders.map(order => {
                        return (
                          <tr className='border-b w-full' key={order._id}>
                            <td className='px-4 py-2 text-left align-top w-1/2'>
                              <div>
                                <h2>{order.status.toUpperCase()}</h2>
                                <p>{order.createdAt}</p>
                              </div>
                            </td>
                            <td className='px-4 py-2 text-right text-cyan-500 w-1/2'>
                              <p><span>${order.total}</span></p>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              )}
      </div>
    </div>
  )
}
