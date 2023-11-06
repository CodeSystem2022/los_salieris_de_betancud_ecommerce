import { NavLink } from 'react-router-dom'

import { useAuth } from '../services/hooks'

export const AsideForAdminSite = ({ handleClick }) => {
  const { logout } = useAuth()

  return (
    <aside id='sidebar' className='lg:block hidden bg-white w-64 h-screen rounded-none border-none'>
      <div className='p-4 space-y-4'>
        <NavLink onClick={handleClick} to='/admin' className={({ isActive, isPending }) => isActive ? 'relative px-4 py-3 flex items-center space-x-4 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-400 text-white' : 'relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray-500'} end>
          <i className='fas fa-home' />
          <span className='-mr-1 font-medium'>Inicio</span>
        </NavLink>
        <NavLink onClick={handleClick} to='/admin/users' className={({ isActive, isPending }) => isActive ? 'relative px-4 py-3 flex items-center space-x-4 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-400 text-white' : 'relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray-500'}>
          <i className='fas fa-user' />
          <span>Usuarios</span>
        </NavLink>
        <NavLink onClick={handleClick} to='/admin/products' className={({ isActive, isPending }) => isActive ? 'relative px-4 py-3 flex items-center space-x-4 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-400 text-white' : 'relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray-500'}>
          <i className='fas fa-store' />
          <span>Productos</span>
        </NavLink>
        <NavLink onClick={handleClick} to='/admin/orders' className={({ isActive, isPending }) => isActive ? 'relative px-4 py-3 flex items-center space-x-4 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-400 text-white' : 'relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray-500'}>
          <i className='fas fa-shop' />
          <span>Ordenes</span>
        </NavLink>
        <button onClick={logout} className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group'>
          <i className='fas fa-sign-out-alt' />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  )
}
