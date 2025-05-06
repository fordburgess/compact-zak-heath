"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AlessandraSteinherrProfile from '../../../assets/images/alessandra-steinherr.webp';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import AlessandraPrimark from '../../../assets/images/alessandra-primark.png';
import { useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import GlamourMag from '../../../assets/images/glamour-mag.webp';
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
      end: "+=7000",
      pin: ".lipstick-container",
      pinSpacing: false,
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: ".second-image-container",
      start: "top top",
      end: "+=4400",
      pin: ".second-image-container",
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
      x: -900,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.alex-scroll-test',
        start: 'center 85%',
        end: 'center top',
        scrub: true
      }
    })

    gsap.to('.canvas-pointer-line', {
      height: '50px',
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '#section-1',
        start: 'top 150%',
        end: 'top bottom',
        scrub: true
      }
    })

    gsap.to('.model-caption', {
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '#section-1',
        start: 'top 150%',
        end: 'top bottom',
        scrub: true
      }
    })


    const textSections = document.querySelectorAll('.text-section')!;
    textSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: "top top",
        end: "+=100%",
        pin: `#${section.id}`,
        pinSpacing: false,
        scrub: true,
      });
    })

    ScrollTrigger.create({
      trigger: ".glamour-mag-section",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    });

    gsap.fromTo(".glamour-mag-image",
      { x: "-100%", opacity: 0 },
      {
        x: "10%",
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".glamour-mag-section",
          start: "top top",
          end: "+=100%",
          scrub: true,
        }
      }
    );

  }, []);

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
          <Canvas className='lipstick-canvas' style={{ width: '500px', height: '80vh' }}>
            <Environment preset='studio' />
              <Lipstick scrollProgress={scrollProgress} />
          </Canvas>
          <div className='canvas-pointer-line'></div>
          <p className='model-caption'>The MACxAlessandra lipstick from MAC Cosmetic’s collaboration with 10 leading influencers around the world in 2017 (Image credit: Pop Sugar).</p>
        </div>
        <div className='alex-scroll-test'></div>
        <div className='text-section' id='section-1'>
          <div style={{ width: '50%' }}>
            <h1 className='text-section-title'>What was your first interaction with magazines and beauty?</h1>
            <p className='featured-paragraph-text'>I was reading magazines from such a young age. My grandmother was a dressmaker and had Italian Vogue, Periscope, and other fashion magazines. I wasn’t a skinny girl, so I didn’t connect with fashion models because I couldn’t fit into those bikinis, but I loved the beauty sections—the faces, skin, and hair. Allure was American; it was my bible, but it wasn’t easily available where I lived in Austria, so I found an English-speaking bookshop, which always had one, and I’d run to buy it. I was obsessed. It’s not like today, where you can go on your phone and find new information. It was always my dream to become a beauty editor.</p>
          </div>
        </div>
        <div className='text-section' id='section-2'>
          <div style={{ width: '50%' }}>
            <h1 className='text-section-title'>Did you study journalism or something completely different?</h1>
            <p className='featured-paragraph-text'>I studied business and economics in America and Belgium, but my heart was always set on beauty journalism. My dad insisted I get a degree first because then I could do whatever I wanted, and to be honest, I don’t think you need to study journalism to be a beauty journalist because in any course you study, you learn how to write and how to compose and structure sentences. But to be a beauty journalist, yes, you need to have an idea about the business of beauty. Looking back, my studies helped me understand the industry from a commercial perspective.</p>
          </div>
        </div>
        <div className='text-section' id='section-3'>
          <div style={{ width: '50%' }}>
            <h1 className='text-section-title'>What was your first job?</h1>
            <p className='featured-paragraph-text'>My first paid ‘official’ job in journalism was as a beauty assistant at a magazine called Shine, which doesn’t exist anymore. My salary was £13,000 a year - not much, but I was thrilled to be there, and I think I must have been 23 or 24. Before that, I had work experience, but it was unpaid back then. Nowadays, that’s not allowed, thank God; now you have to be paid!</p>
          </div>
        </div>
        <div className='text-section' id='section-4'>
          <div style={{ width: '50%' }}>
            <h1 className='text-section-title'>How did you navigate unpaid work in the industry?</h1>
            <p className='featured-paragraph-text'>I had a completely unpaid internship at Marie Claire, so I basically paid to work. It was worth it, so I don’t regret it, and I was grateful even to be there. Since I’m not from London, I couldn’t live at home, so, before moving, I worked at a law office in Austria, doing translations and assistant work to save money for a few months until I had enough to afford the rent for a room in Lancaster Gate.</p>
          </div>
        </div>
        <div className='text-section' id='section-5' style={{ marginBottom: '80vh' }}>
          <div style={{ width: '50%' }}>
            <h1 className='text-section-title'>What were your early career struggles?</h1>
            <p className='featured-paragraph-text'>Firstly, I had no contacts in the industry, so when I got a job at Marie Claire, I wanted to be in the beauty department, but due to a mix-up, I was placed in reception. It should’ve been a paid role, but I said, ‘I’m going to make this work’. I made myself useful and volunteered for everything—photocopies, organising beauty cupboards and whatever was needed. It was a Devil Wears Prada kind of environment, very hierarchical. Interns didn’t talk to editors directly; interns talked to assistants.</p>
          </div>
        </div>
        <div className='second-image-container'>
          <Image src={AlessandraPrimark} alt='alessandra-primark' />
          <p>Alessandra Steinherr x Primark. The collection focused on affordable but effective products (Image credit: Pop Sugar)</p>
        </div>
        <div style={{ height: '50vh', width: '50vw' }}></div>
        <div className='text-section' id='section-6'>
          <div style={{ width: '50%' }}>
            <h1 className='text-section-title'>How did you manifest your entry into journalism?</h1>
            <p className='featured-paragraph-text'>My dream has always been to be a beauty editor. Every day, on my way to work, sitting on the bus from Lancaster Gate, I looked out at the Thames and told myself, 'One day, I’ll be the beauty director of the biggest magazine in the UK’. I didn’t know which one; I just knew it would happen. And it did; when I joined Glamour, it was the best-selling magazine at the time in terms of sales and most popular for beauty at the time.</p>
          </div>
        </div>
        <div className='text-section' id='section-7'>
          <div style={{ width: '50%' }}>
            <h1 className='text-section-title'>You became the youngest beauty director at Glamour at 26. What was that like?</h1>
            <p className='featured-paragraph-text'>It was intense. I wanted the role, and I worked hard for it, but I wasn’t fully prepared for the pressure. It was isolating because I didn’t want to show any signs of struggle. Other directors questioned why I was there at such a young age. Looking back, I could have benefitted from one more time learning the ropes, but I don’t regret it - it shaped me. I worked nonstop, even on Christmas, just to prove myself.</p>
          </div>
        </div>
        <div className='text-section' id='section-8'>
          <div style={{ width: '50%' }}>
            <h1 className='text-section-title'>How did you find your USP as a beauty director?</h1>
            <p className='featured-paragraph-text'>Unlike most beauty writers, I was also involved in styling and creative direction, and we did many beauty shoots because I loved directing beauty and the creative process. I worked with makeup artists like Lisa Eldridge MBE and Charlotte Tilbury MBE, creating concepts, selecting photographers, and directing shoots. My favourite part of these shoots was watching everyone come together, and seeing how the model was transformed with their makeup, hairstyling and manicures. Glamour was like Vogue’s little sister, so we got the up-and-coming models before they exploded into the scene, for example: Bella Hadid. Gigi was already famous, but Bella was just beginning her journey; she was so lovely and gorgeous, and it was exciting to be part of her first shoots. Another memorable shoot was with Rosie Huntington-Whiteley, who I shot with a lot because she’s obsessed with beauty. She wasn’t just the model, but she’d sit there and go through the products. She was such a strong person to work with! These shoots were expensive, and we’d fly to New York or photograph on location; however, now because of budgets, these don’t happen as much.</p>
          </div>
        </div>
        <div style={{ height: '50vh', width: '100vw'}}></div>
        <div className='glamour-mag-section'>
          <Image src={GlamourMag} className='glamour-mag-image' alt='glamour-mag-cover' />
        </div>
        <div style={{ height: '200vh' }}></div>
      </div>
    </>
  )
}

export default AlessandraSteinherr
