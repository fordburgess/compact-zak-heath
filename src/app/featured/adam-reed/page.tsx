"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import LisaEldrigdeProfile from '../../../assets/images/lisa-eldridge-profile.webp';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import AdamReedProfile from '../../../assets/images/adam-reed-profile.webp';
import AdamReed2 from '../../../assets/images/adam-reed-2.jpeg';
import './styles.css'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AdamReed = () => {

  useEffect(() => {

  }, [])

  return (
    <div style={{ color: '#fff' }}>
      <Image priority src={SpringExpanded} id='spring-container-background' alt='test'/>
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', backdropFilter: 'blur(3px) brightness(80%)', zIndex: 5 }}></div>
        <div style={{ position: 'absolute', width: '100vw', height: '100vh', zIndex: 10, color: '#fff' }}>
          <Image src={AdamReedProfile} alt='pfp' className='featured-profile-image'/>
          <h1 className='featured-title'>In Conversation With Adam Reed:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>On Becoming A World Class Hairstylist</strong></h1>
          <h2>Adam shares his journey from a small village salon in Somerset to doing Madonna’s hair. Delving into his love for hair, struggles and neurodiversity he encourages embracing individuality and trusting your decisions.</h2>
          <Image src={AdamReed2} alt='adam-reed-2' className='featured-alt-image' />

      </div>

    </div>
  )
}

export default AdamReed
