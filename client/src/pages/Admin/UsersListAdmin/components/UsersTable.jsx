import { useNavigate } from 'react-router-dom'

export const UsersTable = ({ usersList }) => {
  const navigate = useNavigate()

  const handleClick = ({ userId }) => (e) => {
    navigate(`/admin/users/${userId}`)
  }
  return (
    <>
      {usersList.length === 0
        ? (
          <div className='w-full pt-10'>
            <p className='p-10 bg-white rounded-xl font-medium text-center text-gray-600'>No hay usuarios registrados</p>
          </div>
          )
        : (
          <table className='w-full table-auto text-sm'>
            <thead>
              <tr className='text-sm leading-normal'>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Id</th>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Usuario</th>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Email</th>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Es administrador</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map(user => {
                return (
                  <tr onClick={handleClick({ userId: user._id })} className='hover:bg-grey-lighter hover:cursor-pointer' key={user._id}>
                    <td className='py-2 px-4 border-b border-grey-light'>{user._id}</td>
                    <td className='py-2 px-4 border-b border-grey-light'>{user.username}</td>
                    <td className='py-2 px-4 border-b border-grey-light'>{user.email}</td>
                    <td className='text-center py-2 px-4 border-b border-grey-light'>{user.isAdmin ? '✅' : '❌'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          )}
    </>
  )
}
