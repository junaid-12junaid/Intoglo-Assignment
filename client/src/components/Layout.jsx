import React from 'react'
import NavBar from './NavBar'

export default function Layout({children}) {
  return (
    <div>
        <NavBar/>
      <div className='container-fluid mt-4'>{children}</div>
    </div>
  )
}
