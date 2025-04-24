import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WideImage from '../../assets/images/desert-far.webp';
import WideImageMobile from '../../assets/images/desert-far-mobile.webp';
import OverheadImage from '../../assets/images/desert-aerial.webp';
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

    gsap.to('.initial-image-container', {
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
          {/* <picture>
            <source media="(min-width: 1024px)" srcSet={WideImage} />
            <source media="(min-width: 640px)" srcSet={WideImageMobile} />
          </picture> */}
        </div>
        <div className='svg-overlay-container'>
          <Image src={OverheadImage} className='svg-overlay-test' alt='overlay-test'/>
          <div className='further-info-container'>
            <h2>CLICK</h2>
            <p>A WAY TO CONTACT ME</p>
          </div>
          <Link href='/services/info'>
            <div className='test-circle' onClick={() => handleObjectClick()}></div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Services;
