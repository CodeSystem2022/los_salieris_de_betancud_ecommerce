import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'

import { signUp } from '../../../services/api/userAPI'

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [signUpErrors, setSignUpErrors] = useState(null)
  const navigate = useNavigate()

  const registerUser = async (data) => {
    const registered = await signUp(data)
    if (registered.error) {
      setSignUpErrors(registered.error)
      toast('Algo salió mal.!!', {
        style: {
          backgroundColor: 'red'
        },
      })
    } else {
      toast('Todo fué perfecto, ya podes iniciar sesíon.!!', {
        style: {
          backgroundColor: 'green'
        }
      })
      setTimeout(() => {
        navigate('/sign-in')
      }, 2000)
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-white relative lg:py-20'>
        <div
          className='flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row'
        >
          <div className='flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row'>
            <div className='w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12'>
              <div className='flex flex-col items-center justify-center w-full h-full relative lg:pr-10'>
                <Link to='/'><img src='/24-7.png' className='btn-' /></Link>
                <span>o inicia sesión <Link to='/sign-in' className='text-indigo-500'>aquí</Link></span>
              </div>
            </div>
            <div className='w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12'>
              <div
                className='flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10'
              >
                <p className='w-full text-4xl font-medium text-center leading-snug font-serif'>Registrarse</p>
                {signUpErrors instanceof Object &&
                  <p className='w-full text-sm font-medium text-center leading-snug font-serif text-red-500'>{signUpErrors.message}</p>}
                <form onSubmit={handleSubmit(registerUser)} className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
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
                    {signUpErrors instanceof Array &&
                      signUpErrors.map((error, index) => {
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
                    {signUpErrors instanceof Array &&
                      signUpErrors.map((error, index) => {
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
                    {signUpErrors instanceof Array &&
                      signUpErrors.map((error, index) => {
                        if (error.path === 'password') {
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
                      Confirmar Contraseña
                    </p>
                    <input
                      {...register('second_password', { required: true })}
                      placeholder='Confirmar Contraseña'
                      type='password'
                      className='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                    />
                    {errors.second_password && <p className='text-red-500'>Este campo es obligatorio</p>}
                    {signUpErrors instanceof Array &&
                      signUpErrors.map((error, index) => {
                        if (error.path === 'second_password') {
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
                      Submit
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
              <svg
                viewBox='0 0 91 91'
                className='absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
            fill-current'
              >
                <g stroke='none' strokeWidth='1' fillRule='evenodd'>
                  <g fillRule='nonzero'>
                    <g>
                      <g>
                        <circle cx='3.261' cy='3.445' r='2.72' />
                        <circle cx='15.296' cy='3.445' r='2.719' />
                        <circle cx='27.333' cy='3.445' r='2.72' />
                        <circle cx='39.369' cy='3.445' r='2.72' />
                        <circle cx='51.405' cy='3.445' r='2.72' />
                        <circle cx='63.441' cy='3.445' r='2.72' />
                        <circle cx='75.479' cy='3.445' r='2.72' />
                        <circle cx='87.514' cy='3.445' r='2.719' />
                      </g>
                      <g transform='translate(0 12)'>
                        <circle cx='3.261' cy='3.525' r='2.72' />
                        <circle cx='15.296' cy='3.525' r='2.719' />
                        <circle cx='27.333' cy='3.525' r='2.72' />
                        <circle cx='39.369' cy='3.525' r='2.72' />
                        <circle cx='51.405' cy='3.525' r='2.72' />
                        <circle cx='63.441' cy='3.525' r='2.72' />
                        <circle cx='75.479' cy='3.525' r='2.72' />
                        <circle cx='87.514' cy='3.525' r='2.719' />
                      </g>
                      <g transform='translate(0 24)'>
                        <circle cx='3.261' cy='3.605' r='2.72' />
                        <circle cx='15.296' cy='3.605' r='2.719' />
                        <circle cx='27.333' cy='3.605' r='2.72' />
                        <circle cx='39.369' cy='3.605' r='2.72' />
                        <circle cx='51.405' cy='3.605' r='2.72' />
                        <circle cx='63.441' cy='3.605' r='2.72' />
                        <circle cx='75.479' cy='3.605' r='2.72' />
                        <circle cx='87.514' cy='3.605' r='2.719' />
                      </g>
                      <g transform='translate(0 36)'>
                        <circle cx='3.261' cy='3.686' r='2.72' />
                        <circle cx='15.296' cy='3.686' r='2.719' />
                        <circle cx='27.333' cy='3.686' r='2.72' />
                        <circle cx='39.369' cy='3.686' r='2.72' />
                        <circle cx='51.405' cy='3.686' r='2.72' />
                        <circle cx='63.441' cy='3.686' r='2.72' />
                        <circle cx='75.479' cy='3.686' r='2.72' />
                        <circle cx='87.514' cy='3.686' r='2.719' />
                      </g>
                      <g transform='translate(0 49)'>
                        <circle cx='3.261' cy='2.767' r='2.72' />
                        <circle cx='15.296' cy='2.767' r='2.719' />
                        <circle cx='27.333' cy='2.767' r='2.72' />
                        <circle cx='39.369' cy='2.767' r='2.72' />
                        <circle cx='51.405' cy='2.767' r='2.72' />
                        <circle cx='63.441' cy='2.767' r='2.72' />
                        <circle cx='75.479' cy='2.767' r='2.72' />
                        <circle cx='87.514' cy='2.767' r='2.719' />
                      </g>
                      <g transform='translate(0 61)'>
                        <circle cx='3.261' cy='2.846' r='2.72' />
                        <circle cx='15.296' cy='2.846' r='2.719' />
                        <circle cx='27.333' cy='2.846' r='2.72' />
                        <circle cx='39.369' cy='2.846' r='2.72' />
                        <circle cx='51.405' cy='2.846' r='2.72' />
                        <circle cx='63.441' cy='2.846' r='2.72' />
                        <circle cx='75.479' cy='2.846' r='2.72' />
                        <circle cx='87.514' cy='2.846' r='2.719' />
                      </g>
                      <g transform='translate(0 73)'>
                        <circle cx='3.261' cy='2.926' r='2.72' />
                        <circle cx='15.296' cy='2.926' r='2.719' />
                        <circle cx='27.333' cy='2.926' r='2.72' />
                        <circle cx='39.369' cy='2.926' r='2.72' />
                        <circle cx='51.405' cy='2.926' r='2.72' />
                        <circle cx='63.441' cy='2.926' r='2.72' />
                        <circle cx='75.479' cy='2.926' r='2.72' />
                        <circle cx='87.514' cy='2.926' r='2.719' />
                      </g>
                      <g transform='translate(0 85)'>
                        <circle cx='3.261' cy='3.006' r='2.72' />
                        <circle cx='15.296' cy='3.006' r='2.719' />
                        <circle cx='27.333' cy='3.006' r='2.72' />
                        <circle cx='39.369' cy='3.006' r='2.72' />
                        <circle cx='51.405' cy='3.006' r='2.72' />
                        <circle cx='63.441' cy='3.006' r='2.72' />
                        <circle cx='75.479' cy='3.006' r='2.72' />
                        <circle cx='87.514' cy='3.006' r='2.719' />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                viewBox='0 0 91 91'
                className='absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
            fill-current'
              >
                <g stroke='none' strokeWidth='1' fillRule='evenodd'>
                  <g fillRule='nonzero'>
                    <g>
                      <g>
                        <circle cx='3.261' cy='3.445' r='2.72' />
                        <circle cx='15.296' cy='3.445' r='2.719' />
                        <circle cx='27.333' cy='3.445' r='2.72' />
                        <circle cx='39.369' cy='3.445' r='2.72' />
                        <circle cx='51.405' cy='3.445' r='2.72' />
                        <circle cx='63.441' cy='3.445' r='2.72' />
                        <circle cx='75.479' cy='3.445' r='2.72' />
                        <circle cx='87.514' cy='3.445' r='2.719' />
                      </g>
                      <g transform='translate(0 12)'>
                        <circle cx='3.261' cy='3.525' r='2.72' />
                        <circle cx='15.296' cy='3.525' r='2.719' />
                        <circle cx='27.333' cy='3.525' r='2.72' />
                        <circle cx='39.369' cy='3.525' r='2.72' />
                        <circle cx='51.405' cy='3.525' r='2.72' />
                        <circle cx='63.441' cy='3.525' r='2.72' />
                        <circle cx='75.479' cy='3.525' r='2.72' />
                        <circle cx='87.514' cy='3.525' r='2.719' />
                      </g>
                      <g transform='translate(0 24)'>
                        <circle cx='3.261' cy='3.605' r='2.72' />
                        <circle cx='15.296' cy='3.605' r='2.719' />
                        <circle cx='27.333' cy='3.605' r='2.72' />
                        <circle cx='39.369' cy='3.605' r='2.72' />
                        <circle cx='51.405' cy='3.605' r='2.72' />
                        <circle cx='63.441' cy='3.605' r='2.72' />
                        <circle cx='75.479' cy='3.605' r='2.72' />
                        <circle cx='87.514' cy='3.605' r='2.719' />
                      </g>
                      <g transform='translate(0 36)'>
                        <circle cx='3.261' cy='3.686' r='2.72' />
                        <circle cx='15.296' cy='3.686' r='2.719' />
                        <circle cx='27.333' cy='3.686' r='2.72' />
                        <circle cx='39.369' cy='3.686' r='2.72' />
                        <circle cx='51.405' cy='3.686' r='2.72' />
                        <circle cx='63.441' cy='3.686' r='2.72' />
                        <circle cx='75.479' cy='3.686' r='2.72' />
                        <circle cx='87.514' cy='3.686' r='2.719' />
                      </g>
                      <g transform='translate(0 49)'>
                        <circle cx='3.261' cy='2.767' r='2.72' />
                        <circle cx='15.296' cy='2.767' r='2.719' />
                        <circle cx='27.333' cy='2.767' r='2.72' />
                        <circle cx='39.369' cy='2.767' r='2.72' />
                        <circle cx='51.405' cy='2.767' r='2.72' />
                        <circle cx='63.441' cy='2.767' r='2.72' />
                        <circle cx='75.479' cy='2.767' r='2.72' />
                        <circle cx='87.514' cy='2.767' r='2.719' />
                      </g>
                      <g transform='translate(0 61)'>
                        <circle cx='3.261' cy='2.846' r='2.72' />
                        <circle cx='15.296' cy='2.846' r='2.719' />
                        <circle cx='27.333' cy='2.846' r='2.72' />
                        <circle cx='39.369' cy='2.846' r='2.72' />
                        <circle cx='51.405' cy='2.846' r='2.72' />
                        <circle cx='63.441' cy='2.846' r='2.72' />
                        <circle cx='75.479' cy='2.846' r='2.72' />
                        <circle cx='87.514' cy='2.846' r='2.719' />
                      </g>
                      <g transform='translate(0 73)'>
                        <circle cx='3.261' cy='2.926' r='2.72' />
                        <circle cx='15.296' cy='2.926' r='2.719' />
                        <circle cx='27.333' cy='2.926' r='2.72' />
                        <circle cx='39.369' cy='2.926' r='2.72' />
                        <circle cx='51.405' cy='2.926' r='2.72' />
                        <circle cx='63.441' cy='2.926' r='2.72' />
                        <circle cx='75.479' cy='2.926' r='2.72' />
                        <circle cx='87.514' cy='2.926' r='2.719' />
                      </g>
                      <g transform='translate(0 85)'>
                        <circle cx='3.261' cy='3.006' r='2.72' />
                        <circle cx='15.296' cy='3.006' r='2.719' />
                        <circle cx='27.333' cy='3.006' r='2.72' />
                        <circle cx='39.369' cy='3.006' r='2.72' />
                        <circle cx='51.405' cy='3.006' r='2.72' />
                        <circle cx='63.441' cy='3.006' r='2.72' />
                        <circle cx='75.479' cy='3.006' r='2.72' />
                        <circle cx='87.514' cy='3.006' r='2.719' />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
