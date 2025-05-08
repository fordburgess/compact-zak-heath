"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import '../styles/article.css'
import AutumnExpanded from '../../../assets/images/autumn-expanded.webp';
import ZakHeathProfile from '../../../assets/images/zak-heath-profile.webp';
import ZakHeathYoung from '../../../assets/images/zak-heath-young.webp';
import { useMediaQuery } from 'usehooks-ts';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from 'framer-motion';

const DiaryOfInfluencer = () => {
  const verticalScrollRef = useRef<HTMLDivElement | null>(null);
  const mobile = useMediaQuery('(max-width: 1000px');


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

    gsap.to('.dream-room-subtitle', {
      y: '-20%',
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
      minWidth: mobile ? '70%' : '40%',
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
      x: '80%',
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
      <Image priority src={AutumnExpanded} className='dream-room-bg' alt='dream-room-bg'/>
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
          >
            This industry can feel impossible<br/> to break into, especially when<br/> you weren’t born into it. Somehow, I found<br/> my way in, and this is how I did it.
          </motion.p>
          <div className='title-circle-1'></div>
          <div className='title-rectangle-1'></div>
        </div>
        <div className='padding-enforcer'>
          <p className='dream-room-paragraph-text'>I didn’t grow up rich, but I wouldn’t exactly say I was poor either. In sixth form, I was the boy on free school meals (FSM), always waiting until the end of lunch to avoid the dinner lady shouting that I had run out of lunch credit. She wasn’t the friendliest, so I’d always try and be nice, hoping she’d let me get more food than my credit allowed. It never worked. I grew up in Shakespeare’s town, Stratford- Upon-Avon, a nice place where some kids came to school in designer clothes. I saved every penny of my £4.50 an hour job to buy a Gucci belt and a Chanel bronzer, so nobody would ever comprehend I was on FSM. Looking back now, it was normal; many people were, we were just ordinary kids at a state school.</p>
          <div className='dream-room-transition-container'>
            <div className='dream-room-line-1'></div>
            <div className='circle-shape-1'></div>
            <div className='key-quote-1'>
              <h1 className='key-quote-text' id="doai-1">"I brought this facade<br/> I learned to create at <br/>school online with me"</h1>
            </div>
          </div>
          <p className='dream-room-paragraph-text'>“One day I’ll buy Valentino”, I used to tell myself. I clearly manifested it because four years later, they became a client of mine. I was strategic with the products I showed and the content I created, so I started to make elevated videos in 2020 when the first lockdown hit, with the intention of one day being noticed by the luxury fashion houses. I didn’t have direction, just a makeup bag and a dream.</p>
          <p className='dream-room-paragraph-text'>Being locked inside of our homes, I knew nobody could say anything to me; however, the negative comments online only fuelled me to post more. I liked teasing the haters with videos of me applying more makeup because I knew it tortured them to see a boy wearing cosmetics. This became my USP and I started to create everyday makeup looks.</p>
          <div className='dream-room-transition-container' id="second-transition-container">
            <div className='dream-room-line-2'></div>
            {/* <div className='key-quote-2'> */}
              <h1 className='key-quote-text' id="doai-2">"Using the hate I received as a boy wearing makeup became my USP"</h1>
            {/* </div> */}
            <div className='circle-shape-2'></div>
          </div>
          <p className='dream-room-paragraph-text'>Despite the hate, I began to get attraction from brands including Fenty Beauty and Charlotte Tilbury. It reinforced to me I was doing something right, so I continued to create content the way I already was. Aesthetically, I was both commercial and editorial, and being a 17-year-old boy really helped to segment me in the British beauty space.</p>
          <p className='dream-room-paragraph-text'>I had just finished my A-Levels. I got my predicted grades, three As and one A*, and I was accepted into Central Saint Martin’s to study Fashion Journalism. My TikTok career was beginning to take off; however, I didn’t yet see it as a business. I was only making a few hundred pounds a month and I remember moving to London with £34 in my bank account.</p>
          <p className='dream-room-paragraph-text'>The summer before uni started, I stayed at home and didn’t really leave the house. I just focused on building a platform and the day I drove down to London, I remember having exactly 150,000 followers.</p>
          <p className='dream-room-paragraph-text'>I went from filming TikTok videos on a roll of toilet paper, which I had cut two sides out of to use as a phone stand, to investing in quality equipment as my platform grew. Some days, I’d gain between 5,000 and 10,000 followers, and in one month, I generated 80 million views. Just imagining 80 million people still blows my mind.</p>
          <p className='dream-room-paragraph-text'>There were downsides of course. Being 18 and having an agent who financially took advantage of me was mentally shattering, as I really trusted them whilst losing huge amounts of money! Figuring out adult responsibilities like invoices and accountants was overwhelming too, so I wasn’t enjoying my “uni life” as much as I wanted to.</p>
          <p className='dream-room-paragraph-text'>I became more experimental online, mixing food and makeup and contouring my nose with eyelash curlers, generating 113 million views on TikTok alone. At the same time, I was referred to as the CEO of Natural Makeup, and I still use it as my USP. However, at a high school reunion a snarky remark was made, “you’re still doing it then?” It made me realise that not everybody is going to understand this job. The strategy, the time, the work which goes into creating an online personal brand. That is what being an influencer is, you’re creating a brand for yourself. When people still make remarks, I stay quiet because their beliefs are only a reflection of themselves, but deep down it does still annoy me.</p>
          <p className='dream-room-paragraph-text'>Through this platform, I want to share the incredible stories of the people I've met in the beauty industry to help inspire and guide you—especially if you're unsure where to start. There’s space for all of us in this industry, and I can’t wait to grow together with you. xx</p>
          <div className='article-image-container'>
            <Image src={ZakHeathYoung} className="zak-heath-young" alt='profile' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiaryOfInfluencer
