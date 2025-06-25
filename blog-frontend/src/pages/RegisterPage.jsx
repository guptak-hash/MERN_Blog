// blog-frontend\src\pages\RegisterPage.jsx
import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Derived state - no need for separate useState
  const isValidEmail = email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
  const passwordsMatch = password === confirmPassword && password !== '';
  const hasNoSpaces = !password.includes(' ');
  const isPasswordLongEnough = password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidEmail && hasNoSpaces && isPasswordLongEnough && passwordsMatch) {
      console.log('Registration successful:', { email, password });
      // Submit to backend here
      try {
       const response= await fetch('https://mern-blog-backend-tixg.onrender.com/api/signup', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' }
        })
        if(response.status===200){
          alert('Registration Success')
        }else{
          alert('Registration Failed')
        }
      } catch (err) {
        alert('Registration failed')
      }
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      alert('Check email or password format')
    }
  };

  return (
    <form className='register' onSubmit={handleSubmit}>
      <h1>Register</h1>

      {/* Email Input */}
      <input
        type='email'
        placeholder='enter email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password Input */}
      <input
        type='password'
        placeholder='enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Confirm Password Input with Visual Feedback */}
      <div style={{ position: 'relative' }}>
        <input
          type='password'
          placeholder='confirm password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {passwordsMatch && (
          <span style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'green'
          }}>
            ✓
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={!passwordsMatch} // Disable if passwords don't match
      >
        Register
      </button>

      {/* Show error if passwords don't match */}
      {confirmPassword && !passwordsMatch && (
        <p style={{ color: 'red' }}>Passwords don't match!</p>
      )}
    </form>
  )
}

export default RegisterPage;





