import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WideImage from '../../assets/images/desert-far.webp';
import WideImageMobile from '../../assets/images/desert-far-mobile.webp';
import OverheadImage from '../../assets/images/desert-aerial.webp';
import OverheadImageMobile from '../../assets/images/desert-aerial-mobile.webp';
import './index.css';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Services = () => {
  const verticalScrollRef = useRef<HTMLDivElement | null>(null);

  const handleImageChange = (direction: number) => { // direction is the way the user is travelling
    const initialImageContainer: HTMLElement | null = document.querySelector('.initial-image-container');
    const initialImage: HTMLElement | null = document.querySelector('.initial-image');
    const svgOverlayContainer: HTMLElement | null = document.querySelector('.svg-overlay-container');

    if (initialImageContainer && initialImage && svgOverlayContainer) {
      if (direction == 0) {
        initialImageContainer.style.display = 'block';

        svgOverlayContainer.style.transition = 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out';
        initialImageContainer.style.transition = 'opacity 0.75s ease-in-out';
        initialImage.style.transition = 'transform 0.3s ease-in-out';

        requestAnimationFrame(() => {
          svgOverlayContainer.style.opacity = '0';
          initialImageContainer.style.opacity = '1';
          initialImage.style.transform = 'scale(1)';
        });

        setTimeout(() => {
          svgOverlayContainer.style.display = 'none';
        }, 1000);
      }
      else if (direction == 1) {
        initialImageContainer.style.transition = 'opacity 1.2s ease-in-out'
        initialImage.style.transition = 'transform 0.3s ease-in-out';
        svgOverlayContainer.style.transition = 'opacity 0.5s ease-in-out';
        svgOverlayContainer.style.display = 'block';

        initialImage.style.transform = 'scale(2)';
        initialImageContainer.style.opacity = '0';

        requestAnimationFrame(() => {
          svgOverlayContainer.style.opacity = '1';
        });

        setTimeout(() => {
          initialImageContainer.style.display = 'none';
        }, 1000);
      }
    }
  }

  const handleObjectClick = () => {
    const scrollContainer: HTMLElement | null = document.querySelector('.scroll-container');
    const contentContainer: HTMLElement | null = document.querySelector('.content-container');

    if (scrollContainer && contentContainer) {
      scrollContainer.style.transition = 'opacity 0.5s ease-in-out';
      contentContainer.style.transition = 'opacity 0.25s ease-in-out';

      contentContainer.style.display = 'block';
      scrollContainer.style.opacity = '0';

      requestAnimationFrame(() => {
        contentContainer.style.opacity = '1';
      });

      setTimeout(() => {
        scrollContainer.style.display = 'none';
      }, 1200);
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.initial-image', {
      scale: 2,
      ease: 'none',
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to('.title-container', {
      z: 1500,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.subtitle-container', {
      z: 800,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.svg-overlay-container', {
      scale: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "55% top",
        end: "bottom bottom",
        scrub: true
      }
    })

    gsap.to('.further-info-container', {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: '68% top',
        end: '85% top',
        scrub: true
      }
    })

    gsap.to('.test-circle', {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: '80% top',
        end: '90% top',
        scrub: true
      }
    })

    ScrollTrigger.create({
      trigger: ".scroll-container",
      start: "center top", // Adjust as needed
      // markers: true,
      onEnter: () => {
        handleImageChange(1);
      },
      onLeaveBack: () => {
        handleImageChange(0);
      }
    })
  }, [])

  useEffect(() => {
    const container = verticalScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollTop;
      console.log(scrollLeft)
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

  return (
    <>
      <div className='scroll-container'>
        <div className='initial-image-container'>
          <div className='title-container'>
            <motion.h1
              className='page-title'
              id='services-title'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              SERVICES
            </motion.h1>
          </div>
          <div className='subtitle-container'>
            <motion.p
              className='page-subtitle'
              id='services-subtitle'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Scroll to continue...
            </motion.p>
          </div>
          <Image src={WideImage} className='initial-image' alt='initial-image-desert' />
        </div>
        <svg className='svg-overlay-container' version="1.1" viewBox="0 0 4551 2560" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="bg-image">
            <image width="1182" height="2560" preserveAspectRatio="none" xlinkHref={OverheadImageMobile.src} />
          </g>
          <g id="layer-outline">
            <path name="phone" className='object-outline' fill="none" d="m538 1353c-11.2-2.92-18.5-8.72-18.5-14.7 0-5.61 7.03-12.5 15.7-15.4l5.15-1.7 1.7-6.7c0.937-3.69 1.86-7.23 2.04-7.88 0.184-0.648 1.6-1.32 3.14-1.5 2.61-0.3 2.86-0.719 3.52-6.02 0.933-7.51 3.41-11 13.2-18.6 18.2-14.2 39.4-21.9 63.2-22.9l13.1-0.555 3.43 5.74c1.88 3.16 4.23 7.22 5.2 9.03 1.83 3.38 2.58 12.3 1.36 16.1-0.837 2.59-4.62 4.4-9.19 4.4-2.1 0-3.45 0.491-3.45 1.25 2e-3 0.688 1.77 3.9 3.92 7.14 3.26 4.91 5.39 6.75 12.7 11.1l8.83 5.18 0.578 15-25.1 9.79c-13.8 5.39-25.9 10-26.9 10.3-1.12 0.292-8.4-3.86-19.5-11.2-16.7-10.9-21.3-13.2-17.1-8.56 2.73 3.02 1.61 10.5-2.11 14-6.34 6.03-24.2 9.46-34.9 6.69zm22-11.5c5.17-2.29 5.88-3.26 4.12-5.67-1.94-2.65-14.9-3.83-19-1.72-2.03 1.04-4.35 1.3-7.67 0.86-4.2-0.557-4.84-0.393-5.41 1.38-1.06 3.35 0.854 4.87 8.99 7.12 4.39 1.21 14 0.213 19-1.96z" />
          </g>
          <g id="layer-interaction">
          <path data-outline="phone" fill="none" data-annotation="Phone" d="m598 1362c-7.92-3-15.2-5.45-16.1-5.45-0.929 0-8.85 1.61-17.6 3.58-15.3 3.43-16.4 3.55-28.4 2.88l-12.5-0.7-17.4-17.3 1.17-22 25.2-21.3 10.3-18.6c5.68-10.2 10.9-19 11.6-19.6 1.66-1.38 34.1-12.8 44.6-15.7 9.08-2.52 19.7-3 37.9-1.71l9.16 0.65 15 23.2 0.097 29 15.8 11 0.031 9.5c0.0171 5.22-0.249 11.8-0.592 14.7l-0.623 5.19-30.9 14.1c-17 7.73-31.2 14-31.6 14-0.386-0.025-7.18-2.5-15.1-5.5z" />
          </g>
        </svg>
        {/* <svg className='svg-overlay-container' version="1.1" viewBox="0 0 4551 2560" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="bg-image">
            <image width="4551" height="2560" preserveAspectRatio="xMinYMin meet" xlinkHref={OverheadImage.src} />
          </g>
          <g id="layer-outline">
            <path className='object-outline' name="phone" fill="none" d="m2198 1507c-0.362-0.586-3-1.06-5.87-1.06-7.9 0-13.5-0.672-14.9-1.8-0.699-0.558-3.37-1.32-5.93-1.69-2.56-0.371-4.89-1.27-5.17-2-0.28-0.729-2.11-1.63-4.08-2-1.96-0.368-4.01-1.5-4.55-2.51-0.542-1.01-2.05-2.11-3.34-2.43s-2.87-1.73-3.5-3.12-1.95-2.54-2.92-2.56c-3.14-0.069-6.31-8.43-6.29-16.6 0.028-11.8 0.5-12.9 9.66-22 4.58-4.58 9.04-8.33 9.92-8.33s4.95-1.8 9.05-4 8.29-4 9.3-4c1.01 0 2.4-0.677 3.09-1.5s2.65-1.87 4.36-2.31c2.78-0.72 3.25-1.4 4.33-6.25 0.667-2.99 1.43-8.52 1.68-12.3 0.556-8.09 2.68-11.1 8.54-12l3.79-0.606 0.696-9.23c1.04-13.7 6.63-25.7 15.6-33.4 1.92-1.65 11.6-9.34 21.5-17.1 15.8-12.3 18.2-14.6 19-17.8 0.845-3.29 1.59-3.95 6.87-6.08 3.26-1.32 6.79-2.4 7.86-2.4s6.73-2.87 12.6-6.39c5.85-3.51 18.1-9.54 27.1-13.4 13.5-5.75 19.5-7.66 33-10.6 13.4-2.91 42.1-6.62 51.3-6.62 1.74 0 9.9 12.7 11.6 18.1 0.636 1.98 2.33 4.68 3.76 6 3.31 3.04 6.72 10.6 9.25 20.6 1.65 6.5 1.86 9.43 1.25 17.7-0.717 9.69-0.801 9.95-4.18 12.8-5.6 4.67-13.4 7.11-20.2 6.32-3.17-0.368-5.77-0.353-5.77 0.034 0 0.387 1.28 2.34 2.84 4.35 1.56 2 3.34 5.09 3.94 6.87 0.602 1.77 3.65 7.17 6.77 12l5.68 8.78 20 11c11 6.05 21.1 11.8 22.4 12.8 2.33 1.79 2.38 2.12 2.38 18.5v16.7l-11.5 5.73c-6.33 3.15-12.1 5.73-12.8 5.73-1.8 0-62.7 28.8-64.7 30.5-2.12 1.92-21.8 10.5-24.1 10.5-1.01 0-13-6.89-26.6-15.3-13.6-8.42-39.1-24-56.5-34.6-23.4-14.2-31.8-19.8-31.8-21.2 0-2.76-2.47-2.27-6.52 1.29-2.68 2.35-3.51 3.81-3.28 5.75 0.282 2.43 0.609 2.58 4.88 2.32 2.68-0.165 5.78 0.35 7.5 1.24 1.61 0.839 3.93 1.53 5.17 1.53 1.23 0 2.8 0.906 3.49 2.01 0.783 1.25 2.33 2 4.15 2 2.93 0 3.63 0.496 11.4 7.96 5.87 5.67 7.38 9.11 8 18.1 0.485 7.07 0.279 8.32-2.21 13.4-1.76 3.6-3.64 5.95-5.24 6.56-1.37 0.521-2.73 1.84-3.01 2.94-0.339 1.3-1.37 1.99-2.95 1.99-1.34 0-3.47 1.12-4.75 2.5-1.74 1.88-3.33 2.5-6.39 2.5-2.24 0-4.39 0.502-4.77 1.12-0.419 0.678-2.41 0.921-5.09 0.62-3.59-0.405-4.58-0.152-5.4 1.38-1.13 2.12-5.85 2.56-7.69 0.723-0.877-0.877-1.56-0.827-2.8 0.205-0.903 0.75-3.96 1.47-6.79 1.6-2.83 0.132-6.56 0.533-8.28 0.891-1.84 0.383-3.4 0.212-3.79-0.415zm15.2-20.6c7.26-0.527 16.3-2.97 21.8-5.88 4.08-2.16 8.4-6.46 8.4-8.34 0-2.97-4.16-8.34-8.37-10.8-5.06-2.97-16.5-5.52-24.8-5.52-5.59 0-6.36 0.288-10.5 3.9-5.96 5.25-10.2 7.1-16.2 7.1-4.46 0-5.49-0.421-8.57-3.5-1.92-1.92-3.75-3.5-4.05-3.5-0.301 0-1.88 1.46-3.5 3.25-4.32 4.75-4.02 8.29 1.11 13 2.27 2.07 4.47 3.77 4.9 3.77 0.424 0 3.44 1.33 6.71 2.95s6.8 2.72 7.85 2.45 2.81 0.17 3.91 0.983c2.02 1.5 2.93 1.5 21.3 0.171z"/>
          </g>
          <g id="layer-interaction">
            <path fill="none" data-outline="phone" data-annotation="Phone" d="m2135 1517c-12.4-9.47-22.8-18-23.1-18.9-0.504-1.34-2.37-40.6-2.37-49.9 0-1.82 4.25-5.08 22.4-17.2l22.4-14.9 8.39-21.8c4.61-12 10.4-27.1 13-33.6l4.57-11.8 53.1-43.6c29.2-24 54.2-44.2 55.7-44.9 2.26-1.14 128-13.1 129-12.2 0.115 0.159 8 11.8 17.5 26l17.3 25.7-1.6 25.8-1.6 25.8 38.1 38.2 4.91 29.9c2.7 16.5 4.92 30.6 4.93 31.5 0.014 1.07-18.5 12.7-55.2 34.6l-55.2 33-71 14.5-158 1.13z"/>
          </g>
        </svg> */}
        {/* <div className='further-info-container'>
          <h2>CLICK</h2>
          <p>A WAY TO CONTACT ME</p>
        </div> */}
        {/* <div className='svg-overlay-container'>
          <Image src={OverheadImage} className='svg-overlay-test' alt='overlay-test'/>
          <Link href='/services/info'>
            <div className='test-circle' onClick={() => handleObjectClick()}></div>
          </Link>
        </div> */}
      </div>
    </>
  )
}

export default Services;
