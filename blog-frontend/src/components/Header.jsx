import { useContext } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext)

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/profile', {
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

 
  function logout() {
    fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      credentials: 'include'
    })
    setUserInfo(null)
  }
  console.log('userInfo >> ', userInfo)
  const username = userInfo?.email;

  return (
    <header>
      <Link to='/' className='logo'>MyBlog</Link>
      <nav>
        {
          username && (
            <>
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