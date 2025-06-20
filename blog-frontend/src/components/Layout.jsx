import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    // Always shows the <Header/> at the top
    // <Outlet/> acts as a placeholder where child routes (from App.js) render
    // This becomes your responsibility:
    // <Outlet/> automatically handles  switching for you based on the URL.
  return (
   <main>
    <Header/>
    <Outlet/>
   </main>
  )
}

export default Layout


