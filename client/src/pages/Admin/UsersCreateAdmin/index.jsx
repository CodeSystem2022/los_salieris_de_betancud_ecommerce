import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { createUserAPI } from '../../../services/api/userAPI'

export const UsersCreateAdmin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [saveUserError, setSaveUserError] = useState(null)
  const navigate = useNavigate()

  const saveUser = async (data) => {
    const registered = await createUserAPI(data)
    if (registered.error) {
      setSaveUserError(registered.error)
      toast('Algo salió mal.!!', {
        style: {
          backgroundColor: 'red'
        },
      })
    } else {
      toast('Usuario creado', {
        style: {
          backgroundColor: 'green'
        }
      })
      setTimeout(() => {
        navigate('/admin/users')
      }, 2000)
    }
  }

  return (
    <div className='container max-w-full mx-auto md:py-24 px-6'>
      <div className='p-4 text-center font-semibold text-xl text-black'>
        Crear usuario
      </div>
      <div className='max-w-sm mx-auto px-6'>
        <div className='relative flex flex-wrap'>
          <div className='w-full relative'>
            <div className='md:mt-6'>
              {saveUserError instanceof Object &&
                <p className='w-full text-sm font-medium text-center leading-snug font-serif text-red-500'>{saveUserError.message}</p>}
              <form onSubmit={handleSubmit(saveUser)} className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
                <div className='relative'>
                  <p
                    className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute'
                  >
                    Nombre de usuario
                  </p>
                  <input
                    {...register('username', { required: true })}
                    placeholder='John123'
                    type='text'
                    className='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                  />
                  {errors.username && <p className='text-red-500'>Este campo es obligatorio</p>}
                  {saveUserError instanceof Array &&
                      saveUserError.map((error, index) => {
                        if (error.path === 'username') {
                          return <p className='text-red-500' key={index}>{error.msg}</p>
                        }
                        return null
                      })}
                </div>
                <div className='relative'>
                  <p className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute'>Email</p>
                  <input
                    {...register('email', { required: true })}
                    placeholder='123@ex.com'
                    type='email'
                    className='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                  />
                  {errors.email && <p className='text-red-500'>Este campo es obligatorio</p>}
                  {saveUserError instanceof Array &&
                      saveUserError.map((error, index) => {
                        if (error.path === 'email') {
                          return <p className='text-red-500' key={index}>{error.msg}</p>
                        }
                        return null
                      })}
                </div>
                <div className='relative'>
                  <p
                    className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute'
                  >
                    Es administrador.?
                  </p>
                  <select
                    {...register('isAdmin', { setValueAs: value => value === 'true' })}
                    placeholder='Confirmar Contraseña'
                    type='checkbox'
                    defaultValue={false}
                    className='border placeholder-gray-400 focus:outline-none
                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                    border-gray-300 rounded-md appearance-none'
                  >
                    <option value>Si</option>
                    <option defaultChecked value={false}>No</option>
                  </select>
                  {errors.isAdmin && <p className='text-red-500'>Este campo es obligatorio</p>}
                  {saveUserError instanceof Array &&
                      saveUserError.map((error, index) => {
                        if (error.path === 'isAdmin') {
                          return <p className='text-red-500' key={index}>{error.msg}</p>
                        }
                        return null
                      })}
                </div>
                <div className='relative'>
                  <p
                    className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute'
                  >
                    Contraseña
                  </p>
                  <input
                    {...register('password', { required: true })}
                    placeholder='Contraseña'
                    type='password'
                    className='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                  />
                  {errors.password && <p className='text-red-500'>Este campo es obligatorio</p>}
                  {saveUserError instanceof Array &&
                      saveUserError.map((error, index) => {
                        if (error.path === 'password') {
                          return <p className='text-red-500' key={index}>{error.msg}</p>
                        }
                        return null
                      })}
                </div>
                <div className='relative'>
                  <button
                    className='w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease'
                  >
                    Crear
                  </button>
                </div>
                <Toaster toastOptions={{
                  duration: 1500,
                  style: {
                    color: 'white'
                  }
                }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
