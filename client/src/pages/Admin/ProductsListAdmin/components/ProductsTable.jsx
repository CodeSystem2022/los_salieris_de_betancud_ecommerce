import { useNavigate } from 'react-router-dom'

export const ProductsTable = ({ productsList }) => {
  const navigate = useNavigate()

  const handleClick = ({ productId }) => (e) => {
    navigate(`/admin/products/${productId}`)
  }
  return (
    <>
      {productsList.length === 0
        ? (
          <div className='w-full pt-10'>
            <p className='p-10 bg-white rounded-xl font-medium text-center text-gray-600'>No hay productos</p>
          </div>
          )
        : (
          <table className='w-full table-auto text-sm'>
            <thead>
              <tr className='text-sm leading-normal'>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Nombre</th>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Descripción</th>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Precio</th>
                <th className='py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light'>Stock</th>
              </tr>
            </thead>
            <tbody>
              {productsList.map(product => {
                return (
                  <tr onClick={handleClick({ productId: product._id })} className='hover:bg-grey-lighter hover:cursor-pointer' key={product._id}>
                    <td className='py-2 px-4 border-b border-grey-light'>{product.title}</td>
                    <td className='py-2 px-4 border-b border-grey-light'>
                      {product.desc.length > 22 ? product.desc.slice(0, 25) + '...' : product.desc}
                    </td>
                    <td className='text-center py-2 px-4 border-b border-grey-light'>${product.price}</td>
                    <td className='text-center py-2 px-4 border-b border-grey-light'>{product.stock}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          )}
    </>
  )
}
