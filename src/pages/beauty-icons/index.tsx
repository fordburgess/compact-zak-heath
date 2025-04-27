import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WideImage from '../../assets/images/field-far.png';
import WideImageMobile from '../../images/assets/field-far-mobile.webp';
import OverheadImage from '../../assets/images/field-aerial.png';
import OverheadImageMobile from '../../assets/images/field-aerial-mobile.webp';
import './index.css';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useMediaQuery } from 'usehooks-ts';

const BeautyIcons = () => {
  const mobile = useMediaQuery('(max-width: 800px)');

  const handleImageChange = (direction: number) => { // direction is the way the user is travelling
    const initialImageContainer: HTMLElement | null = document.querySelector('.initial-image-container');
    const initialImage: HTMLElement | null = document.querySelector('.initial-image');
    const svgOverlayContainer: HTMLElement | null = document.getElementById(mobile ? 'mobile-overlay' : 'desktop-overlay');

    if (initialImageContainer && svgOverlayContainer && initialImage) {
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
              id='beauty-title'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              BEAUTY ICONS
            </motion.h1>
          </div>
          <div className='subtitle-container'>
            <motion.p
              className='page-subtitle'
              id='beauty-subtitle'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Scroll to continue...
            </motion.p>
          </div>
          <Image src={WideImage} priority className='initial-image' alt='initial-bg' />
        </div>
        <svg className='svg-overlay-container' id="mobile-overlay" version="1.1" viewBox="0 0 1182 2560" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="bg-image">
            <image width="1182" height="2560" preserveAspectRatio="none" xlinkHref={OverheadImageMobile.src}/>
          </g>
          <g id="layer-outline">
            <path className='object-outline' name="trophies" fill="none" d="m544 1519c-17.8-14.4-32.7-26.4-32.9-26.6-0.679-0.591-6.02-154-5.74-165l0.227-8.84 39-14.9c21.4-8.21 40.6-15.4 42.5-16 3.38-1.02 4.72-0.411 39 17.6 19.5 10.3 36 19.2 36.6 19.8 0.814 0.823 0.361 22.3-1.7 80.6-1.54 43.7-2.84 83.1-2.87 87.5l-0.0656 8-39.2 21.2c-21.6 11.7-39.9 21.5-40.8 21.8-1.04 0.388-12.4-8.15-34-25.6z"/>
          </g>
          <g id="layer-interaction">
            <path fill='none' data-outline="trophies" data-annotation="Trophies" d="m527 1533-35.6-31.1-0.701-97c-0.386-53.4-0.345-97.4 0.089-97.8 0.434-0.409 19.9-9.56 43.2-20.3l42.4-19.6h21l81.7 45.4v50.1c0 27.6 0.289 73.7 0.642 103l0.642 52.4-87.9 46.5-29.9-0.074-35.6-31.1z" />
          </g>
        </svg>
        <svg className='svg-overlay-container' id="desktop-overlay" version="1.1" viewBox="0 0 4551 2560" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="bg-image">
            <image width="4551" height="2560" preserveAspectRatio="none" xlinkHref={OverheadImage.src}/>
          </g>
          <g id="layer-outline">
            <path className='object-outline' name="trophies" fill="none" d="m2207 1875-82.5-51.5-0.274-14.7c-2.33-125-5.9-370-5.39-370 1.18-1.14 175-86.2 176-86.2 1.38 0 172 87.2 173 88.7 1.33 1.29-7.93 385-9.33 387-1.41 1.26-168 99-168 99-0.342-0.025-37.7-23.2-83.1-51.6z"/>
          </g>
          <g id="layer-interaction">
            <path data-outline="trophies" fill="none" data-annotation="Trophies" d="m2143 1939-82.5-51.5-0.24-9.7c-1.72-69.3-6.26-407-6.04-449l0.284-54.9 176-86.7 128-0.054 85.1 43.6c46.8 24 86.1 44.3 87.4 45l2.25 1.39-0.019 60.2c-0.021 65.5-9.12 452-10.7 454-0.446 0.399-38.3 22.8-84.2 49.9l-83.4 49.1-129-0.09-82.5-51.5z"/>
          </g>
        </svg>
        {/* <div className='svg-overlay-container'>
          <Image src={OverheadImage} className='svg-overlay-test' alt='svg-overlay'/>
          <div className='further-info-container'>
            <h2>CLICK</h2>
            <p>A WAY TO CONTACT ME</p>
          </div>
          <Link href='/beauty-icons/interviews'>
            <div className='test-circle'></div>
          </Link>
        </div> */}
      </div>
    </>
  )
}

export default BeautyIcons;
