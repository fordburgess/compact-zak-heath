"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useMediaQuery } from 'usehooks-ts';

const page = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useEffect(() => {
    const scrollDiv = document.querySelector('.test-scroll-div');

    if (scrollDiv) {
      scrollDiv.scrollTop = 4000;
    }
    // let ctx = gsap.context(() => {
    //   gsap.to('.test-scroll-div', {
    //     duration: 0,
    //     scrollTo: 4000,
    //     delay: 0
    //   });
    // });
    // return () => ctx.revert();
  }, []);

  return (
    <div className='test-scroll-div' style={{ height: '100vh', width: '100vw', overflowY: 'auto' }}>
      <div style={{ backgroundColor: 'blue', width: '100%', height: '100vh' }}></div>
      <div style={{ backgroundColor: 'yellow', width: '100%', height: '100vh' }}></div>
      <div style={{ backgroundColor: 'green', width: '100%', height: '100vh' }}></div>
      <div style={{ backgroundColor: 'orange', width: '100%', height: '100vh' }}></div>
      <div style={{ backgroundColor: 'pink', width: '100%', height: '100vh' }}></div>
      <div style={{ backgroundColor: 'purple', width: '100%', height: '100vh' }}></div>
    </div>
  )
}

export default page
