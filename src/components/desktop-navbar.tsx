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
        <Link prefetch={true} className={pathname == '/' ? 'active nav-link' : 'nav-link'} href='/'>Home</Link>
        <Link prefetch={true} className={pathname.includes('/articles') ? 'active nav-link' : 'nav-link'} href='/articles'>Articles</Link>
        <Link prefetch={true} className={pathname.includes('/audio') ? 'active nav-link' : 'nav-link'} href='/audio'>Podcasts</Link>
        <Link prefetch={true} className={pathname.includes('/beauty-icons') ? 'active nav-link' : 'nav-link'} href='/beauty-icons'>Beauty Icons</Link>
        <Link prefetch={true} className={pathname.includes('/dream-room') ? 'active nav-link' : 'nav-link'} href='/dream-room'>Dream Room</Link>
        <Link prefetch={true} className={pathname.includes('/services') ? 'active nav-link' : 'nav-link'} href='/services'>Services</Link>
      </div>
    </div>
  )
}

export default DesktopNavbar
