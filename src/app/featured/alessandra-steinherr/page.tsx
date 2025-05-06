"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AlessandraSteinherrProfile from '../../../assets/images/alessandra-steinherr.webp';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import RihannaVogue from '../../../assets/images/rihanna-vogue.jpg';
import VogueParis from '../../../assets/images/vogue-paris.jpg';
import VogueJapan from '../../../assets/images/vogue-japan.webp';
import VogueTurkey from '../../../assets/images/vogue-turkey.jpg';
import { useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { ScrollControls, OrbitControls, useScroll } from '@react-three/drei';
import Lipstick from '@/components/lipstick';
import './style.css'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AlessandraSteinherr = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const trigger = ScrollTrigger.create({
    //   trigger: '.alessandra-intro',
    //   start: 'top top',
    //   end: 'bottom bottom',
    //   scrub: true,
    //   onUpdate: (self) => {
    //     setScrollProgress(self.progress); // value from 0 to 1
    //   }
    // });

    ScrollTrigger.create({
      trigger: ".alessandra-intro",
      start: "top top",
      end: "+=300%",
      pin: ".alessandra-intro",
      pinSpacing: false,
      scrub: true,
    });

    // gsap.to('.lipstick-container', {
    //   y: '-100%',
    //   ease: 'power1.inOut',
    //   scrollTrigger: {
    //     trigger: '.alessandra-intro',
    //     start: 'top 20%',
    //     end: 'top top',
    //     scrub: true,
    //   }
    // })

    ScrollTrigger.create({
      trigger: ".lipstick-container",
      start: "top 10%",
      end: "+=5000",
      pin: ".lipstick-container",
      pinSpacing: false,
      scrub: true,
    });

    gsap.to('.alessandra-intro-text', {
      opacity: 0,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.alex-scroll-test',
        start: 'center 80%',
        end: 'center top',
        scrub: true
      }
    })

    gsap.to('.lipstick-container', {
      x: -700,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.alex-scroll-test',
        start: 'center 85%',
        end: 'center top',
        scrub: true
      }
    })

    ScrollTrigger.create({
      trigger: "#section-1",
      start: "top top",
      end: "+=100%",
      pin: "#section-1",
      pinSpacing: false,
      scrub: true,
    });
  }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const backgroundImage: HTMLElement | null = document.getElementById('spring-container-background');
//
//       if (backgroundImage) {
//         backgroundImage.style.transform = `translateY(-${scrollTop * 0.05}px)`;
//       }
//     };
//
//     window.addEventListener('scroll', handleScroll);
//
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

  return (
    <>
      <Image priority src={SpringExpanded} id='spring-container-background' alt='test'/>
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', backdropFilter: 'blur(3px) brightness(80%)', zIndex: 5 }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 10, color: '#fff' }}>
        <div style={{ zIndex: 10 }}>
          <div className='featured-title-section'>
            <Image src={AlessandraSteinherrProfile} alt='pfp' className='featured-profile-image'/>
            <h1>In Conversation with Alessandra Steinherr:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>From Print Journalism to Digital Content</strong></h1>
          </div>
        </div>
        <div className='alessandra-intro'>
          <div className='pin-container'>
            <div className='alessandra-intro-text'>
              <h2>Alessandra reflects on her journey as Glamour’s youngest beauty director at 26, to becoming an influencer in this constantly changing beauty landscape.</h2>
              <p>Alessandra Steinherr is a beauty journalist with over two decades of experience serving as Beauty Director at Cosmopolitan for six years and at Glamour magazine for eleven years before concentrating more on socials and becoming an influencer. What sets her apart, in this saturated digital landscape, is that she combines her online career, with her role as the Beauty Director at The Glossary magazine whilst having a consultancy business too.</p>
            </div>
          </div>
        </div>
        <div className='lipstick-container'>
          <Canvas className='lipstick-canvas' style={{ width: '500px', height: '80vh'}}>
            <Environment preset='studio' />
              <Lipstick scrollProgress={scrollProgress} />
          </Canvas>
        </div>
        <div className='alex-scroll-test'></div>
        <div className='text-section' id='section-1'>
          <div style={{ width: '50%' }}>
            <h1 className='text-section-title'>What was your first interaction with magazines and beauty?</h1>
            <p className='featured-paragraph-text'>I was reading magazines from such a young age. My grandmother was a dressmaker and had Italian Vogue, Periscope, and other fashion magazines. I wasn’t a skinny girl, so I didn’t connect with fashion models because I couldn’t fit into those bikinis, but I loved the beauty sections—the faces, skin, and hair. Allure was American; it was my bible, but it wasn’t easily available where I lived in Austria, so I found an English-speaking bookshop, which always had one, and I’d run to buy it. I was obsessed. It’s not like today, where you can go on your phone and find new information. It was always my dream to become a beauty editor.</p>
          </div>
        </div>
        <div className='another-div'>

        </div>
      </div>
    </>
  )
}

export default AlessandraSteinherr
