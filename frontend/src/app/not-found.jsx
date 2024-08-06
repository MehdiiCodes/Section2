import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
        <h1 className='text-9xl'>404</h1>
        <p>Page not Found</p>
        <button className='bg-black text-white rounded px-3 py-2'>
            Back to Home
        </button>
    </div>

</div>
  )
}

export default NotFound