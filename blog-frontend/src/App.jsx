// blog-frontend\src\App.jsx
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserContextProvider from './contexts/UserContext'
import CreatePost from './pages/CreatePost'
import PostPage from './pages/PostPage'
import EditPostPage from './pages/EditPostPage'

function App() {
  //    The index attribute makes this route the root (/) route.
  // Parent route (Layout) wraps child routes.
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/create' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/edit/:id' element={<EditPostPage/>}/>
        </Route>
      </Routes>
    </UserContextProvider>

  )
}

export default App
