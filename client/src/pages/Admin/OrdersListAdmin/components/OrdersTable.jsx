import { useNavigate } from 'react-router-dom'

export const OrdersTable = ({ ordersList }) => {
  const navigate = useNavigate()

  const handleClick = ({ order }) => (e) => {
    navigate(`/admin/orders/${order._id}`)
  }
  return (
    <>
      {ordersList.length === 0
        ? (
          <div className='w-full pt-10'>
            <p className='p-10 bg-white rounded-xl font-medium text-center text-gray-600'>No hay ordenes de compra</p>
          </div>
          )
        : (

          <table className='w-full table-auto text-sm'>
            <thead>
              <tr className='text-sm leading-normal'>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Usuario</th>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Cantidad</th>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Estado</th>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Monto</th>
              </tr>
            </thead>
            <tbody>
              {ordersList.map(order => {
                return (
                  <tr onClick={handleClick({ order })} className='hover:bg-grey-lighter hover:cursor-pointer' key={order._id}>
                    <td className='text-center py-2 px-4 border-b border-grey-light'>{order.userId}</td>
                    <td className='text-center py-2 px-4 border-b border-grey-light'>{order.amount}</td>
                    <td className='text-center py-2 px-4 border-b border-grey-light'>{order.status}</td>
                    <td className='text-center py-2 px-4 border-b border-grey-light'>${order.total}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          )}
    </>
  )
}
