import React from 'react'

const contact = () => {
  return (
    <section>
      <div className="container center justify-content">
        <h2 className='text-center'>Contact Us</h2>
        <form className='form-control card flex-center dir-column'>
          <input className='block p-2 border' type="text" placeholder='Full Name' name='user_name' required />
          <input className='block p-2 border' type="email" placeholder='Email' name='user_email' required />
          <input className='block p-2 border' type="text" placeholder='Subject' name='subjects' required />
          <textarea className='block p-2 border' name="message" cols='30' rows='10'></textarea>
          <button  type='submit' className='btn btn-primary'>Inquiry Now</button>
        </form>
      </div>
    </section>
  )
}

export default contact