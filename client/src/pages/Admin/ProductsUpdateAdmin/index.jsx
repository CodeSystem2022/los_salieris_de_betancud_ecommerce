import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'

import { updateProductAPI } from '../../../services/api/productAPI'

export const ProductsUpdateAdmin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [saveError, setSaveError] = useState(null)
  const navigate = useNavigate()
  const { state: { product } } = useLocation()

  const saveProduct = async (data) => {
    const productData = await updateProductAPI({ productId: product._id, data })
    if (productData.error) {
      setSaveError(productData.error)
      toast('Algo salió mal.!!', {
        style: {
          backgroundColor: 'red'
        },
      })
    } else {
      toast('Producto creado', {
        style: {
          backgroundColor: 'green'
        }
      })
      setTimeout(() => {
        navigate('/admin/products')
      }, 2000)
    }
  }

  return (
    <div className='container max-w-full mx-auto md:py-24 px-6'>
      <div className='p-4 text-center font-semibold text-xl text-black'>
        Actualizar producto
      </div>
      <div className='max-w-sm mx-auto px-6'>
        <div className='relative flex flex-wrap'>
          <div className='w-full relative'>
            <div className='md:mt-6'>
              {saveError instanceof Object &&
                <p className='w-full text-sm font-medium text-center leading-snug font-serif text-red-500'>{saveError.message}</p>}
              <form onSubmit={handleSubmit(saveProduct)} className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
                <div className='relative'>
                  <p
                    className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute'
                  >
                    Nombre del producto
                  </p>
                  <input
                    {...register('title', { required: true })}
                    placeholder='Nombre del producto...'
                    type='text'
                    defaultValue={product.title}
                    className='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                  />
                  {errors.title && <p className='text-red-500'>Este campo es obligatorio</p>}
                  {saveError instanceof Array &&
                      saveError.map((error, index) => {
                        if (error.path === 'title') {
                          return <p className='text-red-500' key={index}>{error.msg}</p>
                        }
                        return null
                      })}
                </div>
                <div className='relative'>
                  <p className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute'>Descripción</p>
                  <input
                    {...register('desc', { required: true })}
                    placeholder='Descripción del producto...'
                    type='text'
                    defaultValue={product.desc}
                    className='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                  />
                  {errors.desc && <p className='text-red-500'>Este campo es obligatorio</p>}
                  {saveError instanceof Array &&
                      saveError.map((error, index) => {
                        if (error.path === 'desc') {
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
                    Imagen del producto
                  </p>
                  <input
                    {...register('img', { required: false })}
                    name='img'
                    type='file'
                    className='border placeholder-gray-400 focus:outline-none
                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                    border-gray-300 rounded-md appearance-none'
                  />
                  {errors.img && <p className='text-red-500'>Este campo es obligatorio</p>}
                  {saveError instanceof Array &&
                      saveError.map((error, index) => {
                        if (error.path === 'img') {
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
                    Categoria
                  </p>
                  <input
                    {...register('categories', { setValueAs: value => value.toLowerCase() })}
                    type='text'
                    placeholder='Categoria'
                    defaultValue={product.categories.join(',')}
                    className='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                  />
                  {errors.categories && <p className='text-red-500'>Este campo es obligatorio</p>}
                  {saveError instanceof Array &&
                      saveError.map((error, index) => {
                        if (error.path === 'categories') {
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
                    Precio
                  </p>
                  <input
                    {...register('price', { required: true, setValueAs: value => Number(value), pattern: { value: /^[0-9]+$/, message: 'Invalid value' } })}
                    placeholder='Nombre del producto...'
                    type='text'
                    defaultValue={product.price}
                    className='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                  />
                  {errors.price && <p className='text-red-500'>Este campo es obligatorio</p>}
                  {saveError instanceof Array &&
                      saveError.map((error, index) => {
                        if (error.path === 'price') {
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
                    Cantidad
                  </p>
                  <input
                    {...register('stock', { required: true, setValueAs: value => Number(value), pattern: { value: /^[0-9]+$/, message: 'Invalid value' } })}
                    placeholder='Nombre del producto...'
                    type='text'
                    defaultValue={product.stock}
                    className='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                  />
                  {errors.stock && <p className='text-red-500'>Este campo es obligatorio</p>}
                  {saveError instanceof Array &&
                      saveError.map((error, index) => {
                        if (error.path === 'stock') {
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
