import { Outlet } from 'react-router-dom'

import { AsideForAdminSite } from './AsideForAdminSite'
import { NavbarForAdminSite } from './NavbarForAdminSite'

export const AdminSite = () => {
  const hideAside = () => {
    const sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('hidden')
    sidebar.classList.toggle('lg:block')
  }
  return (
    <>
      <NavbarForAdminSite handleClick={hideAside} />
      <div className='relative flex flex-row w-full'>
        <AsideForAdminSite handleClick={hideAside} />
        <Outlet />
      </div>
    </>
  )
}
