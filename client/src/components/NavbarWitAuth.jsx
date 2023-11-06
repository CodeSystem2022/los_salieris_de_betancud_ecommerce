import { Link } from 'react-router-dom'

export const NavbarWithAuth = ({ user }) => {
  return (
    <>
      <Link to='/shop' className='block shrink-0 text-indigo-500 px-2 py-1 rounded-xl active:scale-90 ease-in duration-100 hover:shadow-lg'>
        <span>Tienda</span>
      </Link>
      <Link to='/contact' className='block shrink-0'>
        <span className='block shrink-0 text-indigo-500 px-2 py-1 rounded-xl active:scale-90 ease-in duration-100 hover:shadow-lg'>Contacto</span>
      </Link>
      {!user.isAdmin
        ? null
        : (
          <Link to='/admin' className='block shrink-0'>
            <span className='block shrink-0 text-indigo-500 px-2 py-1 rounded-xl active:scale-90 ease-in duration-100 hover:shadow-lg'>Admin</span>
          </Link>
          )}
      <Link to='/profile' className='block shrink-0'>
        <span className='sr-only'>Perfil</span>
        <img
          alt={user.username}
          src='/profile.png'
          className='h-10 w-10 rounded-full object-cover'
        />
      </Link>
    </>
  )
}
