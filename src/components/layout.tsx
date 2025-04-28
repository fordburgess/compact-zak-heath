import React, { ReactNode } from 'react'
import DesktopNavbar from './desktop-navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <DesktopNavbar />
    </>
  )
}

export default Layout
