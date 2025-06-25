import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext)
  const navigate = useNavigate();
  // const [redirect, setRedirect] = useState(false)
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await fetch('https://mern-blog-backend-tixg.onrender.com/api/profile', {
          method: 'GET',
          credentials: 'include'
        })
        const userInfo = await response.json()
        setUserInfo(userInfo)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUserDetail();
  }, [])


  async function logout() {
    const response = await fetch('https://mern-blog-backend-tixg.onrender.com/api/logout', {
      method: 'POST',
      credentials: 'include'
    })
    // if (response.ok) {
    //   setRedirect(true)
    // }
    setUserInfo(null)
    navigate('/')
  }
  
  const username = userInfo?.email;
  //  const atIndex = postInfo.author.email.indexOf("@");
  // const username = postInfo.author.email.slice(0, atIndex);
  return (
    <header>
      <Link to='/' className='logo'>Blogmint</Link>
      <nav>
        {
          username && (
            <>
            <span>Hello, {username}</span>
              <Link to='/create'>Create new post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )
        }
        {
          !username && (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
          )
        }
      </nav>
    </header>
  )
}

export default Header