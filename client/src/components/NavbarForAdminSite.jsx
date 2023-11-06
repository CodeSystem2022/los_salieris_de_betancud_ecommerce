export const NavbarForAdminSite = ({ handleClick }) => {
  return (
    <nav className='bg-white border-b border-gray-300'>
      <div className='flex justify-between items-center px-9'>
        <button onClick={handleClick} id='menu-button' className='lg:hidden'>
          <i className='fas fa-bars text-cyan-500 text-lg' />
        </button>
        <div className='ml-1'>
          <img src='/24-7.png' alt='logo' className='h-20 w-28' />
        </div>
        <div className='space-x-4' />
      </div>
    </nav>
  )
}
