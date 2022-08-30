import React from 'react'
import Navbar from '../navbar'

export const Layout = ({ children, className = "" }) => {
  return (
    <div className={`${className} flex flex-col md:px-28 xl:px-56 dark:bg-gray-800`}>
      <Navbar />
      { children }
    </div>
  )
}

export default Layout