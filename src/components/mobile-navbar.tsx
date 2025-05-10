"use client"
import React from 'react';
import './styles/mobile-navbar.css';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNavbar = () => {
  const pathname = usePathname();

  const handleClick = () => {
    const linkContainer: HTMLElement = document.querySelector('.mobile-nav-link-container')!;
    const links = document.querySelectorAll('.nav-link');

    linkContainer.style.display = 'block';

    setTimeout(() => {
      gsap.to(linkContainer, {
        opacity: 1,
        ease: "power1.inOut"
      })

      links.forEach((link, index) => {
        gsap.to(link, {
          opacity: 1,
          y: -20,
          ease: "power1.inOut",
          delay: index * 0.05
        })
      })


    }, (50));
  }

  return (
    <div className='mobile-nav-container'>
      <div className='mobile-nav-button-container' onClick={() => handleClick()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='mobile-nav-link-container'>
        <div className='link-list'>
          <Link prefetch={true} className={pathname == '/' ? 'active nav-link' : 'nav-link'} href='/'>Home</Link>
          <Link prefetch={true} className={pathname.includes('/articles') ? 'active nav-link' : 'nav-link'} href='/articles'>Articles</Link>
          <Link prefetch={true} className={pathname.includes('/podcasts') ? 'active nav-link' : 'nav-link'} href='/podcasts'>Podcasts</Link>
          <Link prefetch={true} className={pathname.includes('/beauty-icons') ? 'active nav-link' : 'nav-link'} href='/beauty-icons'>Beauty Icons</Link>
          <Link prefetch={true} className={pathname.includes('/dream-room') ? 'active nav-link' : 'nav-link'} href='/dream-room'>Dream Room</Link>
          <Link prefetch={true} className={pathname.includes('/services') ? 'active nav-link' : 'nav-link'} href='/services'>Services</Link>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
