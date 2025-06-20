import React from 'react'

const RegisterPage = () => {
  return (
    <form className='register'>
      <h1>Register</h1>
        <input type='email' placeholder='enter email'/>
        <input type='password' placeholder='enter password'/>
        <input type='password' placeholder='confirm password'/>
        <button>Register</button>
    </form>
  )
}

export default RegisterPage