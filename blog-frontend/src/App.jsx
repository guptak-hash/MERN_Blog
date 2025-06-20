import './App.css'
import Posts from './components/Posts'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
//    The index attribute makes this route the root (/) route.
// Parent route (Layout) wraps child routes.
  return (
    <Routes>
    <Route path='/' element={<Layout/>}>
     <Route index element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Route>
    </Routes>
  )
}

export default App
