"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import '../styles/article.css'
import AutumnExpanded from '../../../assets/images/autumn-expanded.webp';
import ZakHeathProfile from '../../../assets/images/zak-heath-profile.webp';
import ZakHeathYoung from '../../../assets/images/zak-heath-young.webp';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from 'framer-motion';

const DiaryOfInfluencer = () => {
  const verticalScrollRef = useRef<HTMLDivElement | null>(null);


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

    gsap.to('.title-line-1', {
      minHeight: '80%',
      opacity: 1,
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

    gsap.to('.title-line-1', {
      y: '-100%',
      scrollTrigger: {
        trigger: '.article-title-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    gsap.to('.dream-room-title', {
      x: '-100%',
      scrollTrigger: {
        trigger: '.article-title-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    gsap.to('.dream-room-subtitle', {
      x: '100%',
      // ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.article-title-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    gsap.to('.article-intro-image', {
      y: '-20%',
      scrollTrigger: {
        trigger: '.article-title-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    gsap.to('.title-circle-1', {
      x: '50%',
      opacity: 0,
      scrollTrigger: {
        trigger: '.article-title-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    gsap.to('.title-rectangle-1', {
      x: '-50%',
      opacity: 0,
      scrollTrigger: {
        trigger: '.article-title-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    gsap.to('.circle-shape-1', {
      opacity: 1,
      x: '20%',
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.dream-room-transition-container',
        start: 'top bottom',
        end: 'center 60%',
        scrub: true,
      }
    });

    gsap.to('.dream-room-line-1', {
      minWidth: '60%',
      x: '20%',
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.dream-room-transition-container',
        start: 'top bottom',
        end: 'center 60%',
        scrub: true,
      }
    })

    gsap.to('.key-quote-1', {
      opacity: 1,
      x: '-20%',
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.dream-room-transition-container',
        start: 'top bottom',
        end: 'center 60%',
        scrub: true,
      }
    })

    gsap.to('.dream-room-line-2', {
      minHeight: '60%',
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#second-transition-container",
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
      }
    })

    gsap.to('.circle-shape-2', {
      scale: 1.25,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#second-transition-container",
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, [])

  return (
    <div className='dream-room-article-container'>
      <Image src={AutumnExpanded} className='dream-room-bg' alt='dream-room-bg'/>
      <div className='dream-room-article-content' ref={verticalScrollRef}>
        <Link href='/dream-room' className='article-back-button'><p>Back</p></Link>
        <div className='article-title-section'>
          <Image src={ZakHeathProfile} className='article-intro-image' alt='profile' />
          <h1 className='dream-room-title'>
            Diary <br/>Of An<br/>Influencer
          </h1>
          <div className='title-line-1'></div>
          <div className='title-line-2'></div>
          <motion.p
            className='dream-room-subtitle'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.25, duration: 1 }}
          >
            Contrary to popular belief,<br/>Lorem Ipsum is not simply random text. <br/>It has roots in a piece of classical <br/>Latin literature from 45 BC
          </motion.p>
          <div className='title-circle-1'></div>
          <div className='title-rectangle-1'></div>
        </div>
        <div className='padding-enforcer'>
          <p className='dream-room-paragraph-text'>I didn’t grow up rich, but I wouldn’t exactly say I was poor either. In sixth form, I was the boy on free school meals (FSM), always waiting until the end of lunch to avoid the dinner lady shouting that I had run out of credit. She wasn’t exactly the friendliest, so I’d always try and be nice, hoping she’d let me give more food than my credit allowed. It never worked. I grew up in Shakespeare’s town, Stratford-Upon-Avon, a nice town where some kids came to school with Louis Vuitton bags and belts. I saved every penny of my £4.50 an hour job to buy a Gucci belt and a Chanel bronzer, so nobody would ever comprehend I was on FSM. Looking back now, it was normal; many people were, but I brought this facade I learned to create at school online with me. </p>
          <div className='dream-room-transition-container'>
            <div className='dream-room-line-1'></div>
            <div className='circle-shape-1'></div>
            <div className='key-quote-1'>
              <h1 className='key-quote-text'>"I brought this facade<br/> I learned to create at <br/>school online with me"</h1>
            </div>
          </div>
          <p className='dream-room-paragraph-text'>“One day I’ll buy Valentino”, I used to tell myself - little did I know I’d be working with them three years later! From the products I bought to the content I wanted to create, I started making elevated TikTok videos in 2020 when the first lockdown hit, with the intention of one day being noticed by luxury fashion houses. I didn’t have direction, just a makeup bag and a dream. But. Knowing I was locked in a room, I knew nobody could say anything to me, and the negative comments I received online only fuelled me more. Using the hate I received as a boy wearing makeup became my USP, and I started to create educational and aesthetic videos of me applying makeup for those who wanted a natural and everyday makeup routine. I didn’t have much makeup, and I certainly couldn’t buy lots of expensive makeup; however, when Charlotte Tilbury, a luxury makeup brand, reached out to me, I knew I was doing something right. Aesthetically, I was both commercial and editorial, and being an 18-year-old boy really helped to segment me in the British beauty space. </p>
          <p className='dream-room-paragraph-text'>I had just finished my A-Levels. I got my predicted grades, three As and one A*, and I was accepted into Central Saint Martin’s to study Fashion Journalism - after being told from the age of eight that if I wanted a successful career in fashion, I needed to attend this school. I did, and it was exciting because my TikTok career was taking off. I had 150,000 followers and was beginning to make money from branded collaborations; however, I was only charging £200 and I had one collaboration a month. One of these brands also paid me two months late, so I moved to London with £34 and a £30 a week shopping list. I honestly didn’t expect it. I went from filming TikTok videos on a roll of toilet paper, which I had cut two sides out of to use as a phone stand, to investing in quality equipment as my platform grew. </p>
          <div className='dream-room-transition-container' id="second-transition-container">
            <div className='dream-room-line-2'></div>
            {/* <div className='key-quote-2'> */}
              <h1 className='key-quote-text' id="second-quote">"Using the hate<br/> I received as a boy wearing<br/>makeup became my USP"</h1>
            {/* </div> */}
            <div className='circle-shape-2'></div>
          </div>
          <p className='dream-room-paragraph-text'>Some days, I’d gain between 5,000 and 10,000 followers, and in one month, I generated 80 million views. Just imagine 80 million people - it still blows my mind. There were downsides. Being 18 and having an agent who financially took advantage of me was mentally shattering, as I really trusted them, but I lost huge amounts of money! At the time, turning 18 and figuring out “adult” responsibilities like invoices and accountants felt like I was getting thrown into adulthood, as I wasn’t enjoying “uni life” as much as I wanted to. Still, I’m also grateful because what 18-year-old can say they worked with YSL Beauty, Maybelline, NYX, Esteé Lauder, Clarins, Armani Beauty and getting gifted by Tom Ford, Prada, Pat McGrath and more. </p>
          <p className='dream-room-paragraph-text'>I became more experimental online, making food-inspired makeup and contouring my nose with eyelash curlers - that video generated 113 million views on TikTok - but my niche always remained the same: creating natural makeup content for everyone. I realised my influence, so I wanted to help people feel confident with makeup and further educate myself and others. Somebody referred to me at an event as the CEO of natural makeup, so I wrote that in my bios, and I haven’t changed them since. </p>
          <p className='dream-room-paragraph-text'>“You’re still doing it then?” Somebody made that comment at my high school reunion. Four years later, I’m living my 14-year-old dream, and I definitely haven’t figured it out, but I have loved helping people I know with advice about getting into the beauty industry, and therefore, I wanted to share what I have learnt on here. More importantly, I have met so many incredible people, and I want to share some of their stories and how they became beauty icons because I understand this industry is hard to navigate. With no textbooks and handouts from family, I want to tell my younger self that you will do all of this yourself but most importantly, I hope I can inspire you and grow with you in this industry too. </p>
          <div className='article-image-container'>
            <Image src={ZakHeathYoung} className="zak-heath-young" alt='profile' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiaryOfInfluencer
