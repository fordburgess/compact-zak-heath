"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import LisaEldrigdeProfile from '../../../assets/images/lisa-eldridge-profile.webp';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import RihannaVogue from '../../../assets/images/rihanna-vogue.jpg';
import VogueParis from '../../../assets/images/vogue-paris.jpg';
import VogueJapan from '../../../assets/images/vogue-japan.webp';
import VogueTurkey from '../../../assets/images/vogue-turkey.jpg';
import HarpersBazaar from '../../../assets/images/harpers-bazaar.jpg';
import LisaEldridge2 from '../../../assets/images/lisa-eldridge-2.webp';
import LisaEldridge4 from '../../../assets/images/lisa-eldridge-4.webp';
import LisaEldridge8 from '../../../assets/images/lisa-eldridge-8.jpg';
import LisaMBE from '../../../assets/images/lisa-mbe.png';
import KirstyLewisProfile from '../../../assets/images/kirsty-lewis-profile.webp';
import KirstyLewis2 from '../../../assets/images/kirsty-lewis-2.webp';
import './styles.css'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const LisaEldridge = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // const mags = document.querySelector(".mag-covers")!;

    // if (mags !== null) {
//       function getScrollAmount() {
//         let magsWidth = mags.scrollWidth;
//         return -(magsWidth - window.innerWidth);
//       }
//
//       const tween = gsap.to(mags, {
//         x: getScrollAmount,
//         duration: 3,
//         ease: "none",
//       });

      // ScrollTrigger.create({
      //   trigger:".mag-wrapper",
      //   start:"top 12%",
      //   end: () => `+=${getScrollAmount() * -1}`,
      //   pin:true,
      //   animation: tween,
      //   scrub:1,
      //   invalidateOnRefresh: true,
      // })


    gsap.to(['.text-section-title', '.featured-paragraph-text'],  {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.text-section',
        start: 'top 30%',
        end: 'bottom bottom',
        scrub: true
      }
    })

    gsap.to('#section-1', {
      y: -500,
      opacity: 0,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-2',
        start: 'top 40%',
        end: 'top top',
        scrub: true
      }
    })

    gsap.to('.section-2-text', {
      x: -500,
      opacity: 0,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.lisa-scroll-test',
        start: 'top 80%',
        end: 'top top',
        scrub: true,
      }
    })

    gsap.to('#image-1', {
      x: -700,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.lisa-scroll-test',
        start: 'top 80%',
        end: 'top top',
        scrub: true
      }
    })

    gsap.to('#caption-1', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.lisa-scroll-test',
        start: 'top 80%',
        end: 'top top',
        scrub: true
      }
    })

    ScrollTrigger.create({
      trigger: "#section-2",
      start: "top top",
      end: "bottom top",
      pin: ".pin-container",
      pinSpacing: false,
      scrub: true,
    });

    gsap.to('#section-3', {
      y: -200,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-3',
        start: 'top 110%',
        end: 'top center',
        scrub: true
      }
    })

    ScrollTrigger.create({
      trigger: "#second-intro-container",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    });

    gsap.fromTo("#caption-2",
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#image-section-1",
          start: "top top",
          end: "+=100%",
          scrub: true,
        }
      }
    );

    gsap.fromTo("#kirsty-lewis-2",
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#image-section-1",
          start: "top top+=20%", // slight delay
          end: "+=100%",
          scrub: true,
        }
      }
    );

    gsap.fromTo(".second-intro-divider",
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#image-section-1",
          start: "top top+=10%",
          end: "+=80%",
          scrub: true,
        }
      }
    );
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const backgroundImage: HTMLElement | null = document.getElementById('spring-container-background');

      if (backgroundImage) {
        backgroundImage.style.transform = `translateY(-${scrollTop * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Image priority src={SpringExpanded} id='spring-container-background' alt='test'/>
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', backdropFilter: 'blur(3px) brightness(80%)', zIndex: 5 }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 10, color: '#fff' }}>
        <div style={{ zIndex: 10 }}>
          <div className='featured-title-section-2'>
            <Image src={KirstyLewisProfile} alt='pfp' className='featured-profile-image'/>
            <h1>In Conversation With Kirsty Lewis:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>On PR and Relationships In The Workplace</strong></h1>
          </div>
          <div className='image-section' id='second-intro-container'>
            <div className='interactive-image-caption' id='caption-2'>
              <h3 className='kirsty-lewis-second-intro-text'><span className='drop-cap'>Kirsty Lewis</span> is public relations professional known for her impactful work in the beauty industry. As the Senior International PR & Influencer Manager at Huda Beauty and Kayali, she has played a pivotal role in shaping the brand’s global presence. She launched Fenty Beauty and Marc Jacobs Beauty in the UK and in 2018, she co-founded SEEN Group, a creative agency specialising in brand strategy and communications.</h3>
            </div>
            <div className='second-intro-divider'></div>
            <Image src={KirstyLewis2} alt='mary-greenwell' id='kirsty-lewis-2' />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default LisaEldridge;
