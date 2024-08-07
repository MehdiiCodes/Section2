import React from 'react'
import image from './next.svg';
import contact from './contact/page';

const Home = () => {

  const cartItems = 10;
  const displayMessage = (msg) => {
    return (
      <div className='border border-red-500 bg-red-100 p-3 rounded-md w-1/2 mx-auto my-3'>
        <span className='text-red-500 font-bold'>{msg}</span>
      </div>
    )
  }
  return (

    <>
      <div>
        {displayMessage('Oops! Your details are not correct')}
      </div>
      <div className='text-center'>My home Page</div>

      <h2 className='text-2xl text-center'>Cart Items:{cartItems + 5}</h2>
      <button className='btn'>My Button</button>

      <img src="/next.svg" alt="" />
      <img src={ image.src } alt="" />
      
    </>
  )
}

export default Home