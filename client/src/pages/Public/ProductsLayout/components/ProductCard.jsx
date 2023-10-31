import { Link } from 'react-router-dom'

import { useCart } from '../../../../services/hooks/useCart'

export const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  const handleClick = () => {
    addItem(product)
  }

  return (
    <li className='shadow-md bg-zinc-50 rounded-xl'>
      <Link to={`/shop/${product.title}`} state={{ product }} className='block overflow-hidden group'>
        <img
          src={`http://localhost:3000${product.img}`}
          alt={product.title}
          className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
        />

        <div className='relative pt-3'>
          <h3
            className='text-sm text-center text-gray-700'
          >
            {product.title}
          </h3>

        </div>
      </Link>
      <div className='flex flex-col md:flex-row justify-between items-center text-gray-900 p-4'>
        <p className='font-bold text-xl'>${product.price}</p>
        <button
          onClick={handleClick}
          className='px-4 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-indigo-500 hover:text-white shadow-lg text-indigo-500 focus:outline-none font-bold'
        >+
        </button>
      </div>
    </li>
  )
}
