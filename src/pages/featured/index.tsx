import React, { useEffect } from 'react'
import Image from 'next/image';
import WideImage from '../../assets/images/spring-far.png';
import WideImageMobile from '../../assets/images/spring-far-mobile.webp';
import OverheadImage from '../../assets/images/spring-aerial.png';
import OverheadImageMobile from '../../assets/images/spring-aerial-mobile.webp';
// import ExpandedImage from '../../assets/images/field-expanded.webp';
import './index.css';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Featured = () => {
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


  return (
    <>
      <div className='scroll-container'>
        <div className='initial-image-container'>
          <div className='title-container'>
            <motion.h1
              className='page-title'
              id='dream-room-title'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              FEATURED
            </motion.h1>
          </div>
          <div className='subtitle-container'>
            <motion.p
              className='page-subtitle'
              id='dream-room-subtitle'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Scroll to continue...
            </motion.p>
          </div>
          <Image src={WideImage} className='initial-image' alt='initial-image'/>
          <picture>
            {/* <source media="(min-width: 1024px)" srcSet={WideImage} />
            <source media="(min-width: 640px)" srcSet={WideImageMobile} /> */}
          </picture>
        </div>
        <svg className='svg-overlay-container' version="1.1" viewBox="0 0 1182 2560" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="bg-image">
            <image width="1182" height="2560" preserveAspectRatio="none" xlinkHref={OverheadImageMobile.src}/>
          </g>
          <g id="layer-outline">
            <path className='object-outline' name="shelf" fill="none" d="m586 1297c-3.85-3.06-7.13-5.92-7.29-6.36-0.244-0.665 6.76-3.33 37.5-14.3 3.03-1.08 3.54-0.879 9.5 3.73 3.46 2.68 6.48 5.01 6.71 5.18 0.229 0.175 0.157 0.577-0.16 0.894-0.551 0.551-34.6 14.9-37.8 15.9-0.839 0.268-4.58-1.97-8.5-5.09zm-21.7-17.4-7.69-4.93-12.5 4.59c-14 5.11-14.8 5.03-16.5-1.55-0.507-2-3.27-23.1-6.14-47-4.54-37.7-5.03-43.5-3.78-44.8 2.17-2.17 110-33.4 112-32.4 2.01 1.12 11.3 86.6 9.66 89.2-1.73 2.81-7.16 5.22-32.1 14.3-13.2 4.81-24.1 8.87-24.3 9.02s3.65 1.81 8.5 3.69c4.89 1.9 8.94 4.07 9.09 4.89 0.529 2.75-17 9.91-24.2 9.88-3.18-0.014-5.81-1.12-11.8-4.95zm69 0.613c-3.16-1.81-6.07-3.62-6.47-4.02-1.3-1.3 2.09-2.59 6.86-2.61 3.83-0.013 5.23 0.531 7.97 3.09l3.33 3.11-2.33 1.89c-1.28 1.04-2.62 1.88-2.97 1.86-0.352-0.017-3.22-1.51-6.38-3.32z"/>
          </g>
          <g id="layer-interaction">
            <path data-outline="shelf" fill='none' data-annotation="Shelf" d="m552 1310-34.4-9.82-11.9-11.9-14.7-95.7 5.64-12.3c5.33-11.6 5.84-12.3 9.22-13.2 1.97-0.53 30.7-7.5 63.9-15.5l60.3-14.5 16.7 10.9 0.64 5.33c0.352 2.93 3.26 31.9 6.45 64.3l5.81 59-3.44 8.23c-1.89 4.53-3.97 8.63-4.62 9.12-1.36 1.03-63.9 26.3-64.7 26.1-0.275-0.067-16-4.54-34.9-9.94z" />
          </g>
        </svg>
        {/* <svg className='svg-overlay-container' version="1.1" viewBox="0 0 4551 2560" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="bg-image">
            <image width="4551" height="2560" preserveAspectRatio="none" xlinkHref={OverheadImage.src} />
          </g>
          <g id="layer-outline">
            <path name="shelf" className='object-outline' fill="none" d="m2276 1369-19.8-13.2 10.4-4.99c5.7-2.75 26.2-12.7 45.5-22.2l35.2-17.2 18.1 12.6c9.94 6.92 18 12.7 17.8 12.8-0.301 0.293-71.7 37.4-80.8 42l-6.59 3.32zm-129-28.5c-1.91-2.06-3.68-4.65-3.93-5.75-1.11-4.81-24.5-194-24.5-198 0-6.45 1.33-9.27 5.71-12.1 2.08-1.36 55.5-24.8 119-52.1 84.4-36.5 115-49.4 117-48.9 3.4 1.04 4.59 2.37 5.64 6.29 0.537 2 5.04 42.1 10 89.1s9.72 90.5 10.6 96.7c2.46 18 8.56 13.4-61.3 46.5-32.6 15.5-59.2 28.4-59.2 28.7 0.01 0.313 7.31 3.28 16.2 6.59 16 5.94 16.3 6.07 18.6 10.3 2.35 4.27 2.36 4.36 0.51 6.84-1.09 1.46-10.3 6.89-22.2 13-29.5 15.3-33.1 15.2-57.2-0.317-6.88-4.44-13.1-8.41-13.8-8.81-0.756-0.438-12.1 4.57-27.9 12.3-14.6 7.19-27.2 13.1-28 13.1s-2.98-1.69-4.89-3.75zm231-20.2c-7.98-4.34-14.5-8.48-14.5-9.21 0-2.86 7.88-5.85 16.1-6.11 7.05-0.223 8.51 0.069 13.8 2.74 3.25 1.65 7.14 4.22 8.63 5.71 3.29 3.29 4.27 8.21 2.03 10.2-1.77 1.57-8.72 4.61-10.4 4.57-0.62-0.013-7.65-3.57-15.6-7.91z"/>
          </g>
          <g id="layer-interaction">
            <path data-outline="shelf" fill='none' data-annotation="Shelf" d="m2236 1388-41.8-24.9-38.4 13.2-37-13.1-11.7-97.9c-6.42-53.8-12.2-104-12.8-112l-1.16-14.5 15.7-44.8 245-100 32 16.2 23.4 217-7.38 20c-4.06 11-7.52 20.5-7.69 21.2s6.85 10 15.6 20.9l15.9 19.7-0.191 18.6c-0.105 10.2-0.432 20-0.727 21.6-0.525 2.94-2.08 3.66-72.1 33.5-39.4 16.8-72.3 30.6-73.2 30.8-0.867 0.143-20.4-11-43.4-24.7z"/>
          </g>
        </svg> */}
        {/* <div className='svg-overlay-container'>
          <Image src={OverheadImage} className='svg-overlay-test' alt='overlay-test'/>
          <div className='further-info-container'>
            <h2>CLICK</h2>
            <p>A WAY TO CONTACT ME</p>
          </div>
          <div className='person-test-circle'></div>
          <div className='bed-test-circle'></div>
          <div className='light-test-circle'></div>
        </div> */}
      </div>
    </>
  )
}

export default Featured
