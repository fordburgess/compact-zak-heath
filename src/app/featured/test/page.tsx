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
    const races = document.querySelector(".races");
    console.log(races.offsetWidth)

    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger:".racesWrapper",
      start:"top 12%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin:true,
      animation: tween,
      scrub:1,
      invalidateOnRefresh:true,
      markers:true
    })

  }, [])


  return (
    <>
      <Image priority src={SpringExpanded} id='test-container-background' alt='test'/>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 10, color: '#fff', }}>
        <div className='featured-title-section'>
          <Image src={LisaEldrigdeProfile} alt='pfp' className='featured-profile-image'/>
          <h1>In Conversation With Lisa Eldridge MBE:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>Becoming A World Class Makeup Artist</strong></h1>
        </div>

        <div className="racesWrapper">
          <div className="races">
            <h3>Lisa Eldridge MBE is known for her innovative yet timeless approach to makeup. She has worked with celebrities including Dua Lipa, Cindy Crawford, Rihanna, Keira Knightley and many more. In 2015, she was appointed Creative Director of Lancôme Makeup and in 2018, she launched her own award-winning beauty brand. She is also a respected historian of vintage makeup and she has written Face Paint: The Story of Makeup (Image credit: Lisa Eldridge MBE).</h3>
            <div className='grow-line-1'></div>
            <Image src={RihannaVogue} alt='rihanna' />
            <Image src={VogueJapan} alt='vogue-japan' />
            <Image src={VogueParis} alt='vogue-paris' />
            <Image src={VogueTurkey} alt='vogue-turkey' />
            <Image src={HarpersBazaar} alt='harpers-bazaar' />
          </div>
        </div>
        <div className='next-section'>

        </div>
      </div>
    </>
    // <div className='test-container'>
    //   <div className='featured-scroll-container'>
    //     <div className='featured-title-section'>
    //       <Image src={LisaEldrigdeProfile} alt='pfp' className='featured-profile-image'/>
    //       <h1>In Conversation With Lisa Eldridge MBE:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>Becoming A World Class Makeup Artist</strong></h1>
    //     </div>
    //     <div className='mag-cover-wrapper'>
    //       <div className='mags'>
    //         <div className='horizontal-scroll-item'></div>
    //         <div className='horizontal-scroll-item'></div>
    //         <div className='horizontal-scroll-item'></div>
    //         <div className='horizontal-scroll-item'></div>
    //         <div className='horizontal-scroll-item'></div>
    //         <div className='horizontal-scroll-item'></div>
    //         <div className='horizontal-scroll-item'></div>
    //         <div className='horizontal-scroll-item'></div>
    //         <div className='horizontal-scroll-item'></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Test
