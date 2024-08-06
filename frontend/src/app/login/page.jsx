import React from 'react'


const Login = () => {
  return (

  <div className='flex justify-center items-center h-screen' >
     <div className="w-full max-w-md mx-auto">
      <div className='rounded-lg border-2 shadow p-8'>

      <h1 className='uppercase font-bold my-6 text-3xl text-center text-gray-600'>Login Page</h1>

      <form>
            <label htmlFor="username">User Name</label>
            <span className='text-sm ml-4 text-red-500'> </span>
            <input id='username' type="text" 
            className='border rounded w-full px-3 py-2 mb-4 ' 
            />


            <label htmlFor="password">Password</label>
            <span className='text-sm ml-4 text-red-500'> </span>
            <input id='username' type="text" 
            className='border rounded w-full px-3 py-2 mb-4 ' 
            />

            <button type='login'
            className='bg-blue-500  text-white py-3 px-2 rounded w-full mt-8'
            >Login
            </button>
      </form>

      </div>
    </div>
  </div>

  )
}

export default Login;