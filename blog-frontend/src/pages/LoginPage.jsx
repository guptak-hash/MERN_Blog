import { useContext } from 'react';
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext)
    const isValidEmail = email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
    const hasNoSpaces = !password.includes(' ');
    const isPasswordLongEnough = password.length >= 6;
    // const navigate=Navigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValidEmail && hasNoSpaces && isPasswordLongEnough) {
            // Submit to backend here
            try {
                const response = await fetch('http://localhost:8000/api/login', {
                    method: 'POST',
                    body: JSON.stringify({ email, password }),
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                })
                // console.log('response.status >> ',typeof response.status)
                if (response.status === 200) {
                    response.json().then(userInfo => {
                        setUserInfo(userInfo)
                    })
                    setRedirect(true);
                } else {
                    alert('Login Failed')
                }
            } catch (err) {
                alert('Login failed')
            }
            setEmail('');
            setPassword('');
        } else {
            alert('Check email or password format')
        }
    };

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (

        <form className='login' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type='email'
                placeholder='enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input type='password'
                placeholder='enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginPage