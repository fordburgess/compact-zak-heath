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
    const xButton = document.querySelector('.mobile-nav-x');

    linkContainer.style.display = 'block';

    setTimeout(() => {
      gsap.to(linkContainer, {
        opacity: 1,
        ease: "power1.inOut"
      })

      gsap.to(xButton, {
        opacity: 1,
        ease: "power1.inOut",
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

  const handleMenuClose = () => {
    const linkContainer: HTMLElement = document.querySelector('.mobile-nav-link-container')!;
    const links = document.querySelectorAll('.nav-link');
    const xButton = document.querySelector('.mobile-nav-x');

    gsap.to(linkContainer, {
      opacity: 0,
      ease: "power1.inOut",
      duration: 0.25
    })

    gsap.to(xButton, {
      opacity: 0,
      ease: "power1.inOut",
      duration: 0.25
    })

    links.forEach((link, index) => {
      gsap.to(link, {
        opacity: 0,
        y: 20,
        ease: "power1.inOut",
        duration: 0.25
      })
    })

    setTimeout(() => {
      linkContainer.style.display = 'none';
    }, (250));
  }

  return (
    <div className='mobile-nav-container'>
      <div className='mobile-nav-button-container' onClick={() => handleClick()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='mobile-nav-link-container'>
          <svg
            width='30px'
            height='30px'
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke='#fff'
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mobile-nav-x"
            onClick={() => handleMenuClose()}
          >
          <line x1="4" y1="4" x2="12" y2="12" />
          <line x1="12" y1="4" x2="4" y2="12" />
        </svg>
        <div className='link-list'>
          <Link prefetch={true} className={pathname == '/' ? 'mobile-active nav-link' : 'nav-link'} href='/'>Home</Link>
          <Link prefetch={true} className={pathname.includes('/articles') ? 'mobile-active nav-link' : 'nav-link'} href='/articles'>Articles</Link>
          <Link prefetch={true} className={pathname.includes('/podcasts') ? 'mobile-active nav-link' : 'nav-link'} href='/podcasts'>Podcasts</Link>
          <Link prefetch={true} className={pathname.includes('/beauty-icons') ? 'mobile-active nav-link' : 'nav-link'} href='/beauty-icons'>Beauty Icons</Link>
          <Link prefetch={true} className={pathname.includes('/dream-room') ? 'mobile-active nav-link' : 'nav-link'} href='/dream-room'>Dream Room</Link>
          <Link prefetch={true} className={pathname.includes('/services') ? 'mobile-active nav-link' : 'nav-link'} href='/services'>Services</Link>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
