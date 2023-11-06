import { Link } from 'react-router-dom'

export const NavbarWithOutAuth = () => {
  return (
    <>
      <Link to='/shop' className='block shrink-0 text-indigo-500 px-2 py-1 rounded-xl active:scale-90 ease-in duration-100 hover:shadow-lg'>
        <span>Tienda</span>
      </Link>
      <Link to='/contact' className='block shrink-0 text-indigo-500 px-2 py-1 rounded-xl active:scale-90 ease-in duration-100 hover:shadow-lg'>
        <span>Contacto</span>
      </Link>
      <Link
        to='/sign-in'
        className='block shrink-0 bg-indigo-500 text-zinc-100 px-2 py-1 rounded-xl active:scale-90 ease-in duration-100 hover:shadow-lg'
      >
        Entrar
      </Link>
    </>
  )
}
