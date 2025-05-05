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
import './test.css'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Test = () => {

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const mags = document.querySelector('.mags');
//
//     if (mags) {
//       console.log(mags.offsetWidth)
//     }
//
//     function getScrollAmount() {
//       let magsWidth = mags.scrollWidth;
//       console.log(-(magsWidth - window.innerWidth));
//       return -(magsWidth - window.innerWidth);
//     }
//
//     const tween = gsap.to(mags, {
//       x: getScrollAmount,
//       duration: 3,
//       ease: "none",
//     });
//
//     ScrollTrigger.create({
//       trigger: ".mag-cover-wrapper",
//       start: "top 20%",
//       end: () => `+=${getScrollAmount() * -1}`,
//       pin: true,
//       animation: tween,
//       scrub: 1,
//       invalidateOnRefresh: true,
//       markers: true
//     });
//
//   }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mags = document.querySelector(".mag-covers");

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

  }, [])


  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', }}>
        {/* <Image priority src={SpringExpanded} id='test-container-background' alt='test'/> */}
        <div className='featured-title-section'>
          <Image src={LisaEldrigdeProfile} alt='pfp' className='featured-profile-image'/>
          <h1>In Conversation With Lisa Eldridge MBE:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>Becoming A World Class Makeup Artist</strong></h1>
        </div>
        <div className="mag-wrapper">
          <div className="mag-covers">
            <h3><span className='drop-cap'>Lisa Eldridge MBE</span> is known for her innovative yet timeless approach to makeup. She has worked with celebrities including Dua Lipa, Cindy Crawford, Rihanna, Keira Knightley and many more. In 2015, she was appointed Creative Director of Lancôme Makeup and in 2018, she launched her own award-winning beauty brand. She is also a respected historian of vintage makeup and she has written Face Paint: The Story of Makeup.</h3>
            <div className='grow-line-1'></div>
            <Image src={RihannaVogue} alt='rihanna' />
            <Image src={VogueJapan} alt='vogue-japan' />
            <Image src={VogueParis} alt='vogue-paris' />
            <Image src={VogueTurkey} alt='vogue-turkey' />
            <Image src={HarpersBazaar} alt='harpers-bazaar' />
          </div>
        </div>
        <div className='text-section' id='section-1'>
          <h1 className='text-section-title'>What name would you have chosen, if you could have been called anything else?</h1>
          <p className='featured-paragraph-text'>Oh, my God, well, my mum was actually going to call me Nina. And then, last minute, she changed it to Lisa. At one point, I thought I would have preferred Nina—I like it better. Honestly, I don’t like Lisa.</p>
        </div>
        <div className='text-section' id='section-2'>
          <h1 className='text-section-title'>What were your first experiences with makeup?</h1>
          <p className='featured-paragraph-text'>It started when I found my mum’s old makeup after we moved back to England from New Zealand. She had this box with little drawers, filled with 1960s makeup like Biba and Mary Quant that was really playful and colourful. Makeup from that era was designed for teenagers, so it had this childlike, crayon-like quality that I loved because of the objects and textures and for me, that was the turning point. I was also really inspired by the “vintageness”, because I knew it was old makeup and that was more interesting than modern makeup. I also used to draw on paper with it because it was more interesting than using regular crayons and art supplies. For my 13th birthday, I got a book on stage and theatrical makeup, and it blew my mind. The transformations, the way you could create light and shade, it was like art. I knew that’s what I wanted to do.</p>
        </div>
      </div>
    </>
  )
}

export default Test
