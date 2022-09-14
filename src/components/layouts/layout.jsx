import React from 'react'
import Footer from '../footers/footer'
import { Navbar } from '../navbars'

export const Layout = ({ children, className = "", ...rest }) => {

  return (
    <div {...rest} className={`${className}`}>
      <Navbar />
        {children}
      <Footer />
    </div>
  )

}

export default Layout