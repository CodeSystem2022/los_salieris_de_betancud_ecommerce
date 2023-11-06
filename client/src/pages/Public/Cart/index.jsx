import { Toaster, toast } from 'react-hot-toast'

import { initPaymentAPI } from '../../../services/api/paymentAPI'
import { useCart } from '../../../services/hooks/useCart'
import { useAuth } from '../../../services/hooks/useAuth'

export const Cart = () => {
  const { user } = useAuth()
  const { cart: { items, totalPrice }, addItem, decreaseItem, removeItem } = useCart()

  const handleClick = ({ action, item = {} }) => async (e) => {
    if (action === 'add') { return addItem(item) }
    if (action === 'decrease') { return decreaseItem(item) }
    if (action === 'remove') { return removeItem(item) }
    if (action === 'checkout' && items.length > 0) {
      const paymentFlow = await initPaymentAPI({ items })
      if (paymentFlow.error) {
        if (paymentFlow.error instanceof Array) paymentFlow.error.forEach(error => toast(error.msg))
        else toast(paymentFlow.error)
      } else {
        location.replace(paymentFlow.data.init_point)
      }
    }
  }

  return (
    <section className='flex justify-center items-center min-h-[calc(100vh-104px)]'>
      <div className='shadow-xl w-96 rounded-xl'>
        {items.length > 0
          ? items.map(item => {
            return (
              <div className='p-2 flex bg-white hover:bg-zinc-50 cursor-pointer border-b border-gray-100' key={item.id}>
                <div className='p-2 w-12'><img src={item.picture_url} alt={item.title} /></div>
                <div className='flex-auto text-sm w-32'>
                  <div className='font-bold'>{item.title}</div>
                  <div className='truncate'>{item.description.slice(0, 20)}</div>
                  <div className='text-gray-400 py-1 text-center'>
                    <button
                      onClick={handleClick({ action: 'decrease', item })}
                      className='font-bold px-2 shadow-zinc-200 shadow-sm rounded-sm active:scale-90 bg-white'
                    >-
                    </button>
                    <span className='px-2'>x{item.quantity}</span>
                    <button
                      onClick={handleClick({ action: 'add', item })}
                      className='font-bold px-2 shadow-zinc-200 shadow-sm rounded-sm active:scale-90 bg-white'
                    >+
                    </button>
                  </div>
                </div>
                <div className='flex flex-col w-18 font-medium items-end px-2'>
                  <button
                    onClick={handleClick({ action: 'remove', item })}
                    className='w-4 h-4 mb-6 rounded-full cursor-pointer text-indigo-500 hover:shadow-md hover:scale-110 active:scale-90'
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-trash-2 '>
                      <polyline points='3 6 5 6 21 6' />
                      <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
                      <line x1='10' y1='11' x2='10' y2='17' />
                      <line x1='14' y1='11' x2='14' y2='17' />
                    </svg>
                  </button>
                  ${item.unit_price}
                </div>
              </div>
            )
          })
          : <span className='block text-center text-indigo-500 py-4'>Carrito vacío</span>}
        <div className='p-4 justify-center flex'>
          <button
            disabled={(items.length === 0) || !user}
            onClick={handleClick({ action: 'checkout' })}
            className={`text-base undefined focus:outline-none flex justify-center px-4 py-2 rounded-2xl text-indigo-500 shadow-lg ${items.length > 0 && user ? 'hover:bg-indigo-500 hover:text-white duration-150 ease-in-out active:scale-90 cursor-pointer' : null}`}
          >
            Total ${totalPrice}
          </button>
        </div>
      </div>
      <Toaster toastOptions={{
        duration: 3000,
        style: {
          backgroundColor: 'red',
          color: 'white'
        }
      }}
      />
    </section>
  )
}
