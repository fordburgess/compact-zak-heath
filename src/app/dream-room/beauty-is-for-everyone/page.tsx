"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import '../styles/article.css'
import AutumnExpanded from '../../../assets/images/autumn-expanded.webp';
import ZakHeathUncle from '../../../assets/images/zak-heath-uncle.webp';
import ZakAndLisa from '../../../assets/images/zak-and-lisa.webp';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from 'framer-motion';

const FromConcealerToConfidence = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.dream-room-bg', {
      y: -500,
      ease: 'none',
      scrollTrigger: {
        trigger: '.dream-room-article-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.article-intro-image', {
      // y: '-10%',
      opacity: 1,
      delay: 1,
      duration: 1,
    })

    gsap.to('.dream-room-title', {
      y: '20%',
      opacity: 1,
      duration: 1,
    })

    gsap.to('.fctc-title', {
      opacity: 1,
      y: '0%',
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5
    })

    gsap.to('.fctc-subtitle', {
      opacity: 1,
      y: '0%',
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5
    })

    gsap.to('.fctc-line-1', {
      width: '80%',
      delay: 1,
      duration: 1,
      scrub: true,
    })

    gsap.to('.title-line-2', {
      minWidth: '40%',
      opacity: 1,
      delay: 1,
      duration: 1,
    })

    gsap.to('.fctc-title', {
      x: 100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.fctc-title-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    gsap.to('.fctc-subtitle', {
      x: -100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.fctc-title-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    gsap.to('.fctc-line-1', {
      width: '10px',
      scrollTrigger: {
        trigger: '.fctc-title-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    gsap.to('.fctc-circle-2', {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: '#fctc-trans-1',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    })

    gsap.to('.fctc-circle-3', {
      x: 600,
      opacity: 0,
      scrollTrigger: {
        trigger: '#fctc-trans-1',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    })

    gsap.to('.key-quote-1', {
      y: -400,
      opacity: 1,
      scrollTrigger: {
        trigger: '#fctc-trans-1',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    })

    gsap.to('.fctc-line-2', {
      scaleY: '8',
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '#fctc-trans-2',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
      }
    })

    gsap.to('#zak-uncle-caption', {
      y: -50,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '#fctc-trans-2',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
      }
    })

    gsap.to('.fctc-rectangle-1', {
      y: 10,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#fctc-trans-3',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      }
    })

    gsap.to('.fctc-line-3', {
      scaleX: '35',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#fctc-trans-3',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      }
    })

    gsap.to('#fctc-quote-2', {
      y: 30,
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#fctc-trans-3',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      }
    })

    gsap.to('.fctc-rectangle-2', {
      borderRadius: '50%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#fctc-trans-4',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      }
    })

    gsap.to('#fctc-quote-3', {
      y: -150,
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#fctc-trans-4',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      }
    })

    gsap.to('.fctc-line-4', {
      scaleY: '8',
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '#fctc-trans-5',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
      }
    })

    gsap.to('#zak-lisa-caption', {
      y: -50,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '#fctc-trans-5',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
      }
    })

  }, [])

  return (

    <div className='dream-room-article-container'>
      <Image priority src={AutumnExpanded} className='dream-room-bg' alt='dream-room-bg'/>
      <div className='dream-room-article-content'>
        <Link href='/dream-room' className='article-back-button'><p>Back</p></Link>
        <div className='fctc-title-section'>
          <h1 className='fctc-title'>
            From Concealer<br/> to Confidence
          </h1>
          <div className='fctc-line-1'></div>
          <h3
            className='fctc-subtitle'
          >
            Beauty is for everyone, <br/> so let's build together 
          </h3>
        </div>
        <div className='padding-enforcer'>
          <p className='dream-room-paragraph-text'>I often wonder if my uncle knew how much of a positive impact he would have on me, a 13-year-old boy navigating identity and insecurity; perhaps he might have chosen differently. My uncle Matthew, a charismatic model and actor who travelled the world as the personification of male beauty, tragically took his life five years before I was born. "He would have loved you very much," my mum used to say.</p>
          <div className='dream-room-transition-container' id='fctc-trans-1'>
            <div className='fctc-circle-2'></div>
            <div className='fctc-circle-3'></div>
            <div className='key-quote-1' id='fctc-quote-1'>
              <h1 className='key-quote-text'>"this industry is hard to get into. Together, we can create a future in this space”</h1>
            </div>
          </div>
          <p className='dream-room-paragraph-text'>At fourteen, before heading to a birthday party, I stared angrily at an extraterrestrial-looking red pimple on my forehead. I froze when my mum called it "gross" and handed me a concealer. "I can't wear this; that's gay," as I was scared of feeling emasculated when I already felt different and had constant churning emotions regarding how people perceived me. But my mum, unfazed, told me to "grow up" and shared a story about my uncle. Matthew, she explained, wore makeup as a working male model in the 90s. He was confident, successful, and unashamed. My mum was so comforting about it, but she also gave the eye like she'd disown me if I didn't grab this concealer from her hand; I gave in and applied the It Cosmetics Bye Bye Undereye on this red bulbous pimple. It was the beginning of something transformative. I felt an immediate sense of relief - both in hiding my insecurity and in feeling an odd, almost spiritual connection to my uncle I had never met because although we weren't blood-related (my mum's siblings were all adopted), I imagined Matthew's confidence on set, his flawless skin under the spotlight, and wondered if makeup gave him the same reassurance it was now giving me. That small act of applying concealer sparked a curiosity I couldn't ignore.</p>
          <div className='dream-room-transition-container' id='fctc-trans-2'>
            <div className='image-with-caption' style={{ zIndex: -1, }}>
              <Image src={ZakHeathUncle} alt='zak-heath-uncle'/>
            </div>
            <div className='fctc-line-2'></div>
            <p className='image-caption' id='zak-uncle-caption'>One of the photos I have of my uncle Matthew</p>
          </div>
          <p className='dream-room-paragraph-text'>So, if it was my mum or uncle's influence, I was rummaging through my mum's green Clinique makeup bag before long. Despite my initial feelings of intrigue, I still cared about what others might think about me, whether that be men weren't supposed to wear makeup unless it was artistic, they're celebrities, or they're gay. I knew my uncle was gay, and when coming out to my mum, I felt comfort knowing that; however, I still wasn't ready to admit it to my mum or myself, but I could admit - I loved my mum's YSL Beauty All Hours Foundation. "Where have you put my foundation?" or "I have a thief for a son" were soon being shouted up the stairs, followed by an angry woman rampaging my room quite frequently to collect her things. </p>
          <div className='dream-room-transition-container' id='fctc-trans-3' style={{ zIndex: -1 }}>
            <div className='fctc-line-3'></div>
            <div className='fctc-rectangle-1'></div>
            <div id='fctc-quote-2'>
              <h1 className='key-quote-text' id='fctc-quote-text-2'>“I soon encountered the harsh reality of online hate and the infamous keyboard warriors”</h1>
            </div>
          </div>
          <p className='dream-room-paragraph-text'>Years prior, I'd feel my mum's excitement at the Debenhams makeup counters or see her eagerness to apply her favourite Bareminerals lipstick in the mirror at home. I'd become her little helper, exploring the textures and colours. Now that I understood the ritual, I, too, began to crave it.</p>
          <p className='dream-room-paragraph-text'>By this point, I had come out, mum knew - everybody knew - I knew deep down, but looking back, I do think fourteen was still such a young and brave age to say I was gay. Knowing I could be myself - which I'm forever grateful for - I stopped watching from afar and eventually bought an eight-pan highlighter palette from Makeup Revolution from my local Superdrug. My makeup collection grew rapidly, and I bought lipsticks, eyeshadows, mascaras and blushes to follow the 2018 beauty gurus like Manny MUA, James Charles and Tati Westbrook. Yet, the cut creases and matte lipsticks felt performative, a persona I thought I needed as a newly out gay teen. It wasn't until I experimented with more natural makeup, taking the tips and tricks I learnt from glam makeup. I'd blend the Nivea moisturiser into my stolen YSL Beauty All Hours foundation for a subtle glow that I felt truly comfortable in. Little did I know that this "clean" makeup style would one day become popularised on social media as the "clean girl" look, which would be one of the reasons I astronomically grew on TikTok four years later.</p>
          <p className='dream-room-paragraph-text'>After having multiple conversations with myself in the mirror and giving my reflection reviews of the products I was using, when lockdown terrorised the world, I needed a creative outlet, so I started to make videos on TikTok. I was by no means a professional makeup artist, but I wanted to share my knowledge, skills, and confidence, and I knew nobody could say anything to me because we were locked inside our rooms. But I soon encountered the harsh reality of online hate and the infamous keyboard warriors. Comments like "this is disgusting," "Makeup is for women," and "You're a boy" flooded my content.</p>
          <div className='dream-room-transition-container' id='fctc-trans-4' style={{ zIndex: -1 }}>
            <div className='fctc-rectangle-2'></div>
            <div id='fctc-quote-3'>
              <h1 className='key-quote-text' id='fctc-quote-text-3'>“It was the beginning of something transformative”</h1>
            </div>
          </div>
          <p className='dream-room-paragraph-text'>Four years later, I've built a community of over 1.5 million followers across TikTok, YouTube, Snapchat, and Instagram after having an incredible trajectory of growth from replying to these hate comments. I used this hate to positively create editorial, satisfying and humorous content to reimagine the saying actions speak louder than words. I wasn't being vocal, but instead, I showed that men can wear makeup, which really resonated with people because I wasn't angered by their words, but I was showcasing something I enjoy. I created practical tutorials for men who wanted quick, natural makeup solutions, who, like me at fourteen, just wanted to cover their imperfections. To my surprise, my videos resonated not just with men but with women as well. By showcasing traditionally "feminine" products like the Charlotte Tilbury Foundation and Nars concealer in a way that worked for everyone, I was breaking stereotypes and showing makeup as a tool of empowerment and that it is for everybody. People loved it, brands loved it and the videos I started making in my bedroom have led me to have some incredible experiences, alongside meeting the beauty Icons!</p>
          <div className='dream-room-transition-container' id='fctc-trans-5'>
            <Image src={ZakAndLisa} id='zak-and-lisa' alt='zak-and-lisa'/>
            <div className='fctc-line-4'></div>
            <p className='image-caption' id='zak-lisa-caption'>Lisa Eldridge and I at her brand event</p>
          </div>
          <p className='dream-room-paragraph-text'>This platform began as my Final Major Project (FMP) whilst studying Fashion Communication: Fashion Journalism at Central Saint Martins. What started as a university submission quickly became something much bigger. The more Icons in beauty I interviewed, the more I realised just how many people could also learn, grow and feel empowered through these stories. Everybody is doing life for the first time, so hearing each story was genuinely transformative. I also wrote down notes and quotes I've pinned onto my own manifestation board. I couldn't keep their insights to myself, so I created this space to share with you. These articles and podcasts offer real behind-the-scenes insights into what it takes to build a career within beauty, as yes, this industry is hard to get into. Together, we can create a future in this space.</p>
        </div>
      </div>
    </div>
  )
}

export default FromConcealerToConfidence
