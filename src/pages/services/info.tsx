import { useEffect, useRef } from 'react';
// import './index.css';
import './info.css';
import Image from 'next/image';
import ExpandedImage from '../../assets/images/desert-expanded.webp';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from 'framer-motion';

const ServicesInfo = () => {
  const verticalScrollRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const container = verticalScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollTop;
      const backgroundImage: HTMLElement | null = document.getElementById('services-content-container-background');

      if (backgroundImage) {
        backgroundImage.style.transform = `translateY(-${scrollLeft * 0.25}px)`;
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#services-info-title', {
      opacity: 1,
      y: '0%',
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5
    })

    gsap.to('#services-info-subtitle', {
      opacity: 1,
      y: '0%',
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5
    })

    gsap.to('#animate-line-1', {
      width: '100%',
      x: '0%',
      ease: "power1.inOut",
      duration: 1
    })

    gsap.to('.animate-circle-1', {
      x: '50%',
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.services-transition-container',
        start: 'top bottom',
        end: 'center 60%',
        scrub: true,
      }
    })

    // gsap.to('.animate-circle-2', {
    //   x: '10%',
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: '.services-transition-container',
    //     start: 'top bottom',
    //     end: 'top top',
    //     scrub: true,
    //   }
    // })
  }, [])

  return (
    <div className='services-info-container'>
      <Image src={ExpandedImage} id='services-content-container-background' alt='content-container'/>
      <div className='services-info-content' ref={verticalScrollRef}>
        <div className='services-title-section'>
          <h1 id="services-info-title">My Services</h1>
          <div className='services-animate-line' id="animate-line-1"></div>
          <h3 id="services-info-subtitle">Lorem Ipsum Sit Dolor Amet Consamatum Est Julia</h3>
        </div>
        <div className='services-info-body'>
          <h3>Consulting & Brand Collaboration Inquiries</h3>
          <p style={{ marginBottom: '10px' }}>As a young voice in the beauty industry with firsthand experience navigating content creation, brand partnerships, and beauty business strategy, I offer consulting services for brands and individuals looking to connect with today’s beauty audience. I can give insight into Gen Z consumer behaviour, influencer marketing and digital storytelling through a beauty and fashion lens.</p>
          <p>For consulting opportunities, public speaking, or collaborations, please reach out to me directly at zakheath163@gmail.com</p>
        </div>
        <div className='services-transition-container'>
          <div className='animate-circle-1'></div>
        </div>
          {/* <div className='services-info-section'>
            <h2>Consulting & Brand Collaboration Inquiries</h2>
            <p>As a young voice in the beauty industry with firsthand experience navigating content creation, brand partnerships, and beauty business strategy, I offer consulting services for brands and individuals looking to connect with today’s beauty audience. I can give insight into Gen Z consumer behaviour, influencer marketing and digital storytelling through a beauty and fashion lens</p>
            <p>For consulting opportunities, public speaking, or collaborations, please reach out to me directly at zakheath163@gmail.com</p>
          </div> */}
      </div>
    </div>
  )
}

export default ServicesInfo
