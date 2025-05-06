"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AlessandraSteinherrProfile from '../../../assets/images/alessandra-steinherr.webp';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import RihannaVogue from '../../../assets/images/rihanna-vogue.jpg';
import VogueParis from '../../../assets/images/vogue-paris.jpg';
import VogueJapan from '../../../assets/images/vogue-japan.webp';
import VogueTurkey from '../../../assets/images/vogue-turkey.jpg';
import HarpersBazaar from '../../../assets/images/harpers-bazaar.jpg';
import LisaEldridge2 from '../../../assets/images/lisa-eldridge-2.webp';
import LisaEldridge4 from '../../../assets/images/lisa-eldridge-4.webp';
import LisaEldridge8 from '../../../assets/images/lisa-eldridge-8.jpg';
import DuaLipa from '../../../assets/images/dua-lipa-lisa-eldridge.jpg';
import './style.css'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AlessandraSteinherr = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mags = document.querySelector(".mag-covers")!;

    // if (mags !== null) {
      function getScrollAmount() {
        let magsWidth = mags.scrollWidth;
        return -(magsWidth - window.innerWidth);
      }

      const tween = gsap.to(mags, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger:".mag-wrapper",
        start:"top 12%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin:true,
        animation: tween,
        scrub:1,
        invalidateOnRefresh: true,
      })


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
      trigger: "#image-section-1",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    });

    gsap.fromTo("#mary-greenwell-image",
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

    gsap.fromTo("#caption-2",
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

    gsap.fromTo(".mary-greenwell-line",
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

    gsap.to('#section-4', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-4',
        start: 'top center',
        end: 'top -100%',
        scrub: true,
      }
    })

    gsap.to('#section-5', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-5',
        start: 'top -50%',
        end: 'top -100%',
        scrub: true,
      }
    })

    gsap.to('#section-6', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-6',
        start: 'top -50%',
        end: 'top -100%',
        scrub: true,
      }
    })

    ScrollTrigger.create({
      trigger: "#section-4",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: "#section-5",
      start: "top top",
      end: "+=50%",
      pin: true,
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: "#section-6",
      start: "top top",
      end: "+=50%",
      pin: true,
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: ".image-column",
      start: "top 10%",
      end: "+=300%",
      pin: true,
      scrub: true,
    });

    gsap.to('#image-item-1', {
      opacity: 0,
      y: -100,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-4',
        start: 'top -20%',
        end: 'bottom top',
        scrub: true,
      }
    })

    gsap.to('#image-item-2', {
      opacity: 1,
      top: '0%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-5',
        start: 'top center',
        end: 'top top',
        scrub: true,
      }
    })
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
          <div className='featured-title-section'>
            <Image src={AlessandraSteinherrProfile} alt='pfp' className='featured-profile-image'/>
            <h1>In Conversation with Alessandra Steinherr:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>From Print Journalism to Digital Content</strong></h1>
          </div>
          <div className="mag-wrapper">
            <div className="mag-covers">
              <div>
                <h3 style={{ marginBottom: '10px' }}><span className='drop-cap'>Alessandra Steinherr</span> reflects on her journey as Glamour’s youngest beauty director at 26, to becoming an influencer in this constantly changing beauty landscape.</h3>
                <h3>Alessandra Steinherr is a beauty journalist with over two decades of experience serving as Beauty Director at Cosmopolitan for six years and at Glamour magazine for eleven years before concentrating more on socials and becoming an influencer. What sets her apart, in this saturated digital landscape, is that she combines her online career, with her role as the Beauty Director at The Glossary magazine whilst having a consultancy business too.</h3>
              </div>
              <div className='grow-line-1'></div>
              <Image src={RihannaVogue} alt='rihanna' />
              <Image src={VogueJapan} alt='vogue-japan' />
              <Image src={VogueParis} alt='vogue-paris' />
              <Image src={VogueTurkey} alt='vogue-turkey' />
              <Image src={HarpersBazaar} alt='harpers-bazaar' />
            </div>
          </div>

        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default AlessandraSteinherr
