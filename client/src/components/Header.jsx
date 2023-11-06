import { Link } from 'react-router-dom'

import { NavbarWithAuth } from './NavbarWitAuth'
import { NavbarWithOutAuth } from './NavbarWitOutAuth'
import { useAuth } from '../services/hooks'
import { useCart } from '../services/hooks/useCart'

export const Header = ({ children }) => {
  const { user } = useAuth()
  const { cart } = useCart()

  return (
    <>
      <header className='sticky top-0 bg-white z-10 shadow-sm h-60px'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-end gap-4'>
            <Link to='/' className='absolute left-10'><img src='/24-7.png' alt='24Siete' width={56} height={56} /></Link>
            <nav className='flex items-center gap-4'>
              {user?.isAdmin
                ? null
                : (
                  <Link
                    to='/cart'
                    className='relative block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:shadow-lg'
                  >
                    <span className='sr-only'>Carrito</span>
                    <span className='absolute top-0 right-0.5 text-indigo-500'>{cart.items.length}</span>
                    <svg
                      className='h-5 w-5'
                      fill='#6366F1' height='24px' width='24px' version='1.1' xmlns='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' enableBackground='new 0 0 512 512' stroke='#6366F1' data-darkreader-inline-fill='' data-darkreader-inline-stroke=''
                    ><path d='m464.5,301.1l36.5-178h-359.7l-12.5-59.2-108.4-52.9-9.4,18.7 99,47.8 50,238.8h289c0,0 28.5,17.9 17.5,40.5-4.9,7-12.5,15.6-26.1,15.6h-287.6v20.6h287.7c19.8,0 36.5-10.4 45.9-27 18.4-34.4-21.9-64.9-21.9-64.9zm-286.7-5.7l-32.3-151.6h330.5l-31.3,151.6h-266.9z' /> <path d='m212.2,422.1c-21.9,0-39.6,17.6-39.6,39.4s17.7,39.4 39.6,39.4 39.6-17.6 39.6-39.4-17.7-39.4-39.6-39.4zm0,58.1c-10.4,0-18.8-8.3-18.8-18.7s8.3-18.7 18.8-18.7 18.8,8.3 18.8,18.7-8.4,18.7-18.8,18.7z' /> <path d='m424.9,422.1c-21.9,0-39.6,17.6-39.6,39.4s17.7,39.5 39.6,39.5 40.7-17.6 39.6-39.4c0-21.8-17.7-39.5-39.6-39.5zm18.8,39.5c0,10.4-8.3,18.7-18.8,18.7s-18.8-8.3-18.8-18.7 8.3-18.7 18.8-18.7 19.8,8.3 18.8,18.7z' />
                    </svg>
                  </Link>
                  )}
              {user
                ? <NavbarWithAuth user={user} />
                : <NavbarWithOutAuth />}
            </nav>
          </div>
        </div>
      </header>
      {children}
    </>
  )
}
