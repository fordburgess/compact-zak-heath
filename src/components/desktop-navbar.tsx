import React, { useEffect } from 'react';
import Link from 'next/link';
import './styles/desktop-navbar.css';
import gsap from 'gsap';
import { useRouter } from 'next/router';

const DesktopNavbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const handleHover = () => {
    gsap.to('.nav-link-container', {
      y: 0,
      ease: "power1.in",
      duration: 0.2
    })
  }

  const handleExit = () => {
    gsap.to('.nav-link-container', {
      y: 100,
      ease: "power1.in",
      duration: 0.2
    })
  }

  // need to fix link styles

  return (
    <div className='nav-hover-container' onMouseEnter={() => handleHover()} onMouseLeave={() => handleExit()}>
      <div className='nav-link-container'>
        <Link className={pathname.includes('/services') ? 'active' : ''} href='/services'>Services</Link>
        <Link className={pathname.includes('/audio') ? 'active' : ''} href='/audio'>Audio</Link>
        <Link className={pathname.includes('/dream-room') ? 'active' : ''} href='/dream-room'>Dream Room</Link>
        <Link className={pathname == '/' ? 'active' : ''} href='/'>Home</Link>
        <Link className={pathname.includes('/featured') ? 'active' : ''} href='/featured'>Featured</Link>
        <Link className={pathname.includes('/beauty-icons') ? '' : ''} href='/beauty-icons'>Beauty Icons</Link>
      </div>
    </div>
  )
}

export default DesktopNavbar
