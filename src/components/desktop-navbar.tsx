"use client"
import React from 'react';
import Link from 'next/link';
import './styles/desktop-navbar.css';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

const DesktopNavbar = () => {
  const pathname = usePathname();

  return (
    <div className='nav-hover-container'>
      <div className='nav-link-container'>
        <Link className={pathname == '/' ? 'active nav-link' : 'nav-link'} href='/'>Home</Link>
        <Link className={pathname.includes('/featured') ? 'active nav-link' : 'nav-link'} href='/featured'>Featured</Link>
        <Link className={pathname.includes('/audio') ? 'active nav-link' : 'nav-link'} href='/audio'>Podcasts</Link>
        <Link className={pathname.includes('/beauty-icons') ? '' : 'nav-link'} href='/beauty-icons'>Beauty Icons</Link>
        <Link className={pathname.includes('/dream-room') ? 'active nav-link' : 'nav-link'} href='/dream-room'>Dream Room</Link>
        <Link className={pathname.includes('/services') ? 'active nav-link' : 'nav-link'} href='/services'>Services</Link>
      </div>
    </div>
  )
}

export default DesktopNavbar
