import React from 'react'

const LoginPage = () => {
    return (

            <form className='login'>
                   <h1>Login</h1>
                <input type='email' placeholder='email' />
                <input type='password' placeholder='password' />
                <button>Login</button>
            </form>
    )
}

export default LoginPage