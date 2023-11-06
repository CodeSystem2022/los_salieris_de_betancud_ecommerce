/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUserAPI } from '../../../services/api/userAPI'
import { getUserOrdersAPI } from '../../../services/api/orderAPI'
import { Order } from '../../Private/UserProfile/components/orders'

export const UsersDetailAdmin = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  const [orders, setOrders] = useState([])

  const loadOrders = async () => {
    const userOrders = await getUserOrdersAPI({ userId })
    if (userOrders.data) {
      setOrders(userOrders.data)
    }
  }

  const calculateOrdersPrice = () => {
    return orders.reduce((acc, order) => acc + order.total, 0)
  }

  const loadUserData = async () => {
    const userData = await getUserAPI({ userId })
    if (userData.data) {
      setUser(userData.data)
    }
  }

  useEffect(() => {
    loadUserData()
    loadOrders()
  }, [])

  return !user
    ? <p>Not Found</p>
    : (

      <div className='pb-28'>
        <div className='py-28 w-full bg-white flex justify-center items-center'>
          <div className='h-56 w-72 absolute flex justify-center items-center'>
            <img
              className='object-cover h-20 w-20 rounded-full shadow-sm'
              src='/profile-gray.png'
              alt={user.username}
            />
          </div>
          <div
            className='h-56
            mx-4
            w-5/6
            bg-indigo-500
            rounded-3xl
            shadow-md
            sm:w-80 sm:mx-0
          '
          >
            <div className='h-1/2 w-full text-center px-3 py-5'>
              <h1 className='text-white'>Perfil</h1>
            </div>

            <div
              className='
              bg-white
              h-1/2
              w-full
              rounded-3xl
              flex flex-col
              justify-around
              items-center
            '
            >
              <div className='w-full h-1/2 flex justify-between items-center px-3 pt-2'>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-gray-500 text-xs'>Compras</h1>
                  <h1 className='text-gray-600 text-sm'>{orders.length}</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-gray-500 text-xs'>Gastado</h1>
                  <h1 className='text-gray-600 text-sm'>{calculateOrdersPrice()}</h1>
                </div>
              </div>
              <div className='w-full h-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-gray-700 font-bold'>{user.username}</h1>
                <h1 className='text-gray-500 text-sm'>{user.email}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center pt-4'>
          <div className='min-w-[375px] md:min-w-[700px] xl:min-w-[800px] mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6'>
            {orders
              ? orders.map(order => <Order order={order} key={order._id} />)
              : null}
          </div>
        </div>
      </div>
      )
}
