"use client"
import React, { useEffect, useRef } from 'react';
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
import { OrbitControls, useScroll } from '@react-three/drei';
import Lipstick from '@/components/lipstick';
import './style.css'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AlessandraSteinherr = () => {
  // const gltf = useGLTF('/lipstick.glb')
  // const modelRef = useRef(null);
  // const scroll = useScroll();
  // const rotationSpeed = 0.1;

  useEffect(() => {
    // if (modelRef.current) {
    //   modelRef.current.rotation.y = scroll * rotationSpeed;
    // }
    // console.log(gltf.scene)
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
        <div className='' style={{ width: '100vw', padding: '0 100px' }}>
          <div style={{ padding: '100px 0'}}>
            <Canvas className='lipstick-canvas' style={{ width: '500px', height: '80vh'}}>
              <Environment preset='studio' />
              <OrbitControls />
              <Lipstick />
            </Canvas>
          </div>

        </div>
      </div>
    </>
  )
}

export default AlessandraSteinherr
