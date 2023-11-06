export const Order = ({ order }) => {
  return (
    <div
      className='
        relative
        p-2
        flex flex-grow !flex-row flex-col items-center justify-center
        rounded-2xl
        shadow-md shadow-gray-500
        hover:scale-110 duration-200
        cursor-pointer'
    >
      <div className='flex h-[60px] w-full flex-col items-center justify-center'>
        <div className='rounded-full bg-lightPrimary'>
          <span className='flex items-center text-brand-500'>
            <svg
              stroke='#6366f1'
              fill='#6366f1'
              strokeWidth='0'
              viewBox='0 0 24 24'
              className='h-7 w-7'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z' />
            </svg>
          </span>
        </div>
      </div>
      <div className='flex w-full flex-col justify-center items-center'>
        <span className='block py-1 font-dm text-2sm font-medium text-gray-600'>Total</span>
        <span className='text-xl font-bold text-navy-700 text-indigo-500'>${order.total}</span>
      </div>
    </div>
  )
}
