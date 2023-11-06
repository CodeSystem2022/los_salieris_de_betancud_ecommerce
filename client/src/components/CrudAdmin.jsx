import { Link } from 'react-router-dom'
import { Loader } from './Loader'

export const CrudAdmin = ({
  title = 'Recursos Registrados',
  createButtonName = null,
  createButtonPath = null,
  isLoading = true,
  tableComponent
}) => {
  return (
    <div className='relative w-full mt-8 bg-white p-4 shadow rounded-lg'>
      {!createButtonPath || !createButtonName
        ? null
        : (
          <div className='w-full text-right p-4'>
            <Link to={createButtonPath} className='py-2 px-4 shadow-md rounded-xl text-indigo-500 hover:bg-indigo-500 hover:text-white duration-200'>{createButtonName}</Link>
          </div>
          )}
      <h2 className='text-gray-500 text-lg font-semibold pb-4'>{title}</h2>
      <div className='my-1' />
      <div className='bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6' />
      {isLoading
        ? <Loader />
        : tableComponent}
    </div>
  )
}
