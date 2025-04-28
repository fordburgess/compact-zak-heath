import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './audio.css'
import WideImage from '../../assets/images/winter-far.webp';
import WideImageMobile from '../../assets/images/winter-far-mobile.webp';
import OverheadImage from '../../assets/images/winter-aerial.webp';
import OverheadImageMobile from '../../assets/images/winter-aerial-mobile.webp';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from 'usehooks-ts';

const Audio = () => {
  const mobile = useMediaQuery('(max-width: 800px)');

  const handleImageChange = (direction: number) => { // direction is the way the user is travelling
    const initialImageContainer: HTMLElement | null = document.querySelector('.initial-image-container');
    const initialImage: HTMLElement | null = document.querySelector('.initial-image');
    const svgOverlayContainer: HTMLElement | null = document.getElementById(mobile ? 'mobile-overlay' : 'desktop-overlay');

//     if (initialImageContainer && svgOverlayContainer && initialImage) {
//
//       if (direction == 0) {
//         initialImageContainer.style.display = 'block';
//
//         svgOverlayContainer.style.transition = 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out';
//         initialImageContainer.style.transition = 'opacity 0.75s ease-in-out';
//         initialImage.style.transition = 'transform 0.3s ease-in-out';
//
//         requestAnimationFrame(() => {
//           svgOverlayContainer.style.opacity = '0';
//           initialImageContainer.style.opacity = '1';
//           initialImage.style.transform = 'scale(1)';
//         });
//
//         setTimeout(() => {
//           svgOverlayContainer.style.display = 'none';
//         }, 1000);
//       }
//       else if (direction == 1) {
//         initialImageContainer.style.transition = 'opacity 1.2s ease-in-out'
//         initialImage.style.transition = 'transform 0.3s ease-in-out';
//         svgOverlayContainer.style.transition = 'opacity 0.5s ease-in-out';
//         svgOverlayContainer.style.display = 'block';
//
//         initialImage.style.transform = 'scale(2)';
//         initialImageContainer.style.opacity = '0';
//
//         requestAnimationFrame(() => {
//           svgOverlayContainer.style.opacity = '1';
//         });
//
//         setTimeout(() => {
//           initialImageContainer.style.display = 'none';
//         }, 1000);
//       }
//     }
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
      z: 1100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.initial-image-container', {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        start: 'center 110%',
        end: 'center top',
        scrub: true
      }
    })

    gsap.to('.svg-overlay-container', {
      scale: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "center top",
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
    });

    ScrollTrigger.create({
      trigger: ".scroll-container",
      start: "center top", // Adjust as needed
      // markers: true,
      onEnter: () => {
        const initialImageContainer: HTMLElement | null = document.querySelector('.initial-image-container');

        if (initialImageContainer) {
          initialImageContainer.style.zIndex = '0';
        }
      },
      onLeaveBack: () => {
        const initialImageContainer: HTMLElement | null = document.querySelector('.initial-image-container');

        if (initialImageContainer) {
          initialImageContainer.style.zIndex = '2';
        }
      }
    })
  }, [])

  return (
    <>
      <div className='scroll-container'>
        <div className='initial-image-container'>
          <div className='title-container'>
            <motion.h1
              className='page-title'
              id='audio-title'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              AUDIO
            </motion.h1>
          </div>
          <div className='subtitle-container'>
            <motion.p
              className='page-subtitle'
              id='audio-subtitle'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Scroll to continue...
            </motion.p>
          </div>
          <picture>
            <source media="(min-width: 800px)" srcSet={WideImage.src} />
            <source media="(min-width: 640px)" srcSet={WideImageMobile.src} />
            <Image priority src={WideImageMobile} className='initial-image' alt='initial-image-winter'/>
          </picture>
        </div>
        {/* <div className='svg-overlay-container' id="mobile-overlay">
          <div className='further-info-container'>
            <h2>HINT</h2>
            <p>YOU CAN READ BUT YOU CAN'T OPEN</p>
          </div>
          <svg version="1.1" viewBox="0 0 1182 2560" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="bg-image">
              <image width="1182" height="2560" preserveAspectRatio="none" xlinkHref={OverheadImageMobile.src}/>
            </g>
            <g id="layer-outline">
              <path className='object-outline' name="chair" fill="none" d="m442 1466c-0.687-0.828-3.43-12.2-6.09-25.3s-5.25-24.9-5.75-26.2c-0.767-2.01-3.78-3.44-18.3-8.68-19.1-6.9-21.9-7.28-37.7-5.08-7.16 1-8.51 0.951-9.83-0.364-1.37-1.37-0.32-2.28 10.1-8.83 6.37-4.02 11.6-7.72 11.6-8.23 0-0.509-0.834-2.12-1.85-3.58-1.02-1.46-2.13-4.45-2.47-6.65s-8.17-26.6-17.4-54.2c-13.5-40.3-16.6-50.6-15.7-52 1.36-2.18 6.38-2.91 7.51-1.09 1.21 1.94 3.9-0.037 5.27-3.88 1.58-4.43 7.6-9.01 19.7-15 23.8-11.7 66.5-22.9 79.4-20.8 7.87 1.33 10.7 4.18 15.8 15.7 2.54 5.77 5.8 15.4 7.25 21.5l2.63 11 5.89 0.534c4.83 0.438 11.7 3.18 38.2 15.2 17.8 8.09 33.1 15.4 34.1 16.3 2.77 2.44 2.14 5.7-1.68 8.61-4.14 3.16-4.88 3.2-9.2 0.537l-3.37-2.08v2.29c0 1.26 0.719 7.93 1.6 14.8 1.42 11.2 1.87 12.8 4.1 14.6 1.81 1.47 2.65 3.33 3.03 6.75 0.401 3.56 0.948 4.72 2.23 4.72 0.933 0 2.67 1.04 3.87 2.31 1.73 1.84 2.17 3.53 2.17 8.3 0 6.71-1.06 8.39-5.31 8.39-2.73 0-2.88 0.201-2.36 3.25 1.46 8.61 4 29.7 3.61 30.1-0.242 0.224-1.83 0.705-3.53 1.07l-3.09 0.662-1.71-12.8c-0.938-7.04-2.02-13.1-2.41-13.5-0.582-0.569-103 43.1-107 45.4-0.976 0.647 0.536 9.94 5.2 32 0.477 2.25 0.0797 2.94-2.45 4.25-3.75 1.94-4.55 1.95-6.12 0.054zm99.3-126c0.232-0.412-1.66-8.18-4.21-17.2l-4.63-16.5-4.98-2.73c-2.74-1.5-5.27-2.74-5.62-2.75-0.971-0.036-1.8 9.19-2.02 22.4l-0.196 11.9 8.93 2.74c9.55 2.94 12.1 3.37 12.7 2.18zm-30-15c0.351-3.71 0.641-11.8 0.645-18.1l7e-3 -11.3-9.57-4.44c-5.26-2.44-9.74-4.44-9.95-4.44s0.277 2.14 1.08 4.75c6.04 19.6 6.87 27.1 3.41 30.8-3.26 3.47-1.91 5.9 4.31 7.71 9.31 2.71 9.35 2.69 10.1-5z"/>
            </g>
            <g id="layer-interaction">
              <path data-outline="chair" fill="none" data-annotation="Chair" d="m439 1477-7.2-2.65-4.13-17.5c-2.27-9.63-5.11-21.3-6.3-25.9l-2.17-8.37-28.9-12-27.9-0.265-2.17-6.5c-1.2-3.58-2.75-7.7-3.46-9.17-1.1-2.29-0.919-4.23 1.3-13.7l2.58-11-26.1-101 11.6-19.1 107-37.4 24.8 5.89 7.88 21.7c4.33 11.9 8.38 22.2 9 22.8 0.616 0.61 18.6 8.7 40 18s39.5 17.3 40.1 17.9c0.911 0.73 1.76 11.3 3.07 38l1.81 37-2.7 21.4c-1.48 11.8-2.86 21.6-3.06 21.8-0.556 0.556-20.9 4.32-23.3 4.32-1.39 0-4.51-2.54-8.8-7.18l-6.65-7.18-67.4 33.4-2.13 10.7c-1.17 5.9-2.42 12.4-2.78 14.4-0.515 2.9-2 4.81-7.2 9.25-3.6 3.08-7.3 5.55-8.22 5.5-0.919-0.051-4.91-1.28-8.87-2.74z"/>
            </g>
          </svg>
        </div> */}
        <div className='svg-overlay-container' id="desktop-overlay">
          <div className='further-info-container'>
            <h2>HINT</h2>
            <p>YOU CAN READ BUT YOU CAN'T OPEN</p>
          </div>
          <svg version="1.1" viewBox="0 0 4551 2560" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="bg-image">
              <image width="4551" height="2560" preserveAspectRatio="none" xlinkHref={OverheadImage.src} />
            </g>
            <g id="layer-outline">
              <path className='object-outline' name="chair" fill="none" d="m1952 1771c-2.06-1.42-3.76-2.85-3.78-3.19-0.017-0.338-5.13-25.7-11.4-56.5-6.76-33.3-11.9-56.4-12.8-57.3-0.783-0.783-24.4-8.18-52.4-16.4-64.5-19-61.5-18.6-104-13.5l-29.3 3.45-5.39-2.64c-2.96-1.45-5.39-2.96-5.39-3.34s12.3-8.23 27.2-17.4 28.1-17.5 29.1-18.5c1.82-1.7 1.29-3.35-18.2-57.1-11-30.4-28.6-79-39-108-10.4-28.9-23.3-64.2-28.5-78.4-11.4-30.8-11.6-31.8-8.65-35 2.57-2.74 12.2-7.23 16.5-7.71 2.55-0.282 3.05 0.042 3.35 2.17 0.529 3.77 2.05 4.08 7.18 1.48 4.4-2.23 4.73-2.69 5.79-7.95 1.42-7.1 5.66-13.3 12.9-18.8 28.3-21.6 57.9-38.5 91.7-52.2 59.9-24.3 84.8-32 107-33.2 20.8-1.09 27.4 1.48 37.5 14.7 9.93 12.9 25.2 49.7 27.7 66.5 0.635 4.4 2.84 13.4 4.91 19.9l3.75 11.9 18 3.21c23.2 4.13 25.9 5.19 109 41.7 70.2 30.9 81.2 36 83.2 38.6 1.55 2.04 1.67 13.2 0.172 16.5-1.01 2.23-10.7 7.63-13.7 7.63-0.574 0-6.56-2.47-13.3-5.5-6.74-3.02-12.5-5.28-12.7-5.01-0.271 0.271 1.94 17 4.92 37.2l5.41 36.8 7.17 3.41c8.54 4.05 9.9 6.38 10.9 18.6 0.364 4.4 1.08 8.53 1.6 9.17 0.516 0.644 2.82 1.48 5.13 1.86 5.5 0.907 9.35 3.23 10.7 6.44 0.633 1.53 0.958 7.9 0.792 15.5l-0.282 12.9-3.5 2.37c-3.14 2.13-4.23 2.31-10.5 1.77-3.85-0.332-7.58-0.217-8.3 0.255-1.04 0.69-0.301 7.61 3.75 35.1 2.78 18.8 5.05 34.4 5.05 34.7s-1.26 0.96-2.8 1.5c-5.09 1.77-6.99 7.09-4.68 13.1 0.348 0.908-0.706 1.83-3.07 2.68-1.98 0.716-3.76 1.14-3.96 0.944-0.197-0.197-2.86-14.7-5.91-32.3-3.06-17.6-5.99-32.4-6.51-32.9-0.605-0.605-43.2 20.9-117 58.9-98.6 51.1-116 60.1-116 62 0 1.17 3.11 18.1 6.91 37.6s7.06 36.5 7.25 37.9c0.272 1.98-0.442 2.9-3.66 4.73-5 2.85-6.1 2.81-10.8-0.384zm210-305c-0.375-1.51-5.22-20.3-10.8-41.7l-10.1-38.9-24.5-10.8c-21.7-9.54-26.7-11.5-27.1-10.6-0.339 0.947-5.55 85.3-5.29 85.6 0.444 0.53 74.4 18.9 76.6 19 1.44 0.087 1.64-0.404 1.09-2.64zm-97.3-24c0.01-1.51 1.11-21.9 2.46-45.2s2.13-42.8 1.74-43.2c-0.979-0.913-46.5-20.9-46.8-20.6-0.148 0.148 1.86 3.93 4.47 8.4 5.96 10.2 15.3 35.3 18.7 50.3 2.07 9.06 2.52 13.1 2.13 19.2-0.58 8.89-1.72 10.8-10.9 18.2-6.15 4.97-7.1 7.16-3.5 8.06 16.2 4.06 29.5 7.27 30.5 7.36 0.721 0.064 1.26-1.05 1.26-2.64z"/>
            </g>
            <g id="layer-interaction">
              <path data-outline="chair" fill="rgba(0, 0, 0, 0.01)" data-annotation="Chair" d="m1920 1798c-0.38-0.962-10.1-27.8-21.7-59.7-11.5-31.9-21.1-58.1-21.3-58.3-0.179-0.179-25.1-5.23-55.5-11.2l-55.1-10.9-35.7 6.44c-19.6 3.54-36.2 6.44-36.8 6.45-0.623 0-3.51-13.9-6.91-33.2-3.21-18.3-6.03-34-6.26-34.8-0.267-1.03 6.62-9.04 19.2-22.3 13.6-14.4 19.5-21.2 19.1-22.4-1.09-3.61-51.4-237-52-241-0.557-3.91 0.258-7.04 6.25-24l6.89-19.5 82.8-55.5 158-54.7 72.2 9.13 47.8 105 194 81.7 17.4 44.3-3.37 121c-1.85 66.7-3.52 121-3.71 122-0.188 0.179-13.9 3.8-30.6 8.04l-30.2 7.72-24.6-15.2c-19.1-11.8-25-15-26.4-14.4-0.991 0.475-26.5 14.8-56.8 31.8l-55 30.9-14.7 105h-42.7c-39.7 0-42.7-0.122-43.4-1.75z"/>
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Audio;
